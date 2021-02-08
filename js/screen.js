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

    var editProject = document.createElement("INPUT");
    editProject.className = "btn btn-secondary";
    editProject.value = "Editar projeto";
    editProject.type = "button";
    editProject.addEventListener('click', function() {
        CreateProjectEditModal(projectID);
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
    modalContent.appendChild(editProject);
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

function CreateProjectEditModal(projectID) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "editModal";
    /*modal.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);*/

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    modalContent.appendChild(closeSpan);

    var p = document.createElement("P");
    p.innerHTML = "Editar projeto";
    modalContent.appendChild(p);

    var editionForm = document.createElement("FORM");
    editionForm.method = "post";
    editionForm.action = "phpFunctions/Project_Update.php?id=" + projectID;
    modalContent.appendChild(editionForm);

    var divName = document.createElement("DIV");
    var nameField_label = document.createElement("LABEL");
    nameField_label.for = "nameField";
    nameField_label.innerHTML = "Nome do projeto";
    var nameField = document.createElement("INPUT");
    nameField.required = true;
    nameField.name = "project_name";
    editionForm.appendChild(divName);
    divName.appendChild(nameField_label);
    divName.appendChild(nameField);

    var divDateStart = document.createElement("DIV");
    var dateStartField_label = document.createElement("LABEL");
    dateStartField_label.for = "dateStartField";
    dateStartField_label.innerHTML = "Data de início";
    var dateStartField = document.createElement("INPUT");
    dateStartField.required = true;
    dateStartField.type = "date";
    dateStartField.name = "date_start";
    editionForm.appendChild(divDateStart);
    divDateStart.appendChild(dateStartField_label);
    divDateStart.appendChild(dateStartField);

    var divDateEnd = document.createElement("DIV");
    var dateEndField_label = document.createElement("LABEL");
    dateEndField_label.for = "dateEndField";
    dateEndField_label.innerHTML = "Prazo final";
    var dateEndField = document.createElement("INPUT");
    dateEndField.required = true;
    dateEndField.type = "date";
    dateEndField.name = "date_end";
    editionForm.appendChild(divDateEnd);
    divDateEnd.appendChild(dateEndField_label);
    divDateEnd.appendChild(dateEndField);

    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn btn-primary";
    closeButton.value = "Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    editionForm.appendChild(closeButton);

    var submitButton = document.createElement("INPUT");
    submitButton.className = "btn btn-success";
    submitButton.value = "Confirmar";
    submitButton.type = "submit";
    editionForm.appendChild(submitButton);


    //modal.appendChild(modalContent);
    //modalContent.appendChild(closeSpan);
    //modalContent.appendChild(p);
    //modalContent.appendChild(closeButton);
    //modalContent.appendChild(submitEdition);

    document.body.appendChild(modal);
}

function RemoveModal(modalId) {
    document.body.removeChild(document.getElementById(modalId));
}