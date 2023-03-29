---
title: Blockchain Events
icon: actions
order: 2
---

# Blockchain Events

There are two categories of events in the cosmos-sdk documentation:

1. Old modules may not have typed events, which means their events are listed in a 
Markdown document under the module's spec folder.

2. New modules introduced in the cosmos-sdk or developed by the Greenfield team emit typed events, 
  which are defined in a protobuf file. Therefore, for these modules, we can refer directly to their protobuf file.

Here are the events grouped by modules that are emitted by the Greenfield blockchain:

* [Authz](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/proto/cosmos/authz/v1beta1/event.proto)

* [Bank](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/bank/spec/04_events.md)

* [Bridge](https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/bridge/event.proto)

* [Challenge](https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/challenge/events.proto)

* [Distribution](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/distribution/spec/06_events.md)

* [Feegrant](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/feegrant/spec/04_events.md)

* [Gov](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/gov/spec/04_events.md)

* [Oracle](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/proto/cosmos/oracle/v1/event.proto)

* [Payment](https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/payment/events.proto)

* [Slashing](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/slashing/spec/06_events.md)

* [Storage Provider](https://github.com/bnb-chain/greenfield/blob/develop/proto/greenfield/sp/events.proto)

* [Storage](https://github.com/bnb-chain/greenfield/blob/master/proto/greenfield/storage/events.proto)

* [Staking](https://github.com/bnb-chain/gnfd-cosmos-sdk/blob/master/x/staking/spec/07_events.md)


This [ADR](https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/architecture/adr-032-typed-events.md) also 
proposes adding affordances to emit and consume these events. For developers, they will only need to write `EventHandlers`
which define the actions they desire to take.