<html>
<head>
<title>Search</title>
<style>
body{
background-color: lightblue;
margin: 10px;
}
table{
padding: 10px;
border: 10px solid skyblue;
border-spacing: 5px;
font-size: 20px;
color: white;
text-align: center;
width: 100%;
}
th, tr, td{
background-color: powderblue;
border-radius: 10px;
border: 5px solid lightblue;
}
form{
font-size: 20px;
color: white;
font-family: "Calibri Light";
border: 10px;
border-radius: 25px;

}
</style>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database_leynes";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<form method="post">
    <input type="text" name="search" placeholder="Search..."/>
    <input type="submit" name="searchBtn" value="Search"/>
</form>

<?php

$search_query = "";
if (isset($_POST['search'])) {
    $search_query = $_POST['search'];
}

$sql = "SELECT * FROM basic_profile WHERE 1 = 1 AND name LIKE '%$search_query%' OR surname LIKE '%$search_query%' OR age LIKE '%$search_query%' OR birthday LIKE '%$search_query%' OR city LIKE '%$search_query%'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>Name</th><th>Surname</th><th>Birthday</th><th>Age</th><th>City</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>" . $row["surname"] . "</td>";
        echo "<td>" . $row["birthday"] . "</td>";
        echo "<td>" . $row["age"] . "</td>";
        echo "<td>" . $row["city"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();

?>

</body>
</html>