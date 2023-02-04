const decoder = new TextDecoder('utf-8')
const data = await Deno.readFile('../01-simpleCLI/hello.txt')
console.log(decoder.decode(data))

export {}