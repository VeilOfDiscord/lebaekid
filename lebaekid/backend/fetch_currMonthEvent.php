<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'config.php'; 
$sql = "SELECT id FROM calendarEvents WHERE date >= DATE_FORMAT(CURDATE(), '%Y-%m-01') AND status > 0 ORDER BY date ASC LIMIT 1";
$result = $conn->query($sql);
$first_entry_id = null;
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $first_entry_id = $row['id'];
}
echo json_encode(['id' => $first_entry_id]);

?>