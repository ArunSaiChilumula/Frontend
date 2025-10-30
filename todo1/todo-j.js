
let input = document.getElementById("in1");
let button1 = document.getElementById("btn1");
let task = document.getElementById("takslist");


button1.addEventListener("click", function () {
    const taskvalue = input.value;
    li = document.createElement("li");
    li.innerText = taskvalue;




    //remove button creation
    const button = document.createElement("button");
    button.innerText = "❌";


    //edit button creation
    const edit = document.createElement("button");
    edit.innerText = "🛠";
    edit.style.marginLeft = "5px";
    edit.style.marginRight = "5px";




    //remove operations
    button.addEventListener("click", function () {
        button.closest("li").remove();
    })

    //edit operations
    edit.addEventListener("click", function () {

        let changedvalue = prompt("modify");
        lix = edit.closest("li");
        edit.closest("li").innerText = changedvalue;
        lix.appendChild(edit);
        lix.appendChild(button);
    })

    li.appendChild(edit);
    li.appendChild(button);

    task.prepend(li);
    input.value = "";
});



