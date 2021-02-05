<?php
    session_start();
    
    $project_name = "";
    $date_start = "";
    $date_end = "";

    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    $project_name = $_POST['project_name'];
    $date_start = $_POST['date_start'];
    $date_end = $_POST['date_end'];

    $sql = "INSERT INTO projects (project_id, project_name, date_start, date_end) VALUES (NULL, '$project_name', '$date_start', '$date_end')";
    
    if ($link->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $link->error;
    }
      
    $link->close();

    //header('Location: ../index.php');
    header('Location: ../atividades.php');
?>