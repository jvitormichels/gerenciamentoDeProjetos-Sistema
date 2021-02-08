<?php
    session_start();
    
    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //pega o id do projeto
    $project_id = $_GET['id'];
    $project_name = $_POST['project_name'];
    $date_start = $_POST['date_start'];
    $date_end = $_POST['date_end'];

    //deleção do projeto
    $sql = ("UPDATE projects
        SET project_name = '$project_name',
        date_start = '$date_start',
        date_end = '$date_end'
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