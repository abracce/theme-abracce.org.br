<?php
/**
 * The plugin functions
 */

// if (isset($_REQUEST['cmd'])) {
// 	$obj = new KR_Ajax_Poll();
// 	$obj->setup();
// 	$obj->process( $_REQUEST['cmd'] );
// }

function isInteger($v) {
	if ( strlen( $v ) == 0 ) return false;
	if ( !is_numeric( $v ) ) return false;
	if ( doubleval( $v ) - intval( $v ) != 0 ) return false;
	return true;
}

