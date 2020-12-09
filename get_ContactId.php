<?php
require('./Database/connection.php');


$id = $_GET['id'];
$query = "SELECT * FROM contacts WHERE id='$id'" ;


if($result = mysqli_query($con,$query))
{
	$row = $result->fetch_assoc();
	$contact = [
      'nom' => $row['nom'],
      'tele' => $row['tele'],
      'id' => $row['id']
	];
echo json_encode($contact);
}

?>