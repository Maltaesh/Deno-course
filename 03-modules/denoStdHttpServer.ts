// Deno std library http
import {serve} from "https://deno.land/std@0.176.0/http/oakServer.ts"

const data = await Deno.readFile('./data.json', {encoding: 'utf-8'})

serve((_req) => {
    return new Response(data, {
        headers: {
            'content-type': 'application/json'
        }
    })
})

export {}
