// Ans1 
function is_array(item){
  return Array.isArray(item);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Ans2
function array_Clone(item)
{
    return item.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Ans3
let first=(item,n)=>{
    if(item==null) return void 0;
    else if(n==null) return item[0];
    else
    return item.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Ans 4
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
console.log(myColor.join(','));
console.log(myColor.join('+'));

//Ans 5
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var m=0,ele;
for(let i=0;i<arr1.length;++i)
{
    var newarr=arr1.filter(item=>item==arr1[i]);
    if(m<newarr.length)
    {
        m=newarr.length;
        ele=newarr[0];
    }
}
console.log(ele,'(',m,')');
