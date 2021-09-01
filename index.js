// Your code here
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"
//dodger.style.left ="0px"

//Left Move
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","")
    const left = parseInt(leftNumbers,10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener("keydown",function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})



// Right Move
function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px","")
    const left = parseInt(rightNumbers,10)

    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }

}

document.addEventListener("keydown",function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})







