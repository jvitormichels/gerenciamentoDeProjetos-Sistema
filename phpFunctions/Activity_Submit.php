<?php
    session_start();

    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //resgata informações do formulário html
    $project_id = $_POST['project_id'];
    $activity_name = $_POST['activity_name'];
    $date_start = $_POST['date_start'];
    $date_end = $_POST['date_end'];
    $finished = $_POST['finished'];

    $sql = "INSERT INTO activities (activity_id, project_id, activity_name, date_start, date_end, finished) VALUES (NULL, '$project_id', '$activity_name', '$date_start', '$date_end', '$finished')";
    
    //valida a inserção
    //retire o redirecionamento para monitorar isso
    if ($link->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }

    $link->close();

    //redirecionamento
    //header('Location: ../index.php');
    header('Location: ../activities.php');
?>