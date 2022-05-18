// var button = document.getElementById("action-btn")

// button.addEventListener("click", function () {
//     var container = document.getElementById("form")
//     if (container.style.display === "none") {
//         container.style.display = "block"
//     } else {
//         container.style.display = "none"
//     }
// })
// document.querySelector("#action-btn").addEventListener("click", function () {
//     document.querySelector("#form").classList.add("active")
// })


//SLIDE FORM
// var counterVal = 1;
// var x = document.querySelector(`.input-1`)
// function next() {
//     if (counterVal >= 5) {
//         counterVal = 5
//     } else {
//         ++counterVal
//     }
//     x = document.querySelector(`.input-${counterVal}`)

// }
// function prev() {
//     if (counterVal <= 1) {
//         counterVal = 1
//     } else {
//         --counterVal
//     }
//     x = document.querySelector(`.input-${counterVal}`)
//     console.log(x)
// }






//BUTTON FORM
function startshow(modalID) {

    const modal = document.getElementById(modalID)



    modal.classList.add('active');

    modal.addEventListener('click', (e) => {
        if (e.target.id == "form" || e.target.id == "submit7") {
            modal.classList.remove('active')

        }
    })
}

const button = document.querySelector("#action-btn ")
const button2 = document.querySelector("#action-btn2 ")

button.addEventListener('click', () => { startshow("form") })
button2.addEventListener('click', () => { startshow("form") })
//////FUNCTIOM BELOW

var form_answer = {}

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById("question-6");
var question_seven = document.getElementById("question-7");

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');

var answer_one = document.getElementById("question-1-answer-a")
var answer_two = document.getElementById("question-2-answer-a")
var answer_three = document.getElementById("question-3-answer-a")
var answer_four = document.getElementById("question-4-answer-a")
var answer_five = document.getElementById("question-5-answer-a")
var answer_six = document.getElementById("question-6-answer-a")


function answersave1() {
    form_answer['Nome'] = answer_one.value
}

function answersave2() {
    form_answer["Email"] = answer_two.value
}

function answersave3() {
    form_answer["Número"] = answer_three.value
}

function answersave4(question_number, event) {
    form_answer["Nome da Empresa"] = answer_four.value
}

function answersave5(event) {
    if (event.target.type === 'radio') {

        form_answer['Renda Mensal'] = (event.target.value);

    }
}


question_five.addEventListener('click', function (event) {
    answersave5(event)
})


function answersave6() {
    form_answer["Número de empregados"] = answer_six.value
}



function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "flex";
    el2.style.display = "none";
}

submit1.addEventListener('click', function () {
    answersave1()
    nextQuestion(2);
    growProgressBar('17%');
})
submit2.addEventListener('click', function () {
    answersave2()
    nextQuestion(3);
    growProgressBar('34%');
})
submit3.addEventListener('click', function () {
    answersave3()
    nextQuestion(4);
    growProgressBar('51%');
})
submit4.addEventListener('click', function () {
    answersave4()
    nextQuestion(5);
    growProgressBar('68%');
})
submit5.addEventListener('click', function () {
    growProgressBar('85%')
    nextQuestion(6);
})


submit6.addEventListener('click', function () {
    growProgressBar('100%')
    answersave6()
    nextQuestion(7)
    console.log(form_answer)
})

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}