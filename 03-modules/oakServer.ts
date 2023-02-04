// Oak server
import {Application} from "https://deno.land/x/oak/mod.ts"

const app = new Application()
const data = await Deno.readFile('./data.json', {encoding: 'utf-8'})
app.use((ctx) => {
    console.log('Server is running on port 8000')
    ctx.response.body = data
})

await app.listen({port: 8000})