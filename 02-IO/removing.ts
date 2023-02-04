const removeConfirmation = confirm('Do you want to remove any file?')

if (removeConfirmation) {
    const dirEntryList = []

    try {
        for await (const dirEntry of Deno.readDir('./')) {
            dirEntryList.push(dirEntry)
        }

        const fileToRemove = prompt('Write the name of file to remove:')
        const file = dirEntryList.find(el => el.name === fileToRemove)

        if (file) {
            await Deno.remove(`./${fileToRemove}`)
            console.log(`Success! File ${fileToRemove} was removed!`)
        } else {
            console.log(`File >>${fileToRemove}<< doesn't exist.`)
        }
    } catch (err) {
        console.log(err)
    }
}

export {}