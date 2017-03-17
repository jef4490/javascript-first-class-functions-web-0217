function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function johnny() {
    return "hey"
  };
}

function returnsAnAnonymousFunction() {
  return function() { return "hey"};
}


// function returnsAnAnonymousFunction(function() {return "hi"});
