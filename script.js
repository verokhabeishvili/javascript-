//1 


 
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  
console.log(user.studentstatus);

//2 

let months = [ 'January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for(let i=0; i<months.length; i++){
    console.log(months[i]);
}; 


//3 
 
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>5) {
        console.log(numbers[i]);
    }
}; 

//4

let user1= {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (user1.age < 18 && user1.studentstatus === 'active') {
    console.log("hello");
}
else if (user1.name === 'Levan') {
    console.log("hello Levan");
}
else if (user1.studentstatus === 'active' || user1.age< 25) {
    console.log("hello world");
}
else  {
    console.log("error");
}


//5

let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]


for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
        if (array[i][x] > 0) {
            console.log(array[i][x]);
        }
    }
};
    
//6 

let array1 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]

//ლუწი
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        console.log(array1[i]);
    }
};

//კენტი 

for ( let i = 0;  i < array1.length; i++){
    if (array1[i] % 2 === 1) {
    console.log(array1[i]);
}
};
 
//7 ფუნქციები გამიჭირდა 

//8

//9

//10 
let array3 = [1,2,4,10,34,5,7,87]

for (let i = 0; i < array3.length; i++) {
    if (array3[i] > 0 && array3[i] < 10) {
        console.log(array3[i]);
    }
};


//11

let numbers1 =[1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] === 5) {
        break;
    }
   else {
    console.log(numbers1[i]);
    };
}


