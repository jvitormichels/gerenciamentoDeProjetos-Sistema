function Redirect (adress) {
    location.href = adress;
}

function OpenForm(formID) {
    document.getElementById(formID).style.display = "block";
}

function CloseForm(formID) {
    document.getElementById(formID).style.display = "none";
}