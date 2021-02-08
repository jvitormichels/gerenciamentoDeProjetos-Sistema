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
	<input type="button" onclick="OpenForm('newProjectForm');" value="Novo projeto"/>
	<input type="button" onclick="Redirect('activities.php');" value="Mostrar atividades"/>

	<div id="project-tableBox" class="tableBox">
		<table align="center" border="1" class="dataTable" style="width: 90%;">
			<tr>
				<th>ID do Projeto</th>
				<th>Nome do Projeto</th>
				<th>Data Início</th>
				<th>Data Fim</th>
				<th>% Completo</th>
				<th>Atrasado</th>
			</tr>

			<!-- Verifica as linhas do mysql e gera novas linhas na tabela -->
			<?php while($row = mysqli_fetch_array($projetos)) { ?>
				<tr class="link" id="link" onclick=CreateProjectModal("<?php echo $row['project_id']; ?>")>
					<td><?php echo $row['project_id']; ?></td>
					<td><?php echo $row['project_name']; ?></td>
					<td><?php echo $row['date_start']; ?></td>
					<td><?php echo $row['date_end']; ?></td>
					<td>
						<?php
							//compara o número total de atividades com o número de atividades concluídas
							//e valida a existência de atividades para prevenir /0
							$aux_activities_total = mysqli_query($link, "SELECT finished FROM activities WHERE project_id=" . $row['project_id']);
							$num_activities_total = mysqli_num_rows($aux_activities_total);
							if ($num_activities_total == 0) {
								echo "Sem atividades";
							}else{
								$aux_activities_done = mysqli_query($link, "SELECT finished FROM activities WHERE finished=1 AND project_id=" . $row['project_id']);
								$num_activities_done = mysqli_num_rows($aux_activities_done);
								//transforma em porcentagem e arredonda
								$progress = ($num_activities_done / $num_activities_total) * 100;
								echo round($progress, 0) . "%";
							}
						?>
					</td>
					<td>
						<?php
							$aux_activities_late = mysqli_query($link, "SELECT finished FROM activities WHERE finished=0 AND project_id=" . $row['project_id']);
							$num_activities_late = mysqli_num_rows($aux_activities_late);
							if ($num_activities_late == 0) {
								echo "Sem atrasos";
							}else{
								echo "Sim";
							}
						?>
					</td>
				</tr>
			<?php } ?>
		</table>
	</div>

	<!-- Formulário para criação de projetos -->
	<div class="formPopup" id="newProjectForm">
		<form method="post" action="phpFunctions/Project_Submit.php" class="formContainer">
			<h2>Cadastrar novo projeto</h2>
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
			<button type="reset" class="btn-cancel" onclick="CloseForm('newProjectForm')">Cancelar</button>
		</form>
	</div>

	<!-- gerado sob demanda via -->
	<div id="modal"></div>
</body>
<script src="js/screen.js"></script>
</html>