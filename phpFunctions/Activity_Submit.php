<?php
    session_start();
    
    //criar conexão
    $link = mysqli_connect("localhost", "root", "", "euax_desafio");

    //pega o id do projeto, armazenado no url, ao qual a atividade pertencerá
    $project_id = $_GET['id'];

    //resgata informações do formulário html
    $activity_name = $_POST['activity_name'];
    $date_start = $_POST['date_start'];
    $date_end = $_POST['date_end'];
    $finished = $_POST['finished'];

    //busca o maior id de atividades de um determinado projeto
    //soma 1 e define o resultado como id da nova atividade
    $activities = mysqli_query($link, "SELECT MAX(activity_id) AS largest_id FROM activities WHERE project_id=$project_id");
    $row = mysqli_fetch_array($activities);
    $activity_id = $row['largest_id'] + 1;

    $sql = "INSERT INTO activities (activity_id, project_id, activity_name, date_start, date_end, finished) VALUES ($activity_id, '$project_id', '$activity_name', '$date_start', '$date_end', '$finished')";

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
    header('Location: ../activities.php?id=' . $project_id);
?>