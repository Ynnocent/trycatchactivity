const userInput = 0;

try {
  if (userInput == 0) {
    console.log("Wahooooooo");
  } else {
    throw new Error("lololol new error");
  }
} catch (error) {
  console.log(error);
  console.log("doesn't work like that dummy");
}
