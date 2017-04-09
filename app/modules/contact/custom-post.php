<?php
/**
 * Custom post type
 */

$kr_contacts = new KR_Custom_Posts(
	'contact',
	'Contato',
	'Contato',
	array( 'title' ),
	'email-alt',
	'',
	true
);
