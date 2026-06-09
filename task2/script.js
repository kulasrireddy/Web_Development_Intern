// TO DO LIST

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    let task =
    taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">
            Delete
        </button>
    `;

    document
    .getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}


// CONTACT FORM VALIDATION

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let error =
    document.getElementById("error");

    error.innerHTML = "";

    if(name === ""){
        e.preventDefault();

        error.innerHTML =
        "Name is required";

        return;
    }

    let pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){

        e.preventDefault();

        error.innerHTML =
        "Please enter a valid email";

        return;
    }

    alert(
        "Form Submitted Successfully!"
    );
});