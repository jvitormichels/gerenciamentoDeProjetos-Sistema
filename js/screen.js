function Redirect (adress) {
    location.href = adress;
}

function OpenForm(formID) {
    document.getElementById(formID).style.display = "block";
}

function CloseForm(formID) {
    document.getElementById(formID).style.display = "none";
}

function CreateProjectModal(projectID) {
    console.log("testemodas2");
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "modal";

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";

    var p = document.createElement("P");
    p.innerHTML = projectID;

    var closeButton = document.createElement("INPUT");
    closeButton.value = "Fechar";
    closeButton.type = "button";
    closeButton.addEventListener('click', RemoveModal);

    modal.appendChild(modalContent);
    modalContent.appendChild(closeSpan);
    modalContent.appendChild(p);
    modalContent.appendChild(closeButton);

    document.body.appendChild(modal);
}

function RemoveModal() {
    console.log("kfjhdskjfghs");
    document.body.removeChild(document.getElementById("modal"));
}