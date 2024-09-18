const todo__list = document.querySelector(".todo__list")
const btn = document.querySelector(".todo__input button")

let myStore = window.localStorage;
if (myStore.length===0) {
    myStore.setItem(0,"[]");
}
let arr = JSON.parse(myStore.getItem(0));

let tempArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null)
        tempArr.push(arr[i]);
}
arr = tempArr;
myStore.setItem(0,JSON.stringify(arr));

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
        let todo__item = document.createElement("li");
        let todo__li = document.createElement("span");
        let todo__delete = document.createElement("div");
        todo__li.textContent = arr[i];
        todo__delete.textContent = "X";
        todo__item.className = "todo__item";
        todo__li.className = "todo__li";
        todo__delete.className = "todo__delete";
        todo__list.appendChild(todo__item);
        todo__item.appendChild(todo__li);
        todo__item.appendChild(todo__delete);

        todo__delete.onclick = () => {
            let textToDel = todo__li.textContent;
            let index = arr.indexOf(textToDel);
            delete arr[index];
            myStore.setItem(0,JSON.stringify(arr));

            todo__delete.parentElement.style.display = "none"
        }
    }
}
todo__list.addEventListener("click", (ev) => {
    ev.target.classList.toggle("completed")
})


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

        arr.push(todo__li.textContent);
        myStore.setItem(0,JSON.stringify(arr));

        todo__delete.onclick = () => {
            let textToDel = todo__li.textContent;
            let index = arr.indexOf(textToDel);
            delete arr[index];
            myStore.setItem(0,JSON.stringify(arr));

            todo__delete.parentElement.style.display = "none"
        }
    } else {
        alert("Введите какую-либо задачу!");
    }
}