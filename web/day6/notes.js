//https://www.youtube.com/watch?v=Yxj54m8dGNg&t=1058s&ab_channel=Devsnest


a1=[10,1,2,3,4]
b1=[6,7,8,9]
c1=[1,1,1,1]

// accessing the array elements
// 1. concat
// 2. join
// 3. indexOf
// 4. lastIndexOf
// 5. slice
console.log(a1[4])//access the element at index 4 start from 0
console.log(a1.concat(b1));//return new array
console.log(a1.join(b1));//return a string
console.log(a1.indexOf(10));//return the element
console.log(a1.slice(1,4));//slice array index 1 to index 3


// iteration method
a1.forEach((item,index) => { console.log(item,index);});

for(let item of a1)
{console.log(item);}

for(let index in a1)  // for in //object
{ console.log(index,a1[index]);}

for(let index=0;index<a1.length;++index)
{ console.log(index,a1[index]);}

 
console.log(a1.some(item=>item==10));//check the any element  in the array  are equal to 10 return true
console.log(a1.every(item=>item==10));//check the every  element  in the array are equal to 10 return true
console.log(a1.filter(item=>item==10));//check the every  element  in the array are equal return element, does not change original array, return new array
console.log(a1.map(item=>item=20));//all value assign 20 value and return new array, doesnnot change original array

const reducefn=b1.reduce((acc,item)=>{//to sum of all elements
    acc=acc+item;
    return acc;
},0);

console.log(reducefn);

// Mutating List or changing array
// pop= it pops out the last element in the list, return last element
//push =it append the new element in the end(last index) of the arary
//reverse= it reverse the array elements
//clone const d1=b1.slice(0);//copy all element
//sort = for string

console.log(a1.sort());

console.log(a1.sort((a,b)=>a-b));//sort the numerical array 

//splice
console.log(a1.splice(1,0,12))//start-deletecount-items
console.log(a1.unshift());//pop first element,return length od the list

//general
// toString()
// toLocalString()
// isArray  //console.log(Array.isArray(a1));//return true
// sort
// splice
// length
