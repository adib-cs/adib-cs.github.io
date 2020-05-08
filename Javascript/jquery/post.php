<?php

require '../app/conn.php';

$nama = $_POST['nama'];
$rt = $_POST['rt'];
$rw = $_POST['rw'];

$query = "INSERT INTO dusun (nama, RT, RW) VALUES ('$nama', $rt, $rw)";
$query1 = mysqli_query($conn, $query);