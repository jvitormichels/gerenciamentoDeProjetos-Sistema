<?php
    session_start();

    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //resgata informações do formulário html
    $project_name = $_POST['project_name'];
    $date_start = $_POST['date_start'];
    $date_end = $_POST['date_end'];
    $archived = FALSE;

    $sql = "INSERT INTO projects (project_id, project_name, date_start, date_end, archived) VALUES (NULL, '$project_name', '$date_start', '$date_end', '$archived')";
    
    //valida a inserção
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }
    
    $link->close();

    //redirecionamento
    header('Location: ../index.php');
?>