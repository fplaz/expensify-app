const { initializeApp } = require('firebase/app')
const {getDatabase}  = require('firebase/database')

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DAMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    databaseURL: process.env.FIREBASE_DATABASE_URL
}
  
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)


export default db


//Dummy data
// const user = {
//     name: 'Fernando Plaz',
//     age: 33,
//     isSingle: true,
//     location: {
//         country: 'Chile',
//         city: 'Puerto Varas'
//     }
// }

// const updates = {
//     weight: '72',
//     height: '185',
//     age: 56
// }


// const noteData = {
//     title: 'My first note',
//     body: 'This is my first note. Here we go!'
// }

// const notesRef = child(ref(db), 'notes')
// set(push(notesRef), noteData)

// const expense1 = {
//     amount: 10,
//     description:'first'
// }

// const expense2 = {
//     amount: 100,
//     description:'second'
// }

// const expense3 = {
//     amount: 1000,
//     description:'third'
// }

// const expensesRef = child(ref(db), 'expenses')

// // set(push(expensesRef), expense1)

// get(expensesRef).then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     })
//     console.log(expenses)
// })

// onValue(expensesRef, (snapshot) => {
//     const expenses = []
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     })
//     console.log(expenses)
// })



// // //Write to database function
// // const writeToDatabase = async (data) => {
// //     try {
// //         await set(ref(db, 'users/'), data);
// //         console.log('Database updated!')
// //     } catch (error) {
// //         console.error('This failed with error:', error)
// //     }
// // }

// // //Remove from database function
// // const deleteFromDatabase = async (data) => {
// //     try {
// //         await remove(ref(db, 'users/' + data));
// //         console.log('Deleted from DB!')
// //     } catch (error) {
// //         console.error('This failed with error:', error)
// //     }
// // }

// // //Update from database
// // const updateFromDatabase = async (data) => {
// //     try {
// //         await update(ref(db, 'users/'), data);
// //         console.log('Updated from DB!')
// //     } catch (error) {
// //         console.error('This failed with error:', error)
// //     }
// // }

// // writeToDatabase(user)
// // deleteFromDatabase('isSingle')
// // updateFromDatabase(updates)



// // const getDataFromDatabase = async () => {
// //     try {
// //         console.log('ok')
// //         const snapshot = await get(child(ref(db), 'users/'))
// //         if(snapshot.exists()) {
// //             console.log(snapshot.val())
// //         } else {
// //             console.log('No data')
// //         }
// //     } catch(error) {
// //         console.log('There was a problem:', error)
// //     }
// // }

// // getDataFromDatabase()

// // onValue(ref(db, '/users'), (snapshot) => {
// //     const data = snapshot.val()
// //     console.log(data)
// // })