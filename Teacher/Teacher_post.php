<?php
include 'connect_database.php';
if (isset($_POST['signUp'])) {
    $teacher_name = $_POST['name'];
    $teacher_id = $_POST['teacher-id'];
    $experience = $_POST['experience'];
    $qualification = $_POST['qualification'];
    $fee = $_POST['fee'];
    $location = $_POST['location'];
    $teaching_style = $_POST['teaching-style'];
    $contact = $_POST['contact'];
    $interested_subject = $_POST['interested-subject'];
    $availability = $_POST['availability'];

    $innerQuery = "INSERT INTO teacher(Teacher_id,Teacher_name,Experience,Qualification,Fee,Location,Prefered_subject,Availability,Contact_details,Teaching_style) VALUES ('$teacher_id','$teacher_name','$experience','$qualification','$fee','$location','$interested_subject','$availability','$contact','$teaching_style')";

    if ($connect_db->query($innerQuery) == True) {
        header("location: Post.php");
    } else {
        echo "Error" . $connect_db->error;
    }
}
