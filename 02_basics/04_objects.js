const tinderUser = new Object(); // declaring an object using new keyword and object class ; makes a singleton object
// const tinderUser = {} // makes a non-singleton object

tinderUser.id = "5181";
tinderUser.name = "keshav";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);
const regularUser = {
  email: "abc@gmail.com",
  fullName: {
    firstName: "Abd",
    lastName: "yxer",
  }, // nesting of objects is allowed
};

console.log(regularUser.fullName.firstName); // chaining of dots to access the nested object's element

/* Concept of Optional chaining (?.) comes if the accessed object's key is null or undefined then rather throwing an error it'll show undefined */

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = { obj1, obj2 }; // it nestes the obj1 and obj2 in obj3 which wasn't expected

const obj3 = Object.assign({}, obj1, obj2) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// first param is target at which all the other source objects are copied to, good practise to give empty braces here to avoid change in the object
const obj4 = {...obj1, ...obj2} // using spread operator to copy the elements of one object to another

console.log(obj4); 
const users = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "abc@gmail.com"
    },
    {
        id : 3,
        email : "abc@gmail.com"
    },
    {
        id : 4,
        email : "abc@gmail.com"
    }
] // while fetching users from a db; you get this type of array of users

console.log(users[0].email); // use indexing for the array element and then dot notation for the object's element

console.log(Object.keys(tinderUser)); // returns the keys of the specified object in array form so iterable
console.log(Object.values(tinderUser)); // returns the values of the specified object in array form so iterable
console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable own properties of an object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name.

// Destructring of Objects in JS : a syntactical sugar for better code readability
const course = 
{
    courseName : "JS in Hindi",
    price : "999/-",
    courseInstructor : {
        male : "Hitesh",
        female : "HogiKoi"
    }
}

const {courseName, courseInstructor, price } = course 
// here the keys of the object course are extracted and assigned to variables with the same names
const {courseInstructor : teacher} = course
//here if the keys name can also be changed using (objName : newName) while extracting
const {platform = "Youtube"} = course
// default params can also be given when a key is undefined or missing like platform : "YouTube"
const {teacher : {male, female}} = course
// destructure nested objects by specifying the path to the properties
const {email , ...otherDetails} = regularUser // rest operator collects the remaining properties if number of properties is more

function greet({courseName, price}){
    console.log(`The course ${courseName} has price ${price}`)
}
// can also be destructured directly in function params to extract values from an object passed as an argument

/*
Rest Operator : used to collect the remaining elements or properties during destructuring in arrays or objects into a single variable ; gathers elements or properties that are not assigned yet to variables

Spread Operator : used to spread out or expand the elements of an array or properties of an object ; expands the elements or properties so that they can be passed or assigned individually
*/