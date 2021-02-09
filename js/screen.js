function Redirect (adress) {
    location.href = adress;
}

function OpenForm(formID) {
    document.getElementById(formID).style.display = "block";
}

function CloseForm(formID) {
    document.getElementById(formID).style.display = "none";
}

function ProjectModal(projectID, projectName, dateStart, dateEnd, archived) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "modal";

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    var p = document.createElement("P");
    p.innerHTML = "<h2>" + projectName + "</h2>";
    modalContent.appendChild(p);
    var p1 = document.createElement("P");
    p1.innerHTML = "Data de início: " + FormatDate(dateStart);
    modalContent.appendChild(p1);
    var p2 = document.createElement("P");
    p2.innerHTML = "Data final: " + FormatDate(dateEnd);
    modalContent.appendChild(p2);

    var seeProject = document.createElement("INPUT");
    seeProject.className = "btn-success";
    seeProject.value = "Ver projeto";
    seeProject.type = "button";
    seeProject.addEventListener('click', function() {
        Redirect("activities.php?id=" + projectID + "&arquivados=0");
    }, false);
    modalContent.appendChild(seeProject);

    var editProject = document.createElement("INPUT");
    editProject.className = "btn-secondary";
    editProject.value = "Editar projeto";
    editProject.type = "button";
    editProject.addEventListener('click', function() {
        ProjectEditModal(projectID, projectName, dateStart, dateEnd);
    }, false);
    modalContent.appendChild(editProject);

    var deleteProject = document.createElement("INPUT");
    deleteProject.className = "btn-danger";
    deleteProject.value = "Deletar projeto";
    deleteProject.type = "button";
    deleteProject.addEventListener('click', function() {
        ProjectDeletionModal(projectID);
    }, false);
    modalContent.appendChild(deleteProject);

    var archiveProject = document.createElement("INPUT");
    archiveProject.className = "btn-warning";
    archiveProject.type = "button";
    if (archived == 0) {
        archiveProject.value = "Arquivar projeto";
        archiveProject.addEventListener('click', function() {
            Redirect("phpFunctions/Project_Archive.php?id=" + projectID);
        }, false);
        modalContent.appendChild(archiveProject);
    }else{
        archiveProject.value = "Desarquivar projeto";
        archiveProject.addEventListener('click', function() {
            Redirect("phpFunctions/Project_Archive.php?id=" + projectID);
        }, false);
        modalContent.appendChild(archiveProject);
    }

    document.body.appendChild(modal);
}

function ActivityModal(projectID, activityID, activityName, dateStart, dateEnd, archived, finished) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "modal";

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    var p = document.createElement("P");
    p.innerHTML = "<h2>" + activityName + "</h2>";
    modalContent.appendChild(p);
    var p1 = document.createElement("P");
    p1.innerHTML = "Data de início: " + FormatDate(dateStart);
    modalContent.appendChild(p1);
    var p2 = document.createElement("P");
    p2.innerHTML = "Data final: " + FormatDate(dateEnd);
    modalContent.appendChild(p2);

    var editActivity = document.createElement("INPUT");
    editActivity.className = "btn-secondary";
    editActivity.value = "Editar atividade";
    editActivity.type = "button";
    editActivity.addEventListener('click', function() {
        ActivityEditModal(projectID, activityID , activityName, dateStart, dateEnd);
    }, false);
    modalContent.appendChild(editActivity);

    var deleteActivity = document.createElement("INPUT");
    deleteActivity.className = "btn-danger";
    deleteActivity.value = "Deletar atividade";
    deleteActivity.type = "button";
    deleteActivity.addEventListener('click', function() {
        ActivityDeletionModal(projectID, activityID);
    }, false);
    modalContent.appendChild(deleteActivity);

    var archiveActivity = document.createElement("INPUT");
    archiveActivity.className = "btn-warning";
    archiveActivity.type = "button";
    archiveActivity.value = archived == 0 ? "Arquivar atividade" : "Desarquivar atividade";
    archiveActivity.addEventListener('click', function() {
        Redirect("phpFunctions/Activity_Archive.php?project_id=" + projectID + "&activity_id=" + activityID);
    }, false);
    modalContent.appendChild(archiveActivity);

    var finishActivity = document.createElement("INPUT");
    finishActivity.className = "btn-success";
    finishActivity.type = "button";
    finishActivity.value = finished == 0 ? "Concluir atividade" : "Desconcluir atividade";
    finishActivity.addEventListener('click', function() {
        Redirect("phpFunctions/Activity_Conclude.php?p_id=" + projectID + "&a_id=" + activityID);
    }, false);
    modalContent.appendChild(finishActivity);

    document.body.appendChild(modal);
}

function ProjectDeletionModal(projectID) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "confirmModal";

    var modalContent = document.createElement("DIV");
    modalContent.className = "confirmModalContent";
    modal.appendChild(modalContent);

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    var p = document.createElement("P");
    p.innerHTML = "Tem certeza que deseja deletar o projeto?";
    modalContent.appendChild(p);

    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-primary";
    closeButton.value = "Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeButton);

    var deleteProject = document.createElement("INPUT");
    deleteProject.className = "btn-danger";
    deleteProject.value = "Deletar";
    deleteProject.type = "button";
    deleteProject.addEventListener('click', function() {
        Redirect("phpFunctions/Project_Delete.php?id=" + projectID);
    }, false);
    modalContent.appendChild(deleteProject);

    document.body.appendChild(modal);
}

function ActivityDeletionModal(projectID, activityID) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "confirmModal";

    var modalContent = document.createElement("DIV");
    modalContent.className = "confirmModalContent";
    modal.appendChild(modalContent);

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    var p = document.createElement("P");
    p.innerHTML = "Tem certeza que deseja deletar a atividade?";
    modalContent.appendChild(p);

    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-primary";
    closeButton.value = "Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeButton);

    var deleteActivity = document.createElement("INPUT");
    deleteActivity.className = "btn-danger";
    deleteActivity.value = "Deletar";
    deleteActivity.type = "button";
    deleteActivity.addEventListener('click', function() {
        Redirect("phpFunctions/Activity_Delete.php?p_id=" + projectID + "&a_id=" + activityID);
    }, false);
    modalContent.appendChild(deleteActivity);

    document.body.appendChild(modal);
}

function ProjectEditModal(projectID, projectName, dateStart, dateEnd) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "editModal";

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
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
    nameField_label.innerHTML = "Nome do projeto: ";
    var nameField = document.createElement("INPUT");
    nameField.required = true;
    nameField.name = "project_name";
    nameField.value = projectName;
    editionForm.appendChild(divName);
    divName.appendChild(nameField_label);
    divName.appendChild(nameField);

    var divDateStart = document.createElement("DIV");
    var dateStartField_label = document.createElement("LABEL");
    dateStartField_label.for = "dateStartField";
    dateStartField_label.innerHTML = "Data de início: ";
    var dateStartField = document.createElement("INPUT");
    dateStartField.required = true;
    dateStartField.type = "date";
    dateStartField.name = "date_start";
    dateStartField.value = dateStart;
    editionForm.appendChild(divDateStart);
    divDateStart.appendChild(dateStartField_label);
    divDateStart.appendChild(dateStartField);

    var divDateEnd = document.createElement("DIV");
    var dateEndField_label = document.createElement("LABEL");
    dateEndField_label.for = "dateEndField";
    dateEndField_label.innerHTML = "Prazo final: ";
    var dateEndField = document.createElement("INPUT");
    dateEndField.required = true;
    dateEndField.type = "date";
    dateEndField.name = "date_end";
    dateEndField.value = dateEnd;
    editionForm.appendChild(divDateEnd);
    divDateEnd.appendChild(dateEndField_label);
    divDateEnd.appendChild(dateEndField);

    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-primary";
    closeButton.value = "Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    editionForm.appendChild(closeButton);

    var submitButton = document.createElement("INPUT");
    submitButton.className = "btn-success";
    submitButton.value = "Confirmar";
    submitButton.type = "submit";
    editionForm.appendChild(submitButton);

    document.body.appendChild(modal);
}

function ActivityEditModal(projectID, activityID, activityName, dateStart, dateEnd) {
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "editModal";

    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    var p = document.createElement("P");
    p.innerHTML = "Editar atividade";
    modalContent.appendChild(p);

    var editionForm = document.createElement("FORM");
    editionForm.method = "post";
    editionForm.action = "phpFunctions/Activity_Update.php?p_id=" + projectID + "&a_id=" + activityID;
    modalContent.appendChild(editionForm);

    var divName = document.createElement("DIV");
    var nameField_label = document.createElement("LABEL");
    nameField_label.for = "nameField";
    nameField_label.innerHTML = "Nome da atividade: ";
    var nameField = document.createElement("INPUT");
    nameField.required = true;
    nameField.name = "activity_name";
    nameField.value = activityName;
    editionForm.appendChild(divName);
    divName.appendChild(nameField_label);
    divName.appendChild(nameField);

    var divDateStart = document.createElement("DIV");
    var dateStartField_label = document.createElement("LABEL");
    dateStartField_label.for = "dateStartField";
    dateStartField_label.innerHTML = "Data de início: ";
    var dateStartField = document.createElement("INPUT");
    dateStartField.required = true;
    dateStartField.type = "date";
    dateStartField.name = "date_start";
    dateStartField.value = dateStart;
    editionForm.appendChild(divDateStart);
    divDateStart.appendChild(dateStartField_label);
    divDateStart.appendChild(dateStartField);

    var divDateEnd = document.createElement("DIV");
    var dateEndField_label = document.createElement("LABEL");
    dateEndField_label.for = "dateEndField";
    dateEndField_label.innerHTML = "Prazo final: ";
    var dateEndField = document.createElement("INPUT");
    dateEndField.required = true;
    dateEndField.type = "date";
    dateEndField.name = "date_end";
    dateEndField.value = dateEnd;
    editionForm.appendChild(divDateEnd);
    divDateEnd.appendChild(dateEndField_label);
    divDateEnd.appendChild(dateEndField);

    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-primary";
    closeButton.value = "Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    editionForm.appendChild(closeButton);

    var submitButton = document.createElement("INPUT");
    submitButton.className = "btn-success";
    submitButton.value = "Confirmar";
    submitButton.type = "submit";
    editionForm.appendChild(submitButton);

    document.body.appendChild(modal);
}

function RemoveModal(modalId) {
    document.body.removeChild(document.getElementById(modalId));
}

function FormatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0],
    month = datePart[1],
    day = datePart[2];

    return day+'/'+month+'/'+year;
}