<?php
if (isset($_POST['message'])) {
  $msg = strip_tags($_POST['message']);
  $msg = htmlspecialchars($msg);
  $msg = trim($msg);

  if (!empty($msg)) {
    $file = 'messages.txt';
    $time = date("H:i");
    $entry = "[$time] $msg\n";
    file_put_contents($file, $entry, FILE_APPEND | LOCK_EX);
  }
}
?>
