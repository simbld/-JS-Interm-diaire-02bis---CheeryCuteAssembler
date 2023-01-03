function sayHello(userName) {
  console.log(`Hello, ${userName}`);
}

function sayWelcome(userName) {
  console.log(`Welcome, ${userName}`);
}

function askUserName(callback) {
  const name = prompt("Hey, what's your name?");
  callback(name);
}

askUserName(function(userName) {
  console.log(`Hey buddy, welcome ${userName}`);
});