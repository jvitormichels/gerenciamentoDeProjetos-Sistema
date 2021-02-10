//Redireciona para o endereço informado
function Redirect (adress) {
    location.href = adress;
}

//Revelar formulários estáticos
function OpenForm(formID) {
    document.getElementById(formID).style.display = "block";
}

//Esconder formulários estáticos
function CloseForm(formID) {
    document.getElementById(formID).style.display = "none";
}


// MODAIS DE PROJETOS //
function ProjectModal(projectID, projectName, dateStart, dateEnd, archived) {
    //background do modal
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "modal";

    //caixa do modal em si
    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    //botão de fechar (X)
    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    //informações do projeto/atividade
    var p = document.createElement("P");
    p.innerHTML = "<h2>" + projectName + "</h2>";
    modalContent.appendChild(p);
    var p1 = document.createElement("P");
    p1.innerHTML = "Data de início: " + FormatDate(dateStart);
    modalContent.appendChild(p1);
    var p2 = document.createElement("P");
    p2.innerHTML = "Data final: " + FormatDate(dateEnd);
    modalContent.appendChild(p2);

    //div de botões do modal
    var buttonsDiv = document.createElement("DIV");
    buttonsDiv.className = "buttonsDiv";

    //Examinar projeto - button
    var seeProject = document.createElement("INPUT");
    seeProject.className = "btn-success";
    seeProject.value = "⇲ Ver projeto";
    seeProject.type = "button";
    seeProject.addEventListener('click', function() {
        Redirect("activities.php?id=" + projectID + "&arquivados=0");
    }, false);
    buttonsDiv.appendChild(seeProject);

    //Editar projeto - button
    var editProject = document.createElement("INPUT");
    editProject.className = "btn-secondary";
    editProject.value = "⤨ Editar";
    editProject.type = "button";
    editProject.addEventListener('click', function() {
        ProjectEditModal(projectID, projectName, dateStart, dateEnd);
    }, false);
    buttonsDiv.appendChild(editProject);

    //Deletar projeto - button
    var deleteProject = document.createElement("INPUT");
    deleteProject.className = "btn-danger";
    deleteProject.value = "✘ Deletar projeto";
    deleteProject.type = "button";
    deleteProject.addEventListener('click', function() {
        ProjectDeletionModal(projectID);
    }, false);
    buttonsDiv.appendChild(deleteProject);

    //Arquivar projeto - button
    var archiveProject = document.createElement("INPUT");
    archiveProject.className = "btn-warning";
    archiveProject.type = "button";
    archiveProject.value = archived == 0 ? "⌹ Arquivar projeto" : "⌹ Desarquivar projeto";
    archiveProject.addEventListener('click', function() {
        Redirect("phpFunctions/Project_Archive.php?id=" + projectID);
    }, false);
    buttonsDiv.appendChild(archiveProject);

    //anexa caixa de botões ao modal
    modalContent.appendChild(buttonsDiv);

    //anexa o modal ao documento
    document.body.appendChild(modal);
}

function ProjectDeletionModal(projectID) {
    //background do modal
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "confirmModal";

    //caixa do modal em si
    var modalContent = document.createElement("DIV");
    modalContent.className = "confirmModalContent";
    modal.appendChild(modalContent);

    //botão de fechar (X)
    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    //texto do modal
    var p = document.createElement("P");
    p.innerHTML = "Tem certeza que deseja deletar o projeto?";
    modalContent.appendChild(p);

    //div de botões do modal
    var buttonsDiv = document.createElement("DIV");
    buttonsDiv.className = "buttons-box";

    //Cancelar deleção - button
    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-secondary";
    closeButton.value = "⇱ Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    buttonsDiv.appendChild(closeButton);

    //Confirmar deleção - button
    var deleteProject = document.createElement("INPUT");
    deleteProject.className = "btn-danger";
    deleteProject.value = "✘ Deletar";
    deleteProject.type = "button";
    deleteProject.addEventListener('click', function() {
        Redirect("phpFunctions/Project_Delete.php?id=" + projectID);
    }, false);
    buttonsDiv.appendChild(deleteProject);

    //anexa caixa de botões ao modal
    modalContent.appendChild(buttonsDiv);

    //anexa o modal ao documento
    document.body.appendChild(modal);
}

function ProjectEditModal(projectID, projectName, dateStart, dateEnd) {
    //background do modal
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "editModal";

    //caixa do modal em si
    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    //botão de fechar (X)
    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    //texto do modal
    var p = document.createElement("P");
    p.innerHTML = "Editar projeto";
    modalContent.appendChild(p);

    //formulário para submeter dados ao respectivo script php
    var editionForm = document.createElement("FORM");
    editionForm.method = "post";
    editionForm.action = "phpFunctions/Project_Update.php?id=" + projectID;
    modalContent.appendChild(editionForm);

    //div de input de dados do modal de edição
    var divName = document.createElement("DIV");
    divName.className = "editInputs-Box";
    editionForm.appendChild(divName);
    
    //campo de nome - input
    var nameField_label = document.createElement("LABEL");
    nameField_label.for = "nameField";
    nameField_label.innerHTML = "Nome do projeto: ";
    divName.appendChild(nameField_label);
    var nameField = document.createElement("INPUT");
    nameField.required = true;
    nameField.name = "project_name";
    nameField.value = projectName;
    divName.appendChild(nameField);

    //campo de data de início - input
    var divDateStart = document.createElement("DIV");
    divDateStart.className = "editInputs-Box";
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

    //campo de data de fim - input
    var divDateEnd = document.createElement("DIV");
    divDateEnd.className = "editInputs-Box";
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

    //div de botões do modal
    var buttonsDiv = document.createElement("DIV");
    buttonsDiv.className = "buttonsDiv";

    //Cancelar edição - button
    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-secondary";
    closeButton.value = "⇱ Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    buttonsDiv.appendChild(closeButton);

    //Submeter edição - submit
    var submitButton = document.createElement("INPUT");
    submitButton.className = "btn-success";
    submitButton.value = "✔ Confirmar";
    submitButton.type = "submit";
    buttonsDiv.appendChild(submitButton);

    //anexa caixa de botões ao modal
    modalContent.appendChild(buttonsDiv);

    //anexa o modal ao documento
    document.body.appendChild(modal);
}
// MODAIS DE PROJETOS //



// MODAIS DE ATIVIDADES //
function ActivityModal(projectID, activityID, activityName, dateStart, dateEnd, archived, finished) {
    //background do modal
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "modal";

    //caixa do modal em si
    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    //botão de fechar (X)
    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    //informações do projeto/atividade
    var p = document.createElement("P");
    p.innerHTML = "<h2>" + activityName + "</h2>";
    modalContent.appendChild(p);
    var p1 = document.createElement("P");
    p1.innerHTML = "Data de início: " + FormatDate(dateStart);
    modalContent.appendChild(p1);
    var p2 = document.createElement("P");
    p2.innerHTML = "Data final: " + FormatDate(dateEnd);
    modalContent.appendChild(p2);

    //div de botões do modal
    var buttonsDiv = document.createElement("DIV");
    buttonsDiv.className = "buttons-box";

    //Editar atividade - button
    var editActivity = document.createElement("INPUT");
    editActivity.className = "btn-secondary";
    editActivity.value = "⤨ Editar";
    editActivity.type = "button";
    editActivity.addEventListener('click', function() {
        ActivityEditModal(projectID, activityID , activityName, dateStart, dateEnd);
    }, false);
    buttonsDiv.appendChild(editActivity);

    //Deletar atividade - button
    var deleteActivity = document.createElement("INPUT");
    deleteActivity.className = "btn-danger";
    deleteActivity.value = "✘ Deletar";
    deleteActivity.type = "button";
    deleteActivity.addEventListener('click', function() {
        ActivityDeletionModal(projectID, activityID);
    }, false);
    buttonsDiv.appendChild(deleteActivity);

    //Arquivar atividade - button
    var archiveActivity = document.createElement("INPUT");
    archiveActivity.className = "btn-warning";
    archiveActivity.type = "button";
    archiveActivity.value = archived == 0 ? "⌹ Arquivar" : "⌹ Desarquivar";
    archiveActivity.addEventListener('click', function() {
        Redirect("phpFunctions/Activity_Archive.php?project_id=" + projectID + "&activity_id=" + activityID);
    }, false);
    buttonsDiv.appendChild(archiveActivity);

    //Concluir/desconcluir atividade - button
    var finishActivity = document.createElement("INPUT");
    finishActivity.className = "btn-success";
    finishActivity.type = "button";
    finishActivity.value = finished == 0 ? "✔ Concluir" : "✘ Desconcluir";
    finishActivity.addEventListener('click', function() {
        Redirect("phpFunctions/Activity_Conclude.php?p_id=" + projectID + "&a_id=" + activityID);
    }, false);
    buttonsDiv.appendChild(finishActivity);

    //anexa caixa de botões ao modal
    modalContent.appendChild(buttonsDiv);

    //anexa o modal ao documento
    document.body.appendChild(modal);
}

function ActivityDeletionModal(projectID, activityID) {
    //background do modal
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "confirmModal";

    //caixa do modal em si
    var modalContent = document.createElement("DIV");
    modalContent.className = "confirmModalContent";
    modal.appendChild(modalContent);

    //botão de fechar (X)
    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    //texto do modal
    var p = document.createElement("P");
    p.innerHTML = "Tem certeza que deseja deletar a atividade?";
    modalContent.appendChild(p);

    //div de botões do modal
    var buttonsDiv = document.createElement("DIV");
    buttonsDiv.className = "buttons-box";

    //Cancelar deleção - button
    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-secondary";
    closeButton.value = "⇱ Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    buttonsDiv.appendChild(closeButton);

    //Confirmar deleção - button
    var deleteActivity = document.createElement("INPUT");
    deleteActivity.className = "btn-danger";
    deleteActivity.value = "✘ Deletar";
    deleteActivity.type = "button";
    deleteActivity.addEventListener('click', function() {
        Redirect("phpFunctions/Activity_Delete.php?p_id=" + projectID + "&a_id=" + activityID);
    }, false);
    buttonsDiv.appendChild(deleteActivity);

    //anexa caixa de botões ao modal
    modalContent.appendChild(buttonsDiv);

    //anexa o modal ao documento
    document.body.appendChild(modal);
}

function ActivityEditModal(projectID, activityID, activityName, dateStart, dateEnd) {
    //background do modal
    var modal = document.createElement("DIV");
    modal.className = "modal";
    modal.id = "editModal";

    //caixa do modal em si
    var modalContent = document.createElement("DIV");
    modalContent.className = "modalContent";
    modal.appendChild(modalContent);

    //botão de fechar (X)
    var closeSpan = document.createElement("SPAN");
    closeSpan.className = "close";
    closeSpan.innerHTML = "✖";
    closeSpan.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    modalContent.appendChild(closeSpan);

    //texto do modal
    var p = document.createElement("P");
    p.innerHTML = "Editar atividade";
    modalContent.appendChild(p);

    //formulário para submeter dados ao respectivo script php
    var editionForm = document.createElement("FORM");
    editionForm.method = "post";
    editionForm.action = "phpFunctions/Activity_Update.php?p_id=" + projectID + "&a_id=" + activityID;
    modalContent.appendChild(editionForm);

    //div de input de dados do modal de edição
    var divName = document.createElement("DIV");
    divName.className = "editInputs-Box";
    editionForm.appendChild(divName);

    //campo de nome - input
    var nameField_label = document.createElement("LABEL");
    nameField_label.for = "nameField";
    nameField_label.innerHTML = "Nome da atividade: ";
    divName.appendChild(nameField_label);
    var nameField = document.createElement("INPUT");
    nameField.required = true;
    nameField.name = "activity_name";
    nameField.value = activityName;
    divName.appendChild(nameField);

    //campo de data de início - input
    var divDateStart = document.createElement("DIV");
    divDateStart.className = "editInputs-Box";
    editionForm.appendChild(divDateStart);
    var dateStartField_label = document.createElement("LABEL");
    dateStartField_label.for = "dateStartField";
    dateStartField_label.innerHTML = "Data de início: ";
    divDateStart.appendChild(dateStartField_label);
    var dateStartField = document.createElement("INPUT");
    dateStartField.required = true;
    dateStartField.type = "date";
    dateStartField.name = "date_start";
    dateStartField.value = dateStart;
    divDateStart.appendChild(dateStartField);

    //campo de data de fim - input
    var divDateEnd = document.createElement("DIV");
    divDateEnd.className = "editInputs-Box";
    editionForm.appendChild(divDateEnd);
    var dateEndField_label = document.createElement("LABEL");
    dateEndField_label.for = "dateEndField";
    dateEndField_label.innerHTML = "Prazo final: ";
    divDateEnd.appendChild(dateEndField_label);
    var dateEndField = document.createElement("INPUT");
    dateEndField.required = true;
    dateEndField.type = "date";
    dateEndField.name = "date_end";
    dateEndField.value = dateEnd;
    divDateEnd.appendChild(dateEndField);

    //div de botões do modal
    var buttonsDiv = document.createElement("DIV");
    buttonsDiv.className = "buttons-box";

    //Cancelar edição - button
    var closeButton = document.createElement("INPUT");
    closeButton.className = "btn-secondary";
    closeButton.value = "⇱ Cancelar";
    closeButton.type = "button";
    closeButton.addEventListener('click', function() {
        RemoveModal(modal.id);
    }, false);
    buttonsDiv.appendChild(closeButton);

    //Submeter edição - submit
    var submitButton = document.createElement("INPUT");
    submitButton.className = "btn-success";
    submitButton.value = "✔ Confirmar";
    submitButton.type = "submit";
    buttonsDiv.appendChild(submitButton);

    //anexa caixa de botões ao modal
    modalContent.appendChild(buttonsDiv);

    //anexa o modal ao documento
    document.body.appendChild(modal);
}
// MODAIS DE ATIVIDADES //


//Remoção dos modais criados sob demanda
function RemoveModal(modalId) {
    document.body.removeChild(document.getElementById(modalId));
}

//Formatação dee data
function FormatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0],
    month = datePart[1],
    day = datePart[2];

    return day+'/'+month+'/'+year;
}