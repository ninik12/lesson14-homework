// 1
for (let n = 5; n <= 100; n++) {
    console.log(n);
}

// 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
        console.log(array1[i]);
    }
}
for (let n of array1) {
    if (n > 0 && n < 10) {
        console.log(n);
    }
}

//3
let array2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of array2) {
    sum += num;
}
console.log(sum);


//4
let array3 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let num of array3) {
    sum1 += num / array3.length
}
console.log(sum1);



//5
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};


console.log(user.studentstatus);
console.log(user['studentstatus']);



//6
let user2 = {
    name: 'anna',
    age: 20,
    studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus === 'active') {
    console.log('hello user');
} else if (user2.name === 'levan') {
    console.log('hello Levani');
} else if (user2.studentstatus === 'active' || user2.age < 25) {
    console.log('is active');
} else {
    console.log('error');
}

let conditionResult = user2.age < 18 && user2.studentstatus === 'active' ? 'hello user' : user2.name === 'levan' ? 'hello Levani' : user2.studentstatus === 'active' || user2.age < 25 ? 'is active' : 'error'
console.log(conditionResult);


//7
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i of array6) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//8
let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
]

for (let item of users) {
    // console.log(item);
    if (item.status === true) {
        console.log(item);
    }
}


//9
let array7 = [32, 14, null, '40', 50];

for ( let item of array7){
    if (item % 5 === 0){
        console.log(item);
    }
}



//10
let array8 = [ [2, 3, 5, 11], [1, 35, 11], [12, 36, 24] ];

for (let el of array8){
    for (let num of el){
        if (num > 30){
            console.log(num);  
        }
    }
}