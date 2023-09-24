// let form;
// let res;
// let qno;
// let score;

const questions = [
    {
        title : 'Fidgety, unable to sit still',
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
        title : 'Feels sad, unhappy',
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
        title : 'Daydreams too much',
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
        title : 'Refuses to share',
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
        title : 'Does not understand other people’s feelings',
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
        title : 'Feels hopeless',
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
        title : 'Has trouble concentrating',
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
        title : 'Fights with other children',
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
        title : 'Is down on him or herself',
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
        title : 'Seems to be having less fun',
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
        title : 'Does not listen to rules',
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
        title : 'Acts as if driven by a motor',
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
        title : 'Teases others',
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
        title : 'Worries a lot',
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
    $("#form-1").submit(function(e){
        let selected = document.querySelector('#form-1 input[name="op"]:checked').value;
        questions[0].answer = selected;
        alert(questions[0].answer)
        $(this).hide();
        $("#form-2").show();
        return false;
      });

      $("#form-2").submit(function(e){
        let selected = document.querySelector('#form-2 input[name="op"]:checked').value;
        questions[1].answer = selected;
        alert(questions[1].answer)
        $(this).hide();
        $("#form-3").show();
        return false;
      });

      $("#form-3").submit(function(e){
        let selected = document.querySelector('#form-3 input[name="op"]:checked').value;
        questions[2].answer = selected;
        alert(questions[2].answer)
        $(this).hide();
        $("#form-4").show();
        return false;
      });

      $("#form-4").submit(function(e){
        let selected = document.querySelector('#form-4 input[name="op"]:checked').value;
        questions[3].answer = selected;
        alert(questions[3].answer)
        $(this).hide();
        $("#form-5").show();
        return false;
      });

      $("#form-5").submit(function(e){
        let selected = document.querySelector('#form-5 input[name="op"]:checked').value;
        questions[4].answer = selected;
        alert(questions[4].answer)
        $(this).hide();
        $("#form-6").show();
        return false;
      });

      $("#form-6").submit(function(e){
        let selected = document.querySelector('#form-6 input[name="op"]:checked').value;
        questions[5].answer = selected;
        alert(questions[5].answer)
        $(this).hide();
        $("#form-7").show();
        return false;
      });

      $("#form-7").submit(function(e){
        let selected = document.querySelector('#form-7 input[name="op"]:checked').value;
        questions[6].answer = selected;
        alert(questions[6].answer)
        $(this).hide();
        $("#form-8").show();
        return false;
      });

      $("#form-8").submit(function(e){
        let selected = document.querySelector('#form-8 input[name="op"]:checked').value;
        questions[7].answer = selected;
        alert(questions[7].answer)
        $(this).hide();
        $("#form-9").show();
        return false;
      });

      $("#form-9").submit(function(e){
        let selected = document.querySelector('#form-9 input[name="op"]:checked').value;
        questions[8].answer = selected;
        alert(questions[8].answer)
        $(this).hide();
        $("#form-10").show();
        return false;
      });

      $("#form-10").submit(function(e){
        let selected = document.querySelector('#form-10 input[name="op"]:checked').value;
        questions[9].answer = selected;
        alert(questions[9].answer)
        $(this).hide();
        $("#form-11").show();
        return false;
      });

      $("#form-11").submit(function(e){
        let selected = document.querySelector('#form-11 input[name="op"]:checked').value;
        questions[10].answer = selected;
        alert(questions[10].answer)
        $(this).hide();
        $("#form-12").show();
        return false;
      });

      $("#form-12").submit(function(e){
        let selected = document.querySelector('#form-12 input[name="op"]:checked').value;
        questions[11].answer = selected;
        alert(questions[11].answer)
        $(this).hide();
        $("#form-13").show();
        return false;
      });

      $("#form-13").submit(function(e){
        let selected = document.querySelector('#form-13 input[name="op"]:checked').value;
        questions[12].answer = selected;
        alert(questions[12].answer)
        $(this).hide();
        $("#form-14").show();
        return false;
      });

      $("#form-14").submit(function(e){
        let selected = document.querySelector('#form-14 input[name="op"]:checked').value;
        questions[13].answer = selected;
        alert(questions[13].answer)
        $(this).hide();
        $("#form-15").show();
        return false;
      });

      $("#form-15").submit(function(e){
        let selected = document.querySelector('#form-15 input[name="op"]:checked').value;
        questions[14].answer = selected;
        alert(questions[14].answer)
        $(this).hide();
        $("#form-16").show();
        return false;
      });

      $("#form-16").submit(function(e){
        let selected = document.querySelector('#form-16 input[name="op"]:checked').value;
        questions[15].answer = selected;
        alert(questions[15].answer)
        $(this).hide();
        $("#form-17").show();
        return false;
      });

      $("#form-17").submit(function(e){
        e.preventDefault();
        let selected = document.querySelector('#form-17 input[name="op"]:checked').value;
        questions[16].answer = selected;
        alert(questions[16].answer);
        evaluation();
        return false;
      });
  });

function init(){
    document.getElementById('form-1').style.display = "unset";
}
init();


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
    console.log("child have Enxiety and mood Disorder");
 }
 if(countI>=7)
 {
    console.log("ADHD,ADD");
 }
 if(countI>=7)
 {
    console.log("Conduct disorder, Oppositional Defiant Disorder adjustment disorder with disturbed conduct or mixed disturbed mood and conduct")
 }
 if(total_count>=15)
 {
    console.log("increased likelihood of a behavioral health disorder being present")
 }
 }

