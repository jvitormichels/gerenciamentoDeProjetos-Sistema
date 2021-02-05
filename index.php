<?php include('phpFunctions/db.php'); ?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Artia 2.0</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div id="outterBox">
		<input type="button" onclick="OpenForm('newProjectForm');" value="Novo projeto"/>
		<table align="center" border="1" style="width: 90%;">
			<tr>
				<td>ID do Projeto</td>
				<td>Nome do Projeto</td>
				<td>Data Início</td>
				<td>Data Fim</td>
				<td>% Completo</td>
				<td>Atrasado</td>
			</tr>
			<tr>
				<td>1</td>
				<td><a class="link" href="atividades.php">Desafio Euax</a></td>
				<td>03/02/2020</td>
				<td>10/02/2020</td>
				<td>2%</td>
				<td>Não</td>
			</tr>
		</table>
	</div>

	<div class="formPopup" id="newProjectForm">
		<form method="post" action="phpFunctions/newProject_Submit.php" class="formContainer">
			<h2>Cadastrar novo projeto</h2><br>
			<div>
				<label for="project_name"><b>Nome do projeto</b></label>
				<input type="text" name="project_name" required/>
			</div>
			<div>
				<label for="date_start"><b>Data de início</b></label>
				<input type="date" name="date_start" required/>
			</div>
			<div>
				<label for="date_end"><b>Prazo final</b></label>
				<input type="date" name="date_end" required/>
			</div>
			<br>
			<button type="submit" class="btn-1">Concluir</button>
			<button type="button" class="btn-cancel" onclick="CloseForm('newProjectForm')">Cancelar</button>
		</form>
	</div>
</body>
<script src="js/testScript.js"></script>
</html>