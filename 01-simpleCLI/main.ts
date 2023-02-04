console.log(`Hello, this is Deno speaking. Who's in front of keyboard?`)

const name = prompt('')

const text = `Hello, ${name}! Welcome into Jurassic Park! Hehehe, joking! Just welcome in Deno Land!`

console.log(text)

const helloConfirmation = confirm('Would you like us to make a hello file?')

if (helloConfirmation) {
    await Deno.writeTextFile('hello.txt', text)
} else {
    console.log('No file created.')
}

export {}