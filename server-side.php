<?php
if (isset($_POST["new-word"])) {
    if ($_POST["new-word"] == "") {
        echo "Hello world!";
    } else {
        echo $_POST["new-word"];
    }
};
?>