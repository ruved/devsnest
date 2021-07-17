const cards=document.querySelectorAll('.flip-card-inner');
let scor=document.querySelector('.score');
let count=0;
let score=0;
for( let i=0;i<cards.length;++i)
{
    cards[i].addEventListener('click',()=>{
        if(count>=2)
        {
            for( let j=0;j<cards.length;++j)
             if(cards[j].classList.contains('flip-card-flip'))
                cards[j].classList.remove('flip-card-flip');
            count=0;
        }
        
        if(!cards[i].classList.contains('flip-card-flip'))
        {
            cards[i].classList.add('flip-card-flip');
            count++;
        }
        if(count==2)
        {
            let a=[];
            for( let j=0;j<cards.length;++j)
            {
            if(cards[j].classList.contains('flip-card-flip')&&!cards[j].classList.contains('hide'))
               a.push(cards[j]); 
            }
            if(a[0].querySelector('.flip-card-back').childNodes[1].src===a[1].querySelector('.flip-card-back').childNodes[1].src)
            {
                a[0].classList.add('hide');
                a[1].classList.add('hide');
                score++;
                scor.innerHTML="<h2>Score:&nbsp"+score+"</h2>"
                count=0;
            }
            
        }
        
    })
    console.log(cards[i]);
}