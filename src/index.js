module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let open = ["(", "[", "{", "1", "3", "5", "7", "8", "|"];
  let close = [")", "]", "}", "2", "4", "6", "7", "8", "|"];
  let openIndex;
  let closeIndex;
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
              openIndex = open.indexOf(arr[i]);
              if (openIndex !== -1) {
                  if ((arr[i] === "7" && stack.includes(6)) ||
                      (arr[i] === "8" && stack.includes(7)) ||
                      (arr[i] === "|" && stack.includes(8))) {
                          closeIndex = close.indexOf(arr[i]);
                          openIndex = stack.pop();
                          if (closeIndex !== openIndex) {
                              return false;
                          }
                          continue;
                      } else {
                  stack.push(openIndex);
                  continue;
              }
              }

              closeIndex = close.indexOf(arr[i]);
              if (closeIndex !== -1) {
                  openIndex = stack.pop();
                  if (closeIndex !== openIndex) {
                      return false;
                  }
              }
          }



      if (stack.length !== 0) {
          return false
      } else {
          return true
      }

}
