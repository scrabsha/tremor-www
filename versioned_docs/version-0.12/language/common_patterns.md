---
sidebar_position: 9
---
# Common Patterns

This document provides a few recipes for common patterns in Tremor [Scripts]. Please note however that it neither is exhaustive nor should those patterns considered the 'only way' to perform certain tasks.

## Extracting a raw message

If the event is a unstructured / raw message parsing it can be tricky since we can not match over the contents string, except for similarity with a [String literal](./expressions.md#utf-8-encoded-strings). The following code offers a solution to it by using the [dissect extractor](../reference/extractors/dissect.md):

```tremor
# event = "John Doe"

let event =  match {"message": event} of
  case r = %{ message ~= dissect|%{first} %{last}| } => r.message
  default => drop
end;
# event = {"first" : "John", "last": "Doe"}
```

## Appending to an array

In order to append to an array we can use the [`array::push`](../reference/stdlib/std/array#pusharray-element) function

```tremor
use std::array;
# event = {"key": "value", "tags": ["tag1"]}
let event.tags = array::push(event.tags, "tag2");
# event = {"key": "value", "tags": ["tag1", "tag2"]}
```

## Validating over extracted data

Sometimes we want to validate over extracted data without forcing the extraction to be a regular expression. For validations like the one below this pattern can be used.

```tremor
use std::array;
match event of
  # ...
  case result = %{message ~= dissect|%{log_level} %{log_timestamp}: %{logger}: %{message}|} when array::contains(["ERROR", "WARN", "INFO", "DEBUG"], result.message.log_level) => 
    let event = merge event of reesult.message end
  # ...
end
```

Here we extract the `log_level` and validate of that the it is one of `ERROR`, `WARN`, `INFO` or `DEBUG` by moving the check into the when guard we don't need to use a regular expression for this validation. Instead we can use array membership.

## Replacing a field with an extraction

When extracting a field to merge with with the event and wanting to remove the extracted field we can take advantage of the [`merge`] expressions behaviour that it will treat `null` in merged records as a command to delete the data by setting the field to replace to `null` before merging.

```tremor
# event = %{"message": "John Doe"}
let event = merge event of 
  match event of
    case r = %{message ~= dissect|%{first} %{last}| } => 
      let r = r.message;
      let r.message = null;
      r
    default => {}
  end;
end;
# event = %{"first": "John", "last": "Doe"}
```

## No effect on non matching case

If we use [`merge`] with match we can make the `default` case to have no effect by using `{}`. This is possible since [`merge`] on `{}` is a identity function.

```tremor
# event = %{"message": "John Doe"}
let event = merge event of 
  match event of
    case r = %{message ~= dissect|%{first} %{midle} %{last}| } => 
      let r = r.message;
      let r.message = null;
      r
    default => {}
  end;
end;
# event = %{"message": "John Doe"}
```

## Boolean decisions

To make boolean decisions we can match on `true` or `false`.

```tremor
use std::type;

match type::is_record(event) of
  case true => let event_type = "record"
  case false => let event_type = "other"
end
```

## Diverting an event to a different channel

By default the [Script] operator forwards all events that are not dropped to the `out` port for further processing. However it is possible to route events to different ports using the `emit` keyword. This allows, for example, diverting certain events to reserve bandwidth for a more important subset.

```tremor
match event.importance of
  case "high" => emit # this is the same as emit event => "out"
  case "medium" => emit event => "divert"
  default => drop # deletes the event
end
```

## The 'null default'

When the result of a match statement isn't needed - as in we use it purely for it's side effects - and we want the `default` to have no effect we can use `null` here.

```tremor
match event of
  case %{ tags ~= ["high-priority"]} => let event.importance = "high"
  default => null
end
```

## Testing against the type of a field

Sometimes we want to know if a field has a certain type. The `type` module provides help here but common types such as `record` or `array` can be checked using their patterns.

```tremor
use std::type;

match event of
  case %{field ~= %{}} => emit "event.field is a record"
  case %{field ~= %[]} => emit "event.field is a array"
  case %{} when type::is_record(event.field) => emit "event.field is a record"
  case %{} when type::is_array(event.field) => emit "event.field is a array"
  case %{} when type::is_number(event.field) => emit "event.field is a number (float or integer)"
  case %{} when type::is_integer(event.field) => emit "event.field is an integer"
  case %{} when type::is_float(event.field) => emit "event.field is a float"
  case %{} when type::is_null(event.field) => emit "event.field is null (but set)"
  case %{absent field} => emit "event.field is not set"
  # ...
end
```

## Routing messages

A [Script] can be used to route messages by combining the `emit` feature and the fact that the [Script] operator allows different output ports.

To route to doing a `blue` / `green` split based on a field in a record we could use the following code:

```tremor
define pipeline split
pipeline

  define script split_script
  script
    match event of
      case %{key == "blue"} => emit event => "blue"
      case %{key == "green"} => emit event => "green"
      default => drop
    end
  end;
  create script split_script;

  select event from split_script/blue into out/blue;
  select event from split_script/green into out/green;
end
```

## Percentage drops of events

To drop a percentage of all events, functions in the [random](../reference/stdlib/std/random) module can be used.

We generate a random number in a range and based on the outcome, we decide whether we want to drop an event or not. Example:

```tremor
# drop 50% of the events
match random::integer(0, 100) < 50 of
  case true => drop
  default => null
end
```

Most of the time, we want to do this only for certain matching events (as opposed to all events).

```tremor
let random_number = random::integer(0, 100);
match event of
  case %{key == "blue"} when random_number < 25 => drop   # drop 25% of blue events
  case %{key == "yellow"} when random_number < 75 => drop # drop 75% of yellow events
  case %{key == "red"} => drop                            # drop 100% of red events
  default => null                                         # drop 0% of other events
end
```

:::note

Also consider the [`qos::percentile` operator](../reference/operators/percentile.md) for this kind of task.

:::

## Check if a variable is present/absent

To check if a variable is present, we can rely on the [`present` keyword](./reference/script.md#presence-and-absence) (and inversely, [`absent`](./reference/script.md#presence-and-absence)).

```tremor
# matches default case
match present non_existent_var of
  case true => "is present"
  default => "not present"
end;
```

Note that this is different from the case where a variable is set to `null`, for which we can do [function-based](../reference/stdlib/std/type#is_nullvalue) checks as well as pattern-match with [match](./expressions.md#match).

Using non-existent variables in contexts other than `present` or `absent` will throw an error terminating the script, so this is useful for guarding against that when needed. This is especially useful when working with meta variables as part of tremor runtime, where -- as part of a pipeline node -- we may need to check if a certain meta variable is set or not (eg: from a previous pipeline node) and act accordingly. For such needs, the approach above can be used. Alternatively, we can also rely on [record patterns](./expressions.md#matching-record-patterns) there:

```tremor
# tests for presence of $key
match $ of
  case %{present key} => "present"
  default => "not present"
end;
```

Since `$` gives a record with all the meta variable name-value mapping, this works nicely.

### Branching

Branching data into multiple streams is performed via [Select] operations

Branch data into 3 different output stream ports:

```tremor
select event from in into out/a;
select event from in into out/b;
select event from in into out/c;
```

```mermaid
graph LR
```

Branch data into 3 different intermediate [Streams]:

```tremor
create stream a;
create stream b;
create stream c;

select event from in into a;
select event from in into b;
select event from in into c;
```

### Combining

Multiple data streams can also be combined via [Select] operations.

Combine 3 data streams into a single output stream:

```tremor
...

select event from a into out;
select event from b into out;
select event from c into out;
```

Combine 3 data stream ports from 1 or many streams into a single output stream

```tremor
...
# select events from port `1` on stream `a`
select event from a/1 into out;

# select events from port `2` on stream `a`
select event from a/2 into out;

# select event from default port `out` on stream `b`
select event from b into out;
```

[Streams]: ./pipelines.md#stream-definitions
[Select]: ./pipelines.md#select-queries
[Scripts]: ./scripts.md
[`merge`]: ./expressions.md#merge