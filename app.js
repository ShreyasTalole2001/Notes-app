const chalk = require('chalk')           /* chalk is from npm */
const yargs = require('yargs');
const { getNotes } = require('./notes');
const notes = require('./notes')      

// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title'
        }, 
        body:{
            describe: 'Note Body'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Delete note by this title'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing out all note...')
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        getNotes();
    }
})


console.log(yargs.argv);




