// Using square brackets
let numbers: number[] = [1, 2, 3, 4, 5];
// Using generic Array type
let fruits: Array<string> = ["Apple", "Banana", "Cherry"];
// Accessing elements
console.log(numbers[0]); // 1
console.log(fruits[2]); // Cherry

let boolArray: boolean[] = [true, false, true];
let mixedValues: Array<string | number> = ["Apple", 42, "Orange"];
let matrix: number[][] = [
   [1, 2, 3],
   [4, 5, 6]
];
console.log(matrix[0]?.[1]); // 6

//tuples
let user: [number, string] = [1, 'Mosh'];
//wrong
user.push(1);


function calculateTax(income: number ): number {
    if (income < 50)
        return income*1.2;
    return 0;
}

//type alias
type Employee = {
    readonly id: number, name: string, retire: (date: Date)=>void
}

let employee: { readonly id: number, name: string, retire: (date: Date)=>void} = 
{id: 1 ,name:'Mosh', retire: (date: Date)=> {console.log(date)}};
employee.name = 'Mo'

//let employe: Employee = {
//    id: 1,...
//}

function kgtolbs (weight: number | string): number {
    if (typeof weight === 'number'){
        return weight*2.2;
    }
    else
        return parseInt(weight) * 2.2;
}

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    //textBox is a UIWidget object so it
    //needs to implement both
    drag: () => {},
    resize: () => {}
}


const person = {
  firstName: "John",
  lastName: "Doe"
};

let result = ("firstName" in person);
