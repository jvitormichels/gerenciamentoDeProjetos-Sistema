function Redirect (adress) {
    location.href = adress;
}

function OpenForm(formID) {
    document.getElementById(formID).style.display = "block";
}

function CloseForm(formID) {
    document.getElementById(formID).style.display = "none";
}

function CreateModal(projectID) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "modal";
    modal.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";

    var p = document.createElement("P");
    p.innerHTML = projectID;

    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn btn-primary";
    closeButton.value = "Fechar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);

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
        CreateConfirmModal(projectID);
    }, false);

    modal.appendChild(modalContent);
    modalContent.appendChild(closeSpan);
    modalContent.appendChild(p);
    modalContent.appendChild(closeButton);
    modalContent.appendChild(seeProject);
    modalContent.appendChild(deleteProject);

    document.body.appendChild(modal);
}

function CreateConfirmModal(projectID) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "confirmModal";
    modal.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);

    var modalContent = document.createElement("DIV");
    modalContent.className = "confirmModalContent";

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";

    var p = document.createElement("P");
    p.innerHTML = "Tem certeza que deseja deletar o projeto?";

    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn btn-primary";
    closeButton.value = "Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);

    var deleteProject = document.createElement("INPUT");
    deleteProject.className = "btn btn-danger";
    deleteProject.value = "Deletar";
    deleteProject.type = "button";
    deleteProject.addEventListener('click', function() {
        Redirect("phpFunctions/Project_Delete.php?id=" + projectID);
    }, false);

    modal.appendChild(modalContent);
    modalContent.appendChild(closeSpan);
    modalContent.appendChild(p);
    modalContent.appendChild(deleteProject);
    modalContent.appendChild(closeButton);

    document.body.appendChild(modal);
}

function RemoveModal(modalId) {
    document.body.removeChild(document.getElementById(modalId));
}