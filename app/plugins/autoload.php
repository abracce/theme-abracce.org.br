<?php
/**
 * Starter all plugins
 */

global $kr_plugins;
if(count($kr_plugins) > 0) {
	foreach ($kr_plugins as $_plugin) {
		if(!empty($_plugin)) {
			include_once( PLUGINS_PATH . '/' . $_plugin . '/init.php' );
		}
	}
}
