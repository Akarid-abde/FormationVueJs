<?php
require('./Database/connection.php');
$query = "SELECT * FROM contacts";


if($result = mysqli_query($con,$query))
{
	$contacts = [];
	$i=0;
while ($row = $result->fetch_assoc())
{
	$contacts[$i]['id'] = $row['id'];
	$contacts[$i]['nom'] = $row['nom'];
	$contacts[$i]['tele'] = $row['tele'];
	$i++;
}
echo json_encode($contacts);
}

?>