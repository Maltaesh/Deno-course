const renameConfirmation = confirm('Do you want to rename the file?')

if (renameConfirmation) {
    const dirEntryList = []

    try {
        for await (const dirEntry of Deno.readDir('./')) {
            dirEntryList.push(dirEntry)
        }

        const fileToChange = prompt('Write the name of file to change:')
        const file = dirEntryList.find(el => el.name === fileToChange)

        if (file) {
            const newName = prompt('Write new file name: ')
            await Deno.rename(`./${fileToChange}`, `./${newName}`)
            console.log(`Success! File name changed to: ${newName}`)
        } else {
            console.log(`File >>${fileToChange}<< doesn't exist.`)
        }
    } catch (err) {
        console.log(err)
    }
}

export {}