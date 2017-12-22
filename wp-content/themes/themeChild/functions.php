<?php
// Conectar la carpeta tourChildren con twentyseventeen
/*
 Theme Name:   Tours Child
 Description:  Tours Child
 Author:       Kim Quiros
 Template:     twentyseventeen
 Version:      1.0.0
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Tags:         light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready
 Text Domain:  Tours
*/


// Conectar hoja de estilos 

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Conectar JS script
function custom_scripts() {
 	wp_register_script( 'jquery-script', get_stylesheet_directory_uri() . '/js/jquery.min.js', array(), false );
 	wp_enqueue_script( 'jquery-script' );
 	wp_register_script( 'custom-script', get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array(), false );
 	wp_enqueue_script( 'custom-script' );
}

 add_action( 'wp_enqueue_scripts', 'custom_scripts', 99 );