function FormValidation() {
    //First Name Validation 
    var fn = document.getElementById('firstname').value;

    if (/^[a-z]+$/.test(document.getElementById("firstname").value)) {
        document.getElementById('firstname').style.borderColor = "green";
    } else {
        alert("First Name Contains Numbers!");
        document.getElementById('firstname').style.borderColor = "red";
        return false;
    }
}

