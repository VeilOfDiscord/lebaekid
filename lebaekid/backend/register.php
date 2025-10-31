<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$name = $data['name'];
$location = $data['location'];
$bike_type = $data['bike_type'];
$date = $data['date'];
$link = $data['link'];
$distance = $data['distance'];

$sql = "INSERT INTO calendarEvents (id, name, location, bike_type, date, link, distance) VALUES (:id, :name, :location, :bike_type, :date, :link, :distance)";
$stmt = $conn->prepare($sql);
$stmt->execute(['name' => $name, 'id' => $id,'location' => $location,'bike_type' => $bike_type,'date' => $date,'link' => $link,'distance' => $distance]);

echo json_encode(["message" => "User registered successfully"]);
?>