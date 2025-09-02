let task= document.querySelector("input");
let list= document.querySelector("ul");
let btn= document.querySelector("button");
 btn.addEventListener("click",function () {
    let item= document.createElement("li");
    item.innerText= task.value;
    list.appendChild(item);
    console.log("Task added successfully\n");
    task.value=""; 
 });

// for (let items of list) {


//     console.log (task.value);

//  }