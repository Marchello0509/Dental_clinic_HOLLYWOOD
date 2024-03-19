const btnReg = document.querySelector("#btnReg")
const btnCancel = document.querySelector("#btnCancel")
const modal = document.querySelector("#modal")

btnReg.addEventListener("click", () => {
    modal.style.display = "flex"
    modal.classList.add("animateModalIn")
})

btnCancel.addEventListener("click", () => {
    modal.classList.remove("animateModalIn")
    modal.classList.add("animateModalOut")
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("animateModalOut")
    }, 500)
})
