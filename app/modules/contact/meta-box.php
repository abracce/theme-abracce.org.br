<?php
/**
 * Custom meta box
 */

$contact_metabox = new Odin_Metabox(
	'contact_metabox',
	'Contato',
	'contact',
	'normal',
	'high'
);

global $fields_meta;
$contact_metabox->set_fields($fields_meta);
