const correctAnswer=['A','C','A','B',];
const form=document.querySelector(".quize-form");
//results
const result=document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score=0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
     

    //check answers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswer[index]){
            score += 25;

        } 
    });

//intuusan marks ka soo sarin scroll ku samee oo kor gee 
    // using scroll to method
         scrollTo(0,0);
// show result on page
result.classList.remove('d-none');

// setinterval oo socodsiinaysa marks ka ilaa intan keenay ka gaato
let output=0;
const timer=setInterval(()=>{
    result.querySelector('span').textContent = `${score}%`;
    if(output === score){
        clearInterval(timer);
    }else{
        output++;
    }
},10);


}); 



//WINDOW OBJECT (global object)   == its the global object in front end  java script its the mother of all objects
// and pretty much every thing we do ,front end and java script is ultimately stored on this window object

//SetTimeOut  == it takes callback function which will be in our function and it 
     //   fires this function after certain amount of time 





