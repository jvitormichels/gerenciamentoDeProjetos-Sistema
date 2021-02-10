<?php
    session_start();
    
    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //pega o id do projeto
    $project_id = $_GET['p_id'];
    $activity_id = $_GET['a_id'];

    //deleção da atividade
    $sql = ("DELETE FROM activities WHERE project_id = $project_id AND activity_id = $activity_id");

    //valida a deleção
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "Project activities deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

    $link->close();

    //redirecionamento
    header('Location: ../activities.php?id=' . $project_id . '&arquivados=0');
?>