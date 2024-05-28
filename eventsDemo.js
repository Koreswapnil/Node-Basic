import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
      console.log('Hello ' + name);
}

function goodbyeHandler(name) {
      console.log('Goodbye ' + name);
}

//Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit events
myEmitter.emit('greet', 'Swapnil' );
myEmitter.emit('goodbye', 'Swapnil');

//Error handling
myEmitter.on('error', (err) => {
      console.log('An Error Occured:', err)
});

//Simulate error
myEmitter.emit('error', new Error('Something went wrong'));