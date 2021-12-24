function sayHello(name) {
  const greetings = "Hey";

  if (!name) {
    return `${greetings} man, what's your name again?`;
  }

  return `${greetings} ${name}, how are you?`;
}

module.exports.sayHello = sayHello;
