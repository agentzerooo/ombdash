<?php
include('../includes/config.php');

session_start();



$name = '1';

    
$query="SELECT callerid, lastname, firstname, dob FROM callers WHERE callerid = '$name'";

//$query="SELECT callerid, lastname, firstname, dob FROM callers";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);


$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;	
		$catch = $row['callerid'];
		echo "<table><tr><td>First Name</td><td>" . $row['firstname'] . "</td></tr>";
			echo "<tr><td>Last Name</td><td>" . $row['lastname'] . "</td></tr>";
			echo "<tr><td>DOB</td><td>" . $row['dob'] . "</td></tr></table>";
	}
	echo $catch;
}
# JSON-encode the response

$json_response = json_encode($arr);

// # Return the response


//echo $json_response;
?>
