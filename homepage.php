<?php
/*
Template Name: Homepage
*/
?>

<?php get_template_part('templates/page', 'header'); ?>

<?php
    $posts = get_posts ("showposts=10");
    if ($posts) {
      foreach ($posts as $post):
        setup_postdata($post); ?>
        <a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
      <?php endforeach;
    }
  }
?>

<div class="post-container">
  <?php get_template_part('templates/content', 'page'); ?>
</div>