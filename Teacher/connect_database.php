<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'tms';
$connect_db = new mysqli($host, $user, $password, $database);
if ($connect_db->connect_error) {
    echo "fail to connect database" . $connect_db->connect_error;
}
