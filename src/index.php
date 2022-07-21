<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>php_test</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
  <div id="banner">
    <h1>mathiasRoux</h1>
    <h2>Creative developer</h2>
  </div>

  <?php
  $json_data = file_get_contents("./data/projects_data.json");
  $projects = json_decode($json_data, true);
  ?>
  <section id="projects">
    <?php
    if (count($projects) != 0) {
      foreach ($projects as $project) {
    ?>
        <div class="project">
          <div class="slash"></div>
          <div class="index"><?= $project["index"] ?></div>
          <div class="right">
            <div class="title"><?= $project["title"] ?></div>
            <div class="date"><?= $project["date"] ?></div>
          </div>
          <div class="middle">
            <div class="img" style="background-image: url('<?= $project["images"][0] ?>')"></div>
          </div>
          <div class="left">
            <div class="arrow">arrow --></div>
            <div class="technos"><?= $project["details"] ?></div>
          </div>
        </div>
        </div>
    <?php
      }
    }
    ?>
  </section>

</body>

<script type="module" src="app.js"></script>

</html>
