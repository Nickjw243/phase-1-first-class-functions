function receivesAFunction(callbackFunction) {
    callbackFunction()
}

function returnsANamedFunction() {
    return function anotherFunction() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}