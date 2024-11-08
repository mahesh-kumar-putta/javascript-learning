// String slicing - creating a substring from a portion of another String
// it won't alter the existing string

// String.slice(start,end); // ending index is exclusive

const userName = "MaheshKumar Putta"

console.log(userName.slice(0, 11));

console.log(userName.slice(12));

console.log(userName.slice(-5));

let firstName = userName.slice(0, userName.indexOf(" "));

let lastName = userName.slice(userName.indexOf(" ")+1);


console.log(firstName);
console.log(lastName);

