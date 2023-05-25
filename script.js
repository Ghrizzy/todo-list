const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    if(inputBox.value === ""){
        alert("you must write down something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "DELETE";
        li.appendChild(span);

    }
    inputBox.value = ""
}
)
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)
