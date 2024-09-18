const todo__list = document.querySelector(".todo__list")
todo__list.addEventListener("click", (ev) => {
    ev.target.classList.toggle("completed")
})

const btn = document.querySelector(".todo__input button")
btn.onclick = () => {
    if (document.querySelector(".todo__input input").value !== "") {
        let todo__item = document.createElement("li");
        let todo__li = document.createElement("span");
        let todo__delete = document.createElement("div");
        todo__li.textContent = document.querySelector(".todo__input input").value;
        document.querySelector(".todo__input input").value = "";
        todo__delete.textContent = "X";
        todo__item.className = "todo__item";
        todo__li.className = "todo__li";
        todo__delete.className = "todo__delete";
        todo__list.appendChild(todo__item);
        todo__item.appendChild(todo__li);
        todo__item.appendChild(todo__delete);
    } else {
        alert("Введите какую-либо задачу!");
    }
}