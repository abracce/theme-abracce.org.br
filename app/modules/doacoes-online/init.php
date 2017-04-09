<?php
/**
 * The init module
 */

// include functions
include_once 'functions.php';

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['doacao_abracce']) && $_POST['doacao_abracce'] === 'yes') {
	abracce_pagseguro();
}
