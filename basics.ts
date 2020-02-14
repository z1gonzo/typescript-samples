function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }

}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = 'Result is: ';

const result = add(number1, number2, printResult,phrase);













































// const button = document.querySelector("button")! as HTMLButtonElement
// const input1 = document.querySelector("#num1")! as HTMLInputElement
// const input2 = document.querySelector("#num2")! as HTMLInputElement

// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// button.addEventListener("click", function() {
//     console.log(add(+input1.value, +input2.value))
// })

// function pow(x: number, y: number): string {
//     return Math.pow(x, y).toString();
// }

// pow(5, 10)

// function pow2(x: number, y: number): void {
//     Math.pow(x, y).toString();
// }


//Arrays
// type MyList = [number?, string?, boolean?]

// const arr: MyList= []

// arr.push(1)
// arr.push('23')
// arr.push(false)


//Generics 

// class Observable<T> {
    // constructor(public value: T) {}
// }
// 
// let x: Observable<number>
// 
// let y: Observable<MyList>
// 
// let z = new Observable(23)