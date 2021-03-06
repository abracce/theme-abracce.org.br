<?php
/**
 * Custom shortcodes
 */

function kr_form_shortcode( $atts ){
	extract(shortcode_atts(array(
		'form' => 'kr_contact_form',
	), $atts));

	if(function_exists( $form )) {
		return $form()->render();
	}
	else {
		return false;
	}

}
add_shortcode( 'kr_form', 'kr_form_shortcode' );

