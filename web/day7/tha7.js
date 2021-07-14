// Ans1
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student.name, ' ', student.sclass, ' ', student.rollno);

//Ans2
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student.name, ' ', student.sclass, ' ', student.rollno); //before the deletion  of properties
delete student.rollno;
console.log(student.name, ' ', student.sclass, ' ', student.rollno); //before the deletion  of properties

//Ans3
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
objectLenght = Object.keys(student).length;
console.log(objectLenght);

//Ans 4
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
for (item in library)
    console.log(library[item].title, library[item].author, library[item].readingStatus);

//ans5

function volume(r, h) {
    return (Math.PI * r * r * h).toFixed(4);
}
console.log(volume(10, 3));

//Ans 6
var library = [{
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
}, {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
}, {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];
//title
//console.log(library.sort((a,b)=>b.title-a.title));
console.log(library.sort((a,b)=>b.libraryID-a.libraryID));