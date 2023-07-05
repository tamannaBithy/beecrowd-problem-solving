// Write a program that keep reading a password until it is valid. For each wrong password read, write the message "Senha inválida". When the password is typed correctly print the message "Acesso Permitido" and finished the program. The correct password is the number 2002.

// Input
// The input file contains several tests cases. Each test case contains only an integer number.

function testPass(n) {
  if (n === 2002) {
    console.log("Acesso Permitido");
  } else {
    console.log("Senha inválida");
  }
}

testPass(2002);
