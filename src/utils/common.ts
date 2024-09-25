// Format string
// Example: "{0} is {1} {2}", "This", "formatting", "hack" to "This is formatting hack"
export function formatString(str: string, ...val: string[]) {
  for (let index = 0; index < val.length; index++) {
    str = str.replace(`{${index}}`, val[index]);
  }
  return str;
}

// Format string by object
// Example: "Hello {friendName} I'm {myName}" with object {friendName: "Alice", myName: "Bob"} to "Hello Alice I'm Bob"
export function formatStringByObj(
  str: string,
  obj: { [key: string]: string | number },
) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      str = str.replace(`{${key}}`, obj[key].toString());
    }
  }
  return str;
}
