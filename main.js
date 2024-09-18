const todo__list = document.querySelector(".todo__list>ul")
todo__list.addEventListener("click", (ev) => {
    ev.target.classList.toggle("completed")
})