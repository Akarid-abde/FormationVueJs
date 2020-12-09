<?php

require('./Database/connection.php');
$data = file_get_contents("php://input");

$requist = json_decode($data);

$query = "INSERT INTO  contacts (nom,tele) VALUES('$requist->nom','$requist->tele')";
if(mysqli_query($con,$query))
{
	$contact = [
		"nom" => $requist->nom,
		"tele" => $requist->tele,
		"id" =>  mysqli_insert_id($con)
	];
echo json_encode($contact);
}

?>