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
    <link rel="stylesheet" href="Get_data.css">
</head>

<body>
    <table>
        <div class="navbar">
            <img src="mgl.jpg" alt="reloading">
            <input type="text" placeholder="Search bar">
        </div>
        <tbody>
            <?php while ($row = mysqli_fetch_assoc($result)) {
            ?>
                <div style="background-color: #beccbc; width:250px; margin:.5rem; padding:.5rem">
                    <p><?php echo 'Tutor Name:' . $row['Teacher_name'] ?></p>
                    <p><?php echo 'Prefered Subjects:' . $row['Prefered_subject'] ?></p>
                    <p><?php echo 'Experience:' . $row['Experience'] ?></p>
                    <p><?php echo 'Qualification:' . $row['Qualification'] ?></p>
                    <p><?php echo 'Tuition Fee:' . $row['Fee'] ?></p>
                    <p><?php echo 'Location:' . $row['Location'] ?></p>
                </div>
            <?php } ?>
        </tbody>
    </table>
</body>

</html>