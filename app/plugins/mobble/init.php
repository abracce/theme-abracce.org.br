<?php
/**
 * The init module
 */

define('MOBBLE_PATH', dirname(__FILE__));
define('MOBBLE_URL', PLUGINS_URL . '/mobble' );

if (!class_exists('Mobile_Detect')) {
	include( MOBBLE_PATH . '/mobile-detect.php' );
}

$useragent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : "";
$mobble_detect = new Mobile_Detect();
$mobble_detect->setDetectionType('extended');

include_once( MOBBLE_PATH . '/mobble.php' );
