<?php
require('./Database/connection.php');

$id = $_GET['id'];
$query = "DELETE FROM contacts WHERE id ='$id'";


if($result = mysqli_query($con,$query))
{
$mess = ['delete' => true ];
echo json_encode($mess);
}
?>