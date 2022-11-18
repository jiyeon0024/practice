

//Select DOM
const Name = document.querySelector(".title");
const addList = document.querySelector(".addList");
const AddBtn = document.querySelector(".submitBtn");
const todoFilter = document.querySelector(".todo-filter");


//Event Listeners
Name.addEventListener("load",getName);
AddBtn.addEventListener("click",addTodo);
// addList.addEventListener("click",Deltodo);
// todoFilter.addEventListener("click",filter);


//Functions
    function getName(){
    

    let n = prompt("Enter your name");
        Name.innerHTML=`${n}'s Todo List`;
    
    console.log(`user_name=${n}`);
}
getName(); 


function addTodo(e){
    
    
    e.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todo_List = document.createElement("li");
    todo_List.classList.add("li");

    todoDiv.appendChild(todo_List);

}
