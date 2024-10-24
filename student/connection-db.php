<?php
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'tms';
$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    echo "fail to connect db" . $conn->connect_error;
}
