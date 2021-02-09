<?php
    session_start();
    
    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //pega o id do projeto
    $project_id = $_GET['project_id'];
    $activity_id = $_GET['activity_id'];

    //deleção do projeto
    $sql = ("UPDATE activities
        SET archived = !archived
        WHERE project_id = $project_id AND activity_id = $activity_id");

    //valida a edição
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "Activity updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

    $link->close();

    //redirecionamento
    //header('Location: ../index.php');
    header('Location: ../activities.php?id=' . $project_id . '&arquivados=0');
?>