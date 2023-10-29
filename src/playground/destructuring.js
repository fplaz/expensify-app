// const person = {
//     name: 'Fercho',
//     age: 32,
//     location: {
//         city: 'Puerto Varas',
//         temp: 5
//     }
// }

// const {name: firstName = 'Anonymous', age} = person
// const {city, temp: temperature} = person.location

// console.log(`${firstName} is ${age}.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19143']
// const [, city, state, zip = '1234'] = address
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)