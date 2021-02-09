<?php 
	$link = mysqli_connect("localhost", "root", "", "euax_desafio");

	//verifica a existência e valor do parâmetro $mostrar_arquivados no url e faz a consulta de acordo
	$mostrar_arquivados = (isset($_GET["arquivados"]) && trim($_GET["arquivados"]) == '1');
	if ($mostrar_arquivados == 0) { 
		$projetos = mysqli_query($link, "SELECT * FROM projects WHERE archived=0"); 
	}
	else {
		$projetos = mysqli_query($link, "SELECT * FROM projects WHERE archived=1");
	}
	//$atividades = mysqli_query($link, "SELECT * FROM activities");
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
	<input type="button" class="btn-success" onclick="OpenForm('newProjectForm');" value="Novo projeto"/>
	<input type="button" class="btn-secondary" onclick="Redirect('index.php?arquivados=<?php echo $mostrar_arquivados == 1 ? '0' : '1';?>');" value="Mostrar <?php echo $mostrar_arquivados == 1 ? 'Ativos' : 'Arquivados';?>">

	<div id="project-tableBox" class="tableBox">
		<table align="center" border="1" class="dataTable" style="width: 90%;">
			<tr>
				<th>ID do Projeto	</th>
				<th>Nome do Projeto	</th>
				<th>Data Início		</th>
				<th>Data Fim		</th>
				<th>% Completo		</th>
				<th>Atrasado		</th>
			</tr>

			<!-- Verifica as linhas do mysql e gera novas linhas na tabela -->
			<?php while($row = mysqli_fetch_array($projetos)) { ?>
				<?php
					// * CÁLCULO DO PROGRESSO DO PROJETO * //
					//compara o número total de atividades com o número de atividades concluídas
					//e valida a existência de atividades para prevenir /0
					$aux_activities_total = mysqli_query($link, "SELECT finished FROM activities WHERE project_id=" . $row['project_id']);
					$num_activities_total = mysqli_num_rows($aux_activities_total);
					if ($num_activities_total == 0) {
						$progress = 'Sem atividades';
					}else{
						//filtra entre as atividades do projeto aquelas que foram finalizadas
						//e verifica quantas linhas foram retornadas
						$aux_activities_done = mysqli_query($link, "SELECT finished FROM activities WHERE finished=1 AND project_id=" . $row['project_id']);
						$num_activities_done = mysqli_num_rows($aux_activities_done);
						//transforma em porcentagem e arredonda
						$progress = ($num_activities_done / $num_activities_total) * 100;
						$progress = round($progress, 0) . "%";
					}

					// * CÁLCULO DO ATRASO DO PROJETO * //
					//dados do projeto armazenados para posterior uso no comando ao mysql
					$project_deadline = $row['date_end'];
					$project_id = $row['project_id'];

					//filtra entre as atividades do projeto aquelas que 
					//terminam depois do próprio projeto e não foram finalizadas ainda
					$aux_activities_late = mysqli_query($link, "SELECT finished FROM activities WHERE finished=0 AND project_id = $project_id AND DATE(date_end) > DATE('" . $project_deadline . "')");
					//e verifica quantas linhas foram retornadas
					$num_activities_late = mysqli_num_rows($aux_activities_late);
					if ($num_activities_late == 0) {
						$atraso = "Sem atrasos";
					}else{
						$atraso = "Sim";
					}
				?>

				<tr class="link" id="link" onclick="CreateProjectModal('<?php echo ($row['project_id']) ?>', '<?php echo ($row['project_name']) ?>', '<?php echo ($row['date_start']) ?>', '<?php echo ($row['date_end']) ?>', '<?php echo ($row['archived']) ?>')">
					<td><?php echo $row['project_id']; ?>	</td>
					<td><?php echo $row['project_name']; ?>	</td>
					<td><?php echo $row['date_start']; ?>	</td>
					<td><?php echo $row['date_end']; ?>		</td>
					<td><?php echo $progress ?>				</td>
					<td><?php echo $atraso ?>				</td>
				</tr>
			<?php } ?>
		</table>
	</div>

	<!-- Formulário para criação de projetos -->
	<div class="modal" id="newProjectForm" style="display:none;">
		<div class="modalContent">
			<form method="post" action="phpFunctions/Project_Submit.php">
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
				<button type="submit" class="btn-success">Concluir</button>
				<button type="reset" class="btn-secondary" onclick="CloseForm('newProjectForm')">Cancelar</button>
			</form>
		</div>
	</div>
</body>
<script src="js/screen.js"></script>
</html>