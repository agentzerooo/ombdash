<?php
include('../includes/config.php');

session_start();



$name = 'gates';


//$query="SELECT callerid, lastname, firstname, dob FROM callers WHERE lastname ='$name'";
$query="SELECT callerid, lastname, firstname, dob FROM callers";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);



$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;	
	}
}
# JSON-encode the response
$json_response = json_encode($arr);

// # Return the response

echo $json_response;
?>
