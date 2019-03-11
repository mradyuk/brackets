module.exports = function check(str, bracketsConfig) {
   const opening = [];
  const closing = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    const arr = bracketsConfig[i];
    opening.push(arr[0]);
    closing.push(arr[1]);
  }
  
  let stack = [];

  if (str.length === 0) {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (closing.indexOf(char) === opening.indexOf(char)) {
      if (stack.length !== 0 && stack[stack.length - 1] !== char) {
        stack.push(char);
      }
      if (stack.length !== 0 && stack[stack.length - 1] === char) {
        stack.pop(char);
      }
    } else {
      if (opening.indexOf(char) > -1) {
        stack.push(char);
      } else if (closing.indexOf(char) > -1) {
        const pair = opening[closing.indexOf(char)];
        if (stack.pop() !== pair) {
          return false;
        }
      }
    }
  }

  return stack.length == 0;
}
