---
id: index
title: Home
---

# Tremor

Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure.

Tremor has been running in production since October 2018, processes 10 terabytes of data per day, or 10 billion messages per minute and 10 million metrics per second. Tremor achieves this with 10x footprint reduction in bare metal infrastructure and cloud based deployments in 6 ( and counting ) systems at Wayfair, whilst reducing memory usage by 10x and delivering better quality of service under conditions when our network is saturated at peak eCommerce trading lifecycles.

Tremor reduces cost, reduces complexity and consolidates and simplifies our operational environment to
spark SRE joy, to reduce workload on our NOC and to drop our operating costs.

As a secondary benefit, tremor is relatively low latency and relatively high throughput however this is
an explicit non-goal of the project.

Tremor runs 24x7 365 days per year and is implemented in the Rust programming language.

Click for an [Architectural overview](./overview.md) or [Canned History](./history.md) of the project.

Other interesting topics are:

* [The tremor-script language](tremor-script/index.md)
* [The tremor-query language](tremor-query/index.md)
* Artefacts namely:
    * [Onramps](Artefacts/onramps.md)
    * [Offramps](Artefacts/offramps.md)
    * [Codecs](Artefacts/codecs.md)
    * [Pre-](Artefacts/preprocessors.md) and [Postprocessors](Artefacts/postprocessors.md)
* Operational information about
    * [Monitoring](Operations/monitoring.md)
    * [Configuration](Operations/configuration.md) and the [Configuration Walkthrough](Operations/configuration-walkthrough.md)
    * [The tremor CLI](Operations/cli.md)
* [The tremor API](api.md)
* [Workshop](https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/Workshop/) and various use case [examples](https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/Workshop/examples)
* Development related information
    * [Benchmarks](Development/benchmarking.md)
    * [A Quickstart Guide](Development/quick-start.md)
    * Notes about [Testing](Development/testing.md) and [Debugging](Development/debugging.md)

This is not an exhaustive list and for the curious it might be worth to explore the [docs](https://github.com/tremor-rs/tremor-www-docs/tree/main/docs) folder on their own.