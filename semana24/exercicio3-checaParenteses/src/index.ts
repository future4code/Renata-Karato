function checkParentheses(string) {
    const stack = [];
  
    for (let char of string) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        const lastOpeningChar = stack.pop();
        if(!lastOpeningChar) {
          return false
        } else if (
          (lastOpeningChar === "(" && char !== ")") ||
          (lastOpeningChar === "[" && char !== "]") ||
          (lastOpeningChar === "{" && char !== "}")
        ) {
          return false;
        }
      }
    }
  
    if (stack.length > 0) {
      return false;
    }
    return true;
  }

console.log(checkParentheses("([])"));
console.log(checkParentheses("([{}])"));
console.log(checkParentheses("([)]"));
console.log(checkParentheses("(]"));
