
//alert();
var selectedRow = null;

//show alerts
function showAlert(message,className){
    const div = document.createElement("div");
    div.className= `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container =document.querySelector(".container");
    const main =document.querySelector(".main");
    container.insertBefore(div,main);
    setTimeout(() => document.querySelector(".alert").remove(),3000);
}


//clear all fields
function clearField(){
    document.querySelector("#name").value="";
    document.querySelector("#mailId").value="";
    document.querySelector("#phoneNo").value="";
}

// add data
document.querySelector("#student-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    //get values
    const name=document.querySelector("#name").value;
    const mailId=document.querySelector("#mailId").value;
    const phoneNo=document.querySelector("#phoneNo").value;

    //validate
    if(name== "" || mailId=="" || phoneNo==""){
        showAlert("Please fill in all the fields","danger")
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#dataList");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${name}</td>
            <td>${mailId}</td>
            <td>${phoneNo}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("Data Added","success")

        }
        else{
            selectedRow.children[0].textContent = name;
            selectedRow.children[1].textContent = mailId;
            selectedRow.children[2].textContent = phoneNo;
            selectedRow=null;
            showAlert("Data edited","info")      
        }
        clearField();
    }
})


//Edit data
document.querySelector("#dataList").addEventListener("click",(e)=>{
    target=e.target;
    console.log(target)
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        console.log(selectedRow);
        document.querySelector("#name").value = selectedRow.children[0].textContent;
        document.querySelector("#mailId").value = selectedRow.children[1].textContent;
        document.querySelector("#phoneNo").value = selectedRow.children[2].textContent;
    }
})


//Deletes DATA
document.querySelector("#dataList").addEventListener("click",(e)=>{
    let target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data Deleted","danger");

    }
});
