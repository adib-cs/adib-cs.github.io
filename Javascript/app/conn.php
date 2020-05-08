<?php
$dbHost = 'localhost';
$dbName = 'desa';
$dbUsername = 'adibpwd';
$dbPassword = 'sarirejo'; 

$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
$ok = var_dump((bool) $conn);
$i = 'hel';


// function query($query) {
//     return mysqli_query($conn, $query);
// }



