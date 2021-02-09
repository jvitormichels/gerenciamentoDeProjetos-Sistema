<?php
    session_start();
    
    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //pega o id do projeto e da atividade
    $project_id = $_GET['p_id'];
    $activity_id = $_GET['a_id'];

    //deleção do projeto
    $sql = ("UPDATE activities
        SET finished = !finished
        WHERE project_id = $project_id
        AND activity_id = $activity_id");

    //valida a edição
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "Activity updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

    $link->close();

    //redirecionamento
    header('Location: ../activities.php?id=' . $project_id . '&arquivados=0');
?>