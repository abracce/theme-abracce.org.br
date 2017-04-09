<?php
/**
 * Custom post type
 */

$kr_banners = new KR_Custom_Posts(
	'banners',
	'Banner',
	'Banners',
	array( 'title', 'thumbnail' ),
	'images-alt',
	'',
	true
);
