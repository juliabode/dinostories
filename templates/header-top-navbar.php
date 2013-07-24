<header class="banner navbar navbar-static-top" role="banner">
  <div class="navbar-inner">
    <div class="container">
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <a class="brand" href="<?php echo home_url(); ?>/">
        <?php bloginfo('name'); ?>
      </a>
      <nav class="nav-main alignright" role="navigation">
        <?php
          if (has_nav_menu('info_navigation')) :
            wp_nav_menu(array('theme_location' => 'info_navigation', 'menu_class' => 'nav nav-pills'));
          endif;
        ?>
      </nav>
    </div>
  </div>
</header>

<?php if (is_front_page()) echo do_shortcode( '[responsive_slider]' ); ?>

<div class="container">
  <nav class="nav-main" role="navigation">
    <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav'));
      endif;
    ?>
  </nav>
</div>