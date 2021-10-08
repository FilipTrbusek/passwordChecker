let password = prompt("Type your password.", "Password");

if (password.includes(1234)) {
  console.log("Password can't contain numbers in the sequantial order.");
} else if (password.length > 13) {
  console.log("Very strong password");
} else if (password.length >= 8 && password.length <= 13) {
  console.log("Strong password.");
} else {
  console.log("Weak password.");
}
