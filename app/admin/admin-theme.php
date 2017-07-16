<?php

class KR_Admin_Theme
{
	public function __construct()
    {
		add_action( 'admin_head', array( $this, 'kr_disable_admin_color_scheme' ) );
		add_action( 'personal_options', array( $this,'kr_remove_personal_options') );
		add_action( 'admin_enqueue_scripts', array( $this, 'kr_admin_enqueue_assets' ) );
		add_action( 'login_enqueue_scripts', array( $this, 'kr_login_enqueue_assets' ) );
		add_action( 'admin_bar_menu', array( $this, 'visite_site_admin_bar_menu'), 1000 );
		add_filter( 'get_user_option_screen_layout_dashboard', array( $this, 'kr_so_screen_layout_dashboard' ) );
		add_action( 'wp_before_admin_bar_render', array($this, 'kr_admin_adminbar_remove_logo') );
		add_filter( 'login_headerurl', array($this, 'kr_admin_logo_url' ) );
		add_filter( 'login_headertitle', array($this, 'kr_admin_logo_title' ) );
		remove_action( 'welcome_panel', 'wp_welcome_panel');
	}

	public function kr_disable_admin_color_scheme()
    {
		global $_wp_admin_css_colors;
		$_wp_admin_css_colors = 0;
	}

	public function kr_remove_personal_options()
    {
	?>
	<script type="text/javascript">
		jQuery(document).ready(function(){
			jQuery("#your-profile .form-table:first, #your-profile h3:first").remove();
		});
	</script>
	<?php
	}

	/**
	 * Custom admin style
	 */
	public function kr_admin_enqueue_assets()
    {
		wp_enqueue_style( 'vr-admin', ADMIN_THEME_URL . '/assets/css/admin.css', array(), null, 'all' );
	}

	/**
	 * Custom login style
	 */
	public function kr_login_enqueue_assets()
    {
		wp_enqueue_style( 'vr-login', ADMIN_THEME_URL . '/assets/css/login.css' );
	}

	public function visite_site_admin_bar_menu()
    {
	    global $wp_admin_bar;

	    if ( !is_super_admin() || !is_admin_bar_showing() )
	        return;

	    $wp_admin_bar->add_menu(
	    	array(
				'id'    => 'site-name',
				'title' => 'Visitar site',
				'href'  => get_home_url(),
				'meta'  => array( 'title' => 'Visitar site',  'target' => '_blank' )
			)
		);
	}

	public function kr_admin_adminbar_remove_logo()
    {
		global $wp_admin_bar;
		$wp_admin_bar->remove_menu( 'wp-logo' );
	}


	/**
	 * Custom logo URL.
	 */
	public function kr_admin_logo_url()
    {
		return home_url();
	}

	/**
	 * Custom logo title.
	 */
	public function kr_admin_logo_title()
    {
		return get_bloginfo( 'name' );
	}
}

new KR_Admin_Theme;
