let task= document.querySelector("input");//taken input as task
let list= document.querySelector("ul");//variable to access ul
let btn= document.querySelector("button");//variable to access button(add task)

 btn.addEventListener("click",function () { // as we click on add Task, creats a list element,stores input task.
    let item= document.createElement("li");
    item.innerText= task.value;

    let delbtn= document.createElement("button");//creating delete button to delete task if we won't need.
    delbtn.innerText= "delete";
    delbtn.classList.add("delete");//creates a class delete in HTML.

    item.appendChild(delbtn); //adds delete button for each task .(item)
    list.appendChild(item); //list will updated with every new input .
    task.value=""; //it will make empty the input box after add task.
 });

let ul = document.querySelector("ul");
 ul.addEventListener("click", function(event){
   if  (event.target.nodeName =="BUTTON"){
   let listItem = event.target.parentElement;
   listItem.remove();
   console.log("deleted");
} });

// let delbtns=document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//    delbtn.addEventListener("click",function() {
//       let par=this.parentElement
//    })
//}

