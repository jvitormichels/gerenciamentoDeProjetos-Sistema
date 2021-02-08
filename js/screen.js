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
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "modal";
    modal.addEventListener('click', RemoveModal);

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";

    var p = document.createElement("P");
    p.innerHTML = projectID;

    var closeButton = document.createElement("INPUT");
    closeButton,className = "btn btn-primary";
    closeButton.value = "Fechar";
    closeButton.type = "button";
    closeButton.addEventListener('click', RemoveModal);

    var seeProject = document.createElement("INPUT");
    seeProject.className = "btn btn-success";
    seeProject.value = "Ver projeto";
    seeProject.type = "button";
    seeProject.addEventListener('click', function() {
        Redirect("activities.php?id=" + projectID);
    }, false);

    var deleteProject = document.createElement("INPUT");
    deleteProject.className = "btn btn-danger";
    deleteProject.value = "Deletar projeto";
    deleteProject.type = "button";
    deleteProject.addEventListener('click', function() {
        Redirect("phpFunctions/Project_Delete.php?id=" + projectID);
    }, false);

    modal.appendChild(modalContent);
    modalContent.appendChild(closeSpan);
    modalContent.appendChild(p);
    modalContent.appendChild(closeButton);
    modalContent.appendChild(seeProject);
    modalContent.appendChild(deleteProject);

    document.body.appendChild(modal);
}

function RemoveModal() {
    document.body.removeChild(document.getElementById("modal"));
}