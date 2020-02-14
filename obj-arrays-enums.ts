


// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN = 5, READ_ONLY, AUTHOR }

const person = {
    name: 'Goon',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}


// const person: {
//     name: string
//     age: number
//     hobbies: string[]
//     role: [number, string]
// } = {
//     name: 'Goon',
//     age: 27,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

let favouriteActivities: string[]
favouriteActivities = ['Sport']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}