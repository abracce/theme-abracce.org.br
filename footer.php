<?php
/**
 * The template for displaying the footer.
 */
?>

    <div class="clearfix"></div><!-- /clearfix -->

    <div class="gototop">
      <a href="#"><i class="icon icon-chevron-up"></i></a>
    </div>

    <!-- .footer -->
    <footer class="footer">
      <span class="line top"></span>

      <!-- .main-container -->
      <div class="main-container">

        <div class="row">
          <div class="col-md-8">
            <p class="text-muted">
              &copy;2014 <?php bloginfo( 'name' ); ?>. Desevolvido por <a href="http://nandomoreira.me/" target="_blank">Nando Moreira</a>.
              <a href="https://app.umbler.com/u/mzkqd8j2" style="display:inline-block; margin-left: 15pxs;">
                <img src="https://static.umbler.com/brand/umbler-badges/umbler-badge-hostedby-dark-bg-mono.png" width="60px" alt="Hosted by Umbler" style="display:inline-block">
              </a>
            </p>
          </div>

          <div class="col-md-4">
            <?php
              wp_nav_menu(
                array(
                  'theme_location' => 'footer-menu',
                  'depth'          => 2,
                  'container'      => false,
                  'menu_class'     => 'nav-footer list-inline pull-right',
                  'fallback_cb'    => 'Odin_Bootstrap_Nav_Walker::fallback',
                  'walker'         => new Odin_Bootstrap_Nav_Walker()
                )
              );
            ?>
          </div>
        </div>

      </div>
      <!-- /.main-container -->

      <span class="line bottom"></span>
    </footer>
    <!-- /.footer -->

    <div class="clearfix"></div><!-- /clearfix -->
    </div>
    <!-- /#main -->

<?php wp_footer(); ?>
</body>
</html><!-- by @umdevUX -->
