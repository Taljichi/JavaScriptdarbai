const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    const task = inputBox.value;

    if(task) {
        const li = document.createElement("li")
        li.innerText = task;
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerText = '\u00d7';
        li.appendChild(span);
    }
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
});