function spell(text: string): string {
  const array: string[] = [];
  for (let i = 0; i < text.length; i++) {
    array.push(text[i]);
  }

  const response = array.join("-");
  return response;
}

console.log(spell("HelloWorld"));

function spell2(text: string): string {
  return text.split("").join("-");
}

console.log(spell2("HelloWorld"));
