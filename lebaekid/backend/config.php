<?php
$host = "localhost";
$dbname = "lebaekid1_lebaek";
$username = "lebaekid1_user";
$password = "Sesuka@l3";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>