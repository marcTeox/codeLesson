function logAnswer(answer, points) {
  console.log(
    `The aswer is: ${answer} of course! If you it that right, you get ${points} points!`
  );
}

console.log("What is the capital of Peru?");

setTimeout(logAnswer, 2000, "Lima", 10);
