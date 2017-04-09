<?php
/**
 * The Header for our theme.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <title><?php wp_title( '-', true, 'right' ); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="5_b3uRkZcKS5F9uJoFc3kEuRtcj6jLWJeNCqLStxhkU" />
    <?php wp_head(); ?>
  </head>
  <body <?php theme_body_id(); ?> <?php body_class(); ?>>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&appId=668905279849616&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

  	<!-- #main -->
  	<div id="main">

  		<!-- .header -->
      	<header class="header">

      		<!-- .main-container -->
      		<div class="main-container">

      			<div class="row">

  	    			<!-- .navbar -->
  	    			<nav class="col-md-12 navbar" role="navigation">

  						<div class="navbar-header">
  							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
  								<span class="icon-bar"></span>
  								<span class="icon-bar"></span>
  								<span class="icon-bar"></span>
  							</button>
  							<a class="navbar-brand logo" href="<?php echo home_url() ?>">
  								<img src="<?php echo THEME_URL ?>/assets/images/logo.png" class="img-responsive" alt="logo" title="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
  							</a>
  							<a class="navbar-brand" href="<?php echo home_url() ?>">
  								<?php echo get_bloginfo( 'name' ); ?>
  							</a>
  						</div>

  	    				<div class="collapse navbar-collapse">
  							<?php
  								wp_nav_menu(
  									array(
  										'theme_location' => 'main-menu',
  										'depth'          => 2,
  										'container'      => false,
  										'menu_class'     => 'nav navbar-nav navbar-right',
  										'fallback_cb'    => 'Odin_Bootstrap_Nav_Walker::fallback',
  										'walker'         => new Odin_Bootstrap_Nav_Walker()
  									)
  								);
  							?>
  						</div>

  	    			</nav>
  	    			<!-- /.navbar -->

  	    		</div>

          	</div>
      		<!-- /.main-container -->

          </header>
  		<!-- /.header -->

  		<div class="clearfix"></div>
