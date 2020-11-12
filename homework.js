const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    },
    {
        firstName: 'Brad',
        lastName: 'Pitt',
        age: 54
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];

let personLastName = prompt ("What's your last name?");

if (personLastName === 'Kutcher'){
const search = data.find(person => person.lastName === 'Kutcher');
console.log(search);
}
if (personLastName === 'Pitt'){
const search = data.find(person => person.lastName === 'Pitt');
console.log(search);
} 
if (personLastName === 'Dakota'){
    const search = data.find(person => person.lastName === 'Dakota');
    console.log(search);
} 
else {
    alert ("No results found for your request");
}
//let lcPersonLastName = personLastName.toLowerCase();