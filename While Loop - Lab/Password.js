function password(input) {
  let index = 0;
  let username = input[index];
  index += 1;
  let password = input[index];
  index += 1;

  let data = input[index];
  index += 1;

  while (password !== data) {
    data = input[index];
    index += 1;
  }
  console.log(`Welcome ${username}!`);
}
