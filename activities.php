<?php 
	$link = mysqli_connect("localhost", "root", "", "euax_desafio");
	$projetos = mysqli_query($link, "SELECT * FROM projects"); 
	$atividades = mysqli_query($link, "SELECT * FROM activities"); 
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artia 2.0</title>
    <link rel="stylesheet" href="css/style.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
</head>
<body>
	<input type="button" onclick="OpenForm('newActivityForm');" value="Nova atividade"/>
	<input type="button" onclick="Redirect('index.php');" value="Mostrar atividades"/>

	<div id="activities-tableBox" class="tableBox">
		<table align="center" border="1"  class="dataTable" style="width: 90%;">
			<tr>
				<th>ID da Atividade</th>
				<th>ID do Projeto</th>
				<th>Nome da Atividade</th>
				<th>Data Início</th>
				<th>Data Fim</th>
				<th>Finalizada</th>
			</tr>

			<?php while($row = mysqli_fetch_array($atividades)) { ?>
				<tr>
					<td><?php echo $row['activity_id']; ?></td>
					<td><?php echo $row['project_id']; ?></td>
					<td><?php echo $row['activity_name']; ?></a></td>
					<td><?php echo $row['date_start']; ?></td>
					<td><?php echo $row['date_end']; ?></td>
					<td><?php echo $row['finished']; ?></td>
				</tr>
			<?php } ?>
		</table>
	</div>


	<!-- Formulário para criação de atividades -->
	<div class="formPopup" id="newActivityForm">
		<form method="post" action="phpFunctions/Activity_Submit.php" class="formContainer">
			<h2>Cadastrar nova atividade</h2>
			<div>
				<label for="project_id"><b>Id do projeto</b></label>
				<select name="project_id">
					<?php while($row = mysqli_fetch_array($projetos)) { ?>
						<option value="<?php echo $row['project_id']; ?>"><?php echo $row['project_name']; ?></option>
					<?php } ?>
				</select>
			</div>
			<div>
				<label for="activity_name"><b>Nome da atividade</b></label>
				<input type="text" name="activity_name" required/>
			</div>
			<div>
				<label for="date_start"><b>Data de início</b></label>
				<input type="date" name="date_start" required/>
			</div>
			<div>
				<label for="date_end"><b>Prazo final</b></label>
				<input type="date" name="date_end" required/>
			</div>
			<div>
				<label for="finished"><b>Finalizada?</b></label>
				<input type="checkbox" name="finished"/>
			</div>
			<br>
			<button type="submit" class="btn-1">Concluir</button>
			<button type="reset" class="btn-cancel" onclick="CloseForm('newActivityForm')">Cancelar</button>
		</form>
	</div>
</body>
<script src="js/testScript.js"></script>
</html>