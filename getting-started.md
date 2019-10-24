# Getting Started

## Installation
**Subspace** can be used in browser, node and native script environments. To get started install the package `@status-im/subspace` using `npm` or `yarn` by executing this command in your project directory:
```bash
# Using npm
npm install --save @status-im/subspace

# Using yarn
yarn add @status-im/subspace 
```

## Importing the library

```js
// ESM (might require babel / browserify)
import Subspace from '@status-im/subspace';  

// CommonJS
const Subspace = require('@status-im/subspace'); 
```


## Connecting to a web3 provider
To interact with the EVM, **Subspace** requires a valid websockets Web3 provider.

```js
const subspace = new Subspace(web3.currentProvider);
await subspace.init();
```

In addition to the provider, `Subspace` also accepts an `options` object with settings that can change its behavior:
- `dbFilename` - Name of the database where the information will be stored (default `'subspace.db'`)
- `callInterval` - Interval of time in milliseconds to query a contract/address to determine changes in state or balance (default: `undefined`. Obtains data every block).


## Reacting to data
Once it's initialized, you can use **Subspace**'s methods to track the contract state, events and balances. These functions return RxJS Observables which you can subscribe to, and obtain and transform the observed data via operators.

::: tip What is an Observable?
The `Observable` type can be used to model push-based data sources such as DOM events, timer intervals, and sockets. In addition, observables are:
- Compositional: Observables can be composed with higher-order combinators.
- Lazy: Observables do not start emitting data until an observer has subscribed.
:::

#### Further read
- [RxJS Observables](https://rxjs-dev.firebaseapp.com/guide/observable)

## Tracking state
You can track changes to a contract state variable, by specifying the view function and arguments to call and query the contract. 
```js
const stateObservable$ = Contract.methods.functionName().track();
```

::: tip Tracking the public variables of a contract
State variables implicity create a `view` function when they're defined as `public`. The `functionName` would be the same as the variable name, and `functionArgs` would have a value when the type is a `mapping` or `array` (since these require an index value to query them).
:::

Example:

```js
const productTitle$ = ProductList.methods.products(0).track().map("title");
productTitle$.subscribe((title) => console.log("product title is " + title));
```

The subscriber will be triggered whenever the title changes

## Tracking events
You can track events and react to their returned values.
```js
const eventObservable$ = Contract.event.eventName().track();
```

Example:

```js
const rating$ = Product.events.Rating().track().map("rating")).pipe(map(x => parseInt(x)));
rating$.subscribe((rating) => console.log("rating received: " + rating));
```

**Event Sourcing**

You can easily do event sourcing with subspace.

For e.g: if you needed to get the average rating of the last 5 events:

```js
import { $average, $latest } from "@status-im/subspace";

const rating$ = Product.events.Rating().track().map("rating")).pipe(map(x => parseInt(x)));

rating$.pipe($latest(5), $average()).subscribe((rating) => {
  console.log("average rating of the last 5 events is " + rating)
});
```

## Tracking balances
You can also track changes in both ETH and ERC20 token balances for each mined block or time interval depending on the `callInterval` configured. 

Tracking ETH balance in an address:

```js
const address = "0x0001020304050607080900010203040506070809";

subspace.trackBalance(address).subscribe((balance) => {
  console.log("ETH balance is ", balance)
});
```

Tracking ETH balance in a Contract:

```js
Contract.trackBalance().subscribe((balance) => {
  console.log("ETH balance is ", balance)
});
```

Tracking an ERC20 balance in a Contract:

```js
const tokenAddress = "0x744d70fdbe2ba4cf95131626614a1763df805b9e"; // SNT Address

const myBalanceObservable$ = Contract.trackBalance(tokenAddress);
```

::: warning 
Balances are returned as a string containing the value in *wei*.
:::

## Subscriptions
Once you have an `Observable`, you may receive a stream of data by creating a subscription. Subscriptions are triggered each time an observable emits a new value. These subscription receive a callback that must have a parameter which represents the value received from the observable (a contract state variable, an event, or the balance of an address);  and they return an object representing the subscription.

Subscriptions can be disposed by executing the method `unsubscribe()` liberating the resource held by it:

```js
const myBalanceObservable$ = subspace.trackBalance(address, tokenAddress);
const subscription = myBalanceObservable$.subscribe(value => { 
  console.log("The balance is: ", value); 
});

// ...

subscription.unsubscribe();
```

#### Further read
- [RxJS Subscriptions](https://rxjs-dev.firebaseapp.com/guide/subscription)

## Cleanup
If **Subspace** is not needed anymore, you need can invoke `close()` to dispose and perform the cleanup necessary to remove the internal subscriptions and interval timers created by **Subspace** during its normal execution, thus avoiding any potential memory leak.

```
subspace.close();
```
::: warning What about subscriptions created with our observables?
Any subscription created via the tracking methods must be unsubscribed manually (in the current version).
:::

