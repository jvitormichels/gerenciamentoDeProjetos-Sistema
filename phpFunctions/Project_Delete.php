<?php
    session_start();
    
    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //pega o id do projeto
    $project_id = $_GET['id'];

    $sql = ("DELETE FROM projects WHERE project_id = $project_id");
    //valida a deleção
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "Project deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

    $sql = ("DELETE FROM activities WHERE project_id = $project_id");
    //valida a deleção
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "Project deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

    $link->close();

    //redirecionamento
    //header('Location: ../index.php');
?>