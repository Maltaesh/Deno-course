const encoder = new TextEncoder()

const newText = 'Hello world, from writing.ts'
await Deno.writeFile('./hello.txt', encoder.encode(newText))

export {}