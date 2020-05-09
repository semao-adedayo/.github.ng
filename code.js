
const options=document.querySelector(".options").children;
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let score=0;


//QUESTIONS , OPTIONS AND ANSWER

const questions=[
    {
        q:'Meaning of CSS?',
        options:['Cascading Sheets Style','Cascading Style Sheets','Cascading Style Stript','Cascading Stript Style'],
        answer:1
    },
    {
        q:'Why Use CSS?',
        options:['It produces security','It helps reduce the code you are inputing','The main benefit of CSS is that it allows you to separate style from content','It reduces risk'],
        answer:2
    },
    {
        q:'Embedded/Internal CSS:',
        options:['Internal styles are defined within the style element, inside the head section of an HTML page','Internal styles are defined within the script element, inside the body section of an HTML page','Internal styles are defined within the paragraph element, inside the body section of an HTML page','Internal styles are defined within the title element, inside the head section of an HTML page'],
        answer:0
    },
    {
        q:'In the rule, the "selector":',
        options:['Selects which element to style','Serves as a property','Allows to substitute the selected attribute option','Serves as a link'],
        answer:0
    },
    {
        q:'Where should the style tag be declared to organize an internal CSS?',
        options:['Body','Title','Head','Html'],
        answer:2
    },
]

//QUESTIONS , OPTIONS AND QUESTIONS NUMBERS
totalQuestionSpan.innerHTML=questions.length;
function load(){
        questionNumberSpan.innerHTML=index+1;
        question.innerHTML=questions[questionIndex].q;
        op1.innerHTML=questions[questionIndex].options[0];
        op2.innerHTML=questions[questionIndex].options[1];
        op3.innerHTML=questions[questionIndex].options[2];
        op4.innerHTML=questions[questionIndex].options[3];
        index++;
}

//selects correct and wrong option
function check(element){
    if(element.id==questions[questionIndex].answer){
        element.classList.add("correct");
        score++;
        console.log("score:"+score)
    }
    else{
        element.classList.add("wrong"); 
    }
    // selecting only one option
    disabledOptions()
}
function disabledOptions(){
    for( i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
    }
}

function enableOptions(){
    for( i=0; i<options.length; i++) {
        options[i].classList.remove("disabled","correct","wrong");
    }
}

function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select an option")
    }
    else {
        enableOptions();
        randomQuestion();
    }
}

function next(){
    validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
        if(index==questions.length){
            gameOver();
        }
        else{
            if(myArray.length>0){
                for(let i=0; i<myArray.length; i++){
                    if(myArray[i]==randomNumber){
                        hitDuplicate=1;
                        break;
                    }
                }
                if(hitDuplicate==1){
                    randomQuestion();
                }
                else{
                    questionIndex=randomNumber;
                    load();
                }
            }
            if(myArray.length==0){
                questionIndex=randomNumber;
                load();
            }
        myArray.push(randomNumber);
        }
}

function gameOver(){
    document.querySelector(".game-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";
}

function tryAgain(){
    window.location.reload();
}

window.onload=function(){
    randomQuestion()
}