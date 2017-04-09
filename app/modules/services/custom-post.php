<?php
/**
 * Custom post type
 */

$kr_services = new KR_Custom_Posts(
	'services',
	'Serviço',
	'Serviços',
	array( 'title', 'editor', 'thumbnail' ),
	'feedback',
	'servico',
	true
);
