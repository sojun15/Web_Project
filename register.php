<?php
include 'connection.php';
if (isset($_POST['signUp'])) {
    $Name = $_POST['name'];
    $Id = $_POST['userid'];
    $experience = $_POST['experience'];
    $fee = $_POST['fee'];
    $location = $_POST['location'];
    $contact = $_POST['contact'];
    $method = $_POST['method'];
    $subject = $_POST['subject'];
    $availability = $_POST['availability'];
    $notes = $_POST['notes'];

    $innerQuery = "INSERT INTO tuition(Tid,Tname,Experience,Fee,Method,Location,Subject,Availability,Contact,Notes) VALUES ('$Id','$Name','$experience','$fee','$method','$location','$subject','$availability','$contact','$notes')";

    if ($conn->query($innerQuery) == True) {
        header("location: index.php");
    } else {
        echo "Error" . $conn->error;
    }
}
