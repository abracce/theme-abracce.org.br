<?php
/**
 * Custom post type
 */

$kr_parceiros = new KR_Custom_Posts(
	'partners',
	'Parceiro',
	'Parceiros',
	array( 'title', 'thumbnail' ),
	'groups',
	'',
	true
);
