//implicit types

let hellWorld = "Hello,world!";
hellWorld = 5;
// even though normal javascript allow this type script prevent this to avoid bugs

//explicit types

let firstName: string = "John";

// tuple enum are new types

//tuple

//fixed size array
type stringAndNumber = [string, number];

let x: stringAndNumber = ["hello", 10];

//enums
// same as cpp

//npx ts index.ts - to create corresponding js file

//Interfaces

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "John",
  id: 0,
}; // only the elements in User can added here \

//composing types -> union

type WindowStates = "open" | "closed" | "minimized";

const windowState: WindowStates = "open"; // only 3 values given to the type can be assigned

const getLength = (param: string | string[])=>{
        return param.length
}
