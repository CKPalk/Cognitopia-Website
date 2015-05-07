<?php
$servername = "localhost";
$username = "cognit10_www";
$password = "foo123";
$dbname = "cognit10_main";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$input_name = $_POST['Name'];
echo $input_name;

/*
$sql = "INSERT INTO UserRequest (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
*/
$conn->close();
?>