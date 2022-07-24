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
  <main>
    <div id="banner">
      <h1 class="banner__title">mathiasRoux</h1>
      <h2 class="banner__role">Creative developer</h2>
    </div>

    <?php
    $json_data = file_get_contents("./data/projects_data.json");
    $items = json_decode($json_data, true);
    ?>
    <section id="items">
      <?php
      if (count($items) != 0) {
        foreach ($items as $item) {
      ?>
          <div class="item">
            <div class="item__slash"></div>
            <div class="item__index"><?= $item["index"] ?></div>
            <div class="item__left">
              <div class="item__left-title"><?= $item["title"] ?></div>
              <div class="item__left-date"><?= $item["date"] ?></div>
            </div>
            <div class="item__image">
              <div class="item__image-inner" style="background-image: url('<?= $item["images"][0] ?>')"></div>
            </div>
            <div class="item__right">
              <a class="item__right-arrow" href="#">arrow --></a>
              <div class="item__right-technos"><?= $item["details"] ?></div>
            </div>
          </div>
          </div>
      <?php
        }
      }
      ?>
    </section>
  </main>
</body>

<script type="module" src="app.js"></script>

</html>
