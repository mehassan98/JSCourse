/* let myBook = { // object create
    // object attributes

    title:'JS 101',
    author: 'Hassan Anis',
    pageCount: '450'                                                    // Model book and its objects

}
//console.log(myBook.author)

console.log(`The book name is: ${myBook.title}  
Written by: ${myBook.author} 
Page Count: ${myBook.pageCount}`)
*/ 

//TASK: To create a person with these attributes:
// name, age and location
// sample o/p: my name is hassan and i am 23 years old, i live in pindi.
//bump the age by 1 and re-print the statement

let thisPerson = {
    name:'Hassan',
    age: 23,
    location: 'Pindi'
}


console.log(`Persons's name is: ${thisPerson.name}
Age is: ${thisPerson.age}
Location is: ${thisPerson.location}`)
console.log()

// thisPerson.age = thisPerson.age + 1 //bumping age by 1
thisPerson.age= thisPerson.age+1

console.log(`Persons's name is: ${thisPerson.name}
Age is: ${thisPerson.age}
Location is: ${thisPerson.location}`)