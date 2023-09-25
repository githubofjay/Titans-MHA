// let form;
// let res;
// let qno;
// let score;

const questions = [
    {
        title : 'How often do you feel fidgety and that you are unable to sit still?',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "A",
        questionNumber: 1
    },
    {
        title : 'Feel sad or unhappy?',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "I",
        questionNumber: 2
    },
    {
        title : 'Daydream too much',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "A",
        questionNumber: 3
    },
    {
        title : 'Do not like to share',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "E",
        questionNumber: 4
    },
    {
        title : 'Have trouble understanding other people’s feelings',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "E",
        questionNumber: 5
    },
    {
        title : 'Feel hopeless',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "I",
        questionNumber: 6
    },
    {
        title : 'Have trouble concentrating',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "A",
        questionNumber: 7
    },
    {
        title : 'Fight with others',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "E",
        questionNumber: 8
    },
    {
        title : 'Are down on yourself',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "I",
        questionNumber: 9
    },
    {
        title : 'Blames others for his or her troubles',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "E",
        questionNumber: 10
    },
    {
        title : 'Seem to be having less fun',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "I",
        questionNumber: 11
    },
    {
        title : 'Do not like to listen to rules',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "E",
        questionNumber: 12
    },
    {
        title : 'Act impulsively',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "A",
        questionNumber: 13
    },
    {
        title : 'Tease others',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "E",
        questionNumber: 14
    },
    {
        title : 'Worry a lot',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "I",
        questionNumber: 15
    },
    {
        title : 'Takes things that do not belong to him or her',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "E",
        questionNumber: 16
    },
    {
        title : 'Distracted easily',
        options : [
            'NEVER', 
            'SOMETIMES', 
            'OFTEN'
        ],
        answer : null,
        testType: "A",
        questionNumber: 17
    }
];


$(document).ready(function(){
    questions.forEach(function(question){
        let str = `
        <form class="form" id="form-${question.questionNumber}">
        <h2 id='question'>Question ${question.questionNumber}</h2>
        <p>${question.title}</p>
        <input type="radio" id="op1" name="op" value="0">
        <label for="op1">${question.options[0]}</label><br>
        <input type="radio" id="op2" name="op" value="1">
        <label for="op2">${question.options[1]}</label><br>
        <input type="radio" id="op3" name="op" value="2">
        <label for="op2">${question.options[2]}</label><br>
        <input type="submit" name="submit" id="submit" value = 'Submit' class = "submit"/>
    </form>`;

    document.querySelector(".question-card").innerHTML += str;

    })

    let str = `<form class="form" id="form-request">
        <p>Congratulations on Completion</p>
        <input type="submit" name="submit" value = 'Submit' class = "submit"/>
</form>`;
document.querySelector(".question-card").innerHTML += str;

    $("#form-1").submit(function(e){
        e.preventDefault();
        let selected = document.querySelector('#form-1 input[name="op"]:checked').value;
        questions[0].answer = selected;
        $(this).hide();
        $("#form-2").show();
        return false;
      });

      $("#form-2").submit(function(e){
        e.preventDefault();
        let selected = document.querySelector('#form-2 input[name="op"]:checked').value;
        questions[1].answer = selected;
        $(this).hide();
        $("#form-3").show();
        return false;
      });

      $("#form-3").submit(function(e){
        e.preventDefault();
        let selected = document.querySelector('#form-3 input[name="op"]:checked').value;
        questions[2].answer = selected;
        $(this).hide();
        $("#form-4").show();
        return false;
      });

      $("#form-4").submit(function(e){
        let selected = document.querySelector('#form-4 input[name="op"]:checked').value;
        questions[3].answer = selected;
        $(this).hide();
        $("#form-5").show();
        return false;
      });

      $("#form-5").submit(function(e){
        let selected = document.querySelector('#form-5 input[name="op"]:checked').value;
        questions[4].answer = selected;
        $(this).hide();
        $("#form-6").show();
        return false;
      });

      $("#form-6").submit(function(e){
        let selected = document.querySelector('#form-6 input[name="op"]:checked').value;
        questions[5].answer = selected;
        $(this).hide();
        $("#form-7").show();
        return false;
      });

      $("#form-7").submit(function(e){
        let selected = document.querySelector('#form-7 input[name="op"]:checked').value;
        questions[6].answer = selected;
        $(this).hide();
        $("#form-8").show();
        return false;
      });

      $("#form-8").submit(function(e){
        let selected = document.querySelector('#form-8 input[name="op"]:checked').value;
        questions[7].answer = selected;
        $(this).hide();
        $("#form-9").show();
        return false;
      });

      $("#form-9").submit(function(e){
        let selected = document.querySelector('#form-9 input[name="op"]:checked').value;
        questions[8].answer = selected;
        $(this).hide();
        $("#form-10").show();
        return false;
      });

      $("#form-10").submit(function(e){
        let selected = document.querySelector('#form-10 input[name="op"]:checked').value;
        questions[9].answer = selected;
        $(this).hide();
        $("#form-11").show();
        return false;
      });

      $("#form-11").submit(function(e){
        let selected = document.querySelector('#form-11 input[name="op"]:checked').value;
        questions[10].answer = selected;
        $(this).hide();
        $("#form-12").show();
        return false;
      });

      $("#form-12").submit(function(e){
        let selected = document.querySelector('#form-12 input[name="op"]:checked').value;
        questions[11].answer = selected;
        $(this).hide();
        $("#form-13").show();
        return false;
      });

      $("#form-13").submit(function(e){
        let selected = document.querySelector('#form-13 input[name="op"]:checked').value;
        questions[12].answer = selected;
        $(this).hide();
        $("#form-14").show();
        return false;
      });

      $("#form-14").submit(function(e){
        let selected = document.querySelector('#form-14 input[name="op"]:checked').value;
        questions[13].answer = selected;
        $(this).hide();
        $("#form-15").show();
        return false;
      });

      $("#form-15").submit(function(e){
        let selected = document.querySelector('#form-15 input[name="op"]:checked').value;
        questions[14].answer = selected;
        $(this).hide();
        $("#form-16").show();
        return false;
      });

      $("#form-16").submit(function(e){
        let selected = document.querySelector('#form-16 input[name="op"]:checked').value;
        questions[15].answer = selected;
        $(this).hide();
        $("#form-17").show();
        return false;
      });

      $("#form-17").submit(function(e){
        e.preventDefault();
        let selected = document.querySelector('#form-17 input[name="op"]:checked').value;
        questions[16].answer = selected;
        $(this).hide();
        $("#form-request").show();
        return false;
      });

      $("#form-request").submit(function(e){
        e.preventDefault();
        evaluation();
        return false;
      });
      

      init();
  });

function init(){
    document.getElementById('form-1').style.display = "unset";

}



let countI=0;
let countA=0;
let countE=0;
let total_count= countA+countI+countE;
 function evaluation(){
    questions.forEach(question => {
        console.log(question)
        if(question.testType == "I")
    {
        countI++;
    }
    else if(question.testType == "A")
    {
        countA++;
    }
    else  if(question.testType == "E")
    {
        countE++;
    }

    total_count = total_count + Number(question.answer);
    });

 

 console.log("value of countI",countI);
 console.log("value of countA",countA);
 console.log("value of countE",countE);
 console.log("total count is",total_count)

 if(countA>=5)
 {
    console.log("You might have an anxiety or mood Disorder. Anxiety disorder is characterized by excessive ongoing anxietry and worry that is difficult to control and interfere with day-to-day activities. Similarly, mood disorders can be characterized by experiencing mood swings or irritability very often. ");
 }
 if(countI>=7)
 {
    console.log("You might have ADHD(Attention deficit hyperactivity Disorder), or ADD(attention deficit disorder) in short. This chronic condition including attention difficulty, hyperactivity and impulsiveness. It can often begin in childhood and persist until adulthood. Treatments can include therapies and some medications");
 }
 if(countI>=7)
 {
    console.log("You might have Conduct disorder, Oppositional Defiant Disorder adjustment disorder with disturbed conduct or mixed disturbed mood and conduct. Conduct behavior is diagnosed when children show aggressiveness towards others many times and have a hard time following rules and behaving in a socially acceptable way.")
 }
 if(total_count>=15)
 {
    console.log("There is an increased likelihood of a behavioral health disorder being present. These disorders should be treated early so that you can live a happy and fulfilling life.")
 }
 
 }

