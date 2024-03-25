var startnow = document.getElementById('start')
var question = document.getElementsByClassName('question')
var next=document.getElementById('next')
var clear=document.getElementById('clear')
var submit=document.getElementById('submit')


i=0;
add=question[i];

console.log(question.length);

startnow.onclick=function(){
   add.style.display='block'
   startnow.style.display='none'
   next.style.display='block'
   clear.style.display='block'
}
score=0;
len=question.length;
next.addEventListener('click',clickonn)
submit.addEventListener('click',finalscore)
clear.addEventListener('click',clearr)




function clickonn(){
    
    
    var checkRadio = document.querySelector('input[name="quiz"]:checked');

    console.log(checkRadio);
    var arr=new Array(4);
    if(checkRadio!=null){
        if(checkRadio.value=='true'){
            score+=1;
            arr[i]="true";
        }else{
            arr[i]="false";
        }
    
    if(len>=2){

        add=question[i];
        add.style.display='none'
        i+=1
        pluss =question[i]
        pluss.style.display='block'
    }else if(len==1){
  
        alert('no more questions')

        add=question[i];
      
        add.style.display='none'
         next.style.display='none'
         clear.style.display='none'
        submit.style.display='block'
    }
    else{
        alert('check')
    }

    checkRadio.value=''
        len-=1
}
else{
    
    if(len>=2){

        add=question[i];

        add.style.display='none'
        i+=1
        pluss =question[i]
      
        pluss.style.display='block'
       
    }else if(len==1){
  
        alert('no more questions')

        add=question[i];
        
        add.style.display='none'
         next.style.display='none'
         clear.style.display='none'
        submit.style.display='block'
    }
    else{

        alert('check')
    }
    len-=1
}
}
function finalscore(){
    submit.style.display='none'
    add.style.display='none'


document.getElementById('total').innerText="score :"+score
}

function clearr(){
    var checkRadio = document.querySelector('input[name="quiz"]:checked');
    checkRadio.checked=false;
}

