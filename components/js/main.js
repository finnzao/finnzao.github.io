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


function startshow(modalID) {
    const modal = document.getElementById(modalID)

    modal.classList.add('active');

    modal.addEventListener('click', (e) => {
        if (e.target.id == "form") {
            modal.classList.remove('active')

        }
    })
}

const button = document.querySelector("#action-btn ")
const button2 = document.querySelector("#action-btn2 ")
button.addEventListener('click', () => { startshow("form") })
button2.addEventListener('click', () => { startshow("form") })


