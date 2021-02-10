<?php
    session_start();
    
    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //pega o id do projeto
    $project_id = $_GET['id'];

    //seta o projeto como arquivado
    $sql = ("UPDATE projects
        SET archived = !archived
        WHERE project_id = $project_id");

    //valida a edição
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "Project updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

    $link->close();

    //redirecionamento
    header('Location: ../index.php');
?>