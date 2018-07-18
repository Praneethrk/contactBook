if(localStorage.getItem("contacts") == null)
    localStorage.setItem("contacts",JSON.stringify([]));

viewData();
var tempindex = -1;

function addContact(){
    var contacts = getContact(); 
    var contact = getDataFromLocalStorage();
    contact.push(contacts);
    updateDataToLocalStorage(contact);
    clearDataForm();
    viewData();
}




function viewData(){
    var contact = getDataFromLocalStorage();
    var data =  "";
    if(contact.length == 0){
        data = "Contact not yet added"
    }else{
    data +=  "<table><tr><th>Name</th><th>Email</th><th>Mobile no.</th><th>Edit</th><th>Delete</th></tr>";
    for(var i = 0; i < contact.length ; i++){
        data += "<tr>";
        data += "<td>" + contact[i].name + "</td>";
        data += "<td>" + contact[i].email + "</td>";
        data += "<td>" + contact[i].mobile + "</td>";
        data += "<td><button onclick=editContact("+i+") id=bttn><img src=images/edit1.png  />  </button></td>";
        data += "<td><button onclick=deleteContact("+i+") id=bttn><img src=images/delete.png /></button></td>";
        data += "</tr>";
    }
    data += "</table>";
    }
    document.getElementById("content").innerHTML = data;
}
function editContact(index){
    var contact = getDataFromLocalStorage();
    var contacts=contact[index];
    tempindex = index;
    document.getElementById("cname").value= contacts.name;
    document.getElementById("email").value= contacts.email;
    document.getElementById("mobile").value= contacts.mobile;
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="block";
}
function deleteContact(index)
{
    var contacts = getDataFromLocalStorage();
    contact.splice(index,1);
    updateDataToLocalStorage(contacts);
    viewData();
}
function updateContact(){
    var contact = getDataFromLocalStorage();
    contacts = getContact();
    contact.splice(tempindex,1,contacts);
    updateDataToLocalStorage(contact);
    clearDataForm();
    document.getElementById("add").style.display="block";
    document.getElementById("update").style.display="none";
    viewData();
}

function clearDataForm(){
    document.getElementById("cname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";

}
function getContact(){
    name=document.getElementById("cname").value;
    email=document.getElementById("email").value;
    mobile=document.getElementById("mobile").value;
    return contacts={"name":name,"email":email,"mobile":mobile}
}

function getDataFromLocalStorage(){
    contact = JSON.parse(localStorage.getItem("contacts"));
    return contact;
}
function updateDataToLocalStorage(updateedData){
    localStorage.setItem("contacts",JSON.stringify(updateedData));
}