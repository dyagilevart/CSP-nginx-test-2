const generateRandomString = () => {
  let result = '';
  let length = 32;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  array.forEach(x => result += characters[x % charactersLength]);
  return result;
}

export default { generateRandomString };
