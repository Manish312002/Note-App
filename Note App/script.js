const noteContainer = document.querySelector(".para-container");
const newBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".newPara")

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage () {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

newBtn.addEventListener("click",() =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "newPara";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener("click", function (e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();

    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".newPara")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            } 
        })
    }
})

