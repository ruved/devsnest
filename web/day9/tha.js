const box=document.querySelectorAll('.box');
let clickcount=document.querySelector('.clicked');
let count=0;

for( let i=0;i<box.length;++i)
{

    box[i].addEventListener('click',()=>{
        // console.log(box[i].classList);
        if(box[i].classList.contains('boxclicked'))
        {
             box[i].classList.remove('boxclicked');
             box[i].classList.add('box');
             count--;
             clickcount.innerHTML="<h3>Clicked box="+count+" &nbsp&nbsp&nbsp Unclicked Box="+ (box.length-count)+"</h3>";
        }
        else
        {
            box[i].classList.add('boxclicked');
            count++;
            clickcount.innerHTML="<h3>Clicked box="+count+" &nbsp Unclicked Box="+ (box.length-count)+"</h3>";
        }  
});
}