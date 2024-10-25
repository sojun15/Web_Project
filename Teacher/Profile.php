<?php
include('connect_database.php');

$sql = "select * from teacher";
$result = $connect_db->query($sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Profile.css">
</head>

<body>
    <header>
        <h1>Profile</h1>
    </header>
    <main>
        <section class="about">
            <?php while ($row = mysqli_fetch_assoc($result)) {
            ?>
                <?php if ($row['Teacher_id'] == 15) {
                ?>
                    <h2><?php echo 'Id:' . $row['Teacher_id']; ?></h2>
                    <h2><?php echo 'Name:' . $row['Teacher_name']; ?></h2>
                    <h2><?php echo 'Contact:' . $row['Contact_details']; ?></h2>
                    <h2><?php echo 'Instittution:' . $row['Qualification']; ?></h2>
            <?php }
            } ?>
        </section>
    </main>
</body>

</html>