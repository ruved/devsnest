const box=document.querySelectorAll('.box');

for( let i=0;i<box.length;++i)
{

    box[i].addEventListener('click',()=>{
        // console.log(box[i].classList);
        if(box[i].classList.contains('boxclicked'))
        {
             box[i].classList.remove('boxclicked');
             box[i].classList.add('box');
             unclicked--;
        }
        else
        {
            box[i].classList.add('boxclicked');
            clicked++;
        }  
});
}