<?php

require('./Database/connection.php');
$data = file_get_contents("php://input");

if(isset($data) && !empty($data)){

$requist = json_decode($data);

$query = "UPDATE  contacts SET nom='$requist->nom' ,tele='$requist->tele' WHERE id ='$requist->id'";
if(mysqli_query($con,$query))
{
	$contact = [
		"nom" => $requist->nom,
		"tele" => $requist->tele,
		"id" =>  $requist->id
			];
echo json_encode($contact);
}
}
?>