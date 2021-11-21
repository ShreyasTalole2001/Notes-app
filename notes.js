
const fs = require('fs')
const chalk = require('chalk')



const getNotes = function () {
    const notes = loadNotes();
    console.log(notes)
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicatesNotes = notes.filter(function (notes) {
        return notes.title === title
    })

    if(duplicatesNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added.'))
    }else{
        console.log(chalk.red.inverse('Notes Title taken.'))
    }

   
}

const removeNote = function (title) {
    
    const notes = loadNotes();
    const notestokeep = notes.filter(function (notes) {
        return notes.title !== title
    })

    if(notes.length > notestokeep.length){
        console.log(chalk.green.inverse('Note Removed...'))
         saveNotes(notestokeep)

    }else{
        console.log(chalk.red.inverse('No Note Found...'))

    }


}



const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}










module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}