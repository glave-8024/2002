<?php

$user = $_POST['user'];
$pass = $_POST['pass'];

if ($user === 'hgx' && $pass === '8024') {
    echo '{"err":"0","msg":"登录成功"}';
} else {
    echo '{"err":"-1","msg":"账号或密码错误"}';
}
?>