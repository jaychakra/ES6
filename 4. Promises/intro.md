### What are Promises
A promise is an object that may produce a single value some time in the future

#### States of Promises
* Unresolved: Waiting for something to finish
* Resolved: Something finished and  it all went good. If resolved ==> then property gets called
* Rejected: Something finished and something went bad. If rejected ==> catch property gets called

#### Functions used in Promises
* resolve()
* reject()

#### sectionSyntax
    new Promise( /* executor */ function(resolve, reject) { ... } );
#### sectionParameters
**executor**
A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object). The resolve and reject functions, when called, resolve or reject the promise, respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred. If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored.

