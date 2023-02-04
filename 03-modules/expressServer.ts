// Express server
import express from 'npm:express'

const app = express()
const decoder = new TextDecoder('utf-8')
const data = await Deno.readFile('./data.json')

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})

app.get('/', (req, res) => {
    res.send(decoder.decode(data))
})