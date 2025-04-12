// --------------------------------- Index  ---------------------------------
// 1. Event Listeners
//     - class  and object 
// 
// 
// 
// 
// 
// 
// 
// 


// -------------------------- EVENT LISTENERS  ---------------------------------

const EventEmitter= require('events' )

const customEmitter = new EventEmitter()
// eventEmitter is a constructor function so  new is used to store it's one of the value as object in custom emitter
customEmitter.on( 'response' , (name,id) =>{
   console.log(`data recieved user ${name} with id:${id}`)
    })
    
customEmitter. emit('response',`john`,34)

// class and object - https://youtu.be/K8eOkzQ_o9w?si=ENDIF-CNo2RtY8qr

// The on method is used to register event listeners for specific events.
// The emit method is used to trigger (or emit) events.
// On emit the input after response is called arguments and these will given to on function  as inputs

//--------------------------------- STREAM ---------------------------------

// Streams are used to read or write sequentially for a big file or continues source
// Types:
// Writeable
// Readable
// Duplex
// Transform

// when writing a file and saving it in a variable , As stream have large amount of data it is not possible to store it in a variable
// 

const fs = require('fs')

fs.writeFile('big.txt', "data",'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

const {createReadStream} = require ('fs')

const stream = createReadStream('./big.txt')

stream.on('data',(result)=>{
    console.log(result)
})