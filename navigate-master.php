<?php
/**
 * Navigate Master WordPress Plugin
 *
 * @package NavigateMaster
 *
 * Plugin Name: Navigate Master
 * Description: Simple Elementor plugin to navigate to a different section of a webpage
 * Plugin URI:  https://www.shibbir.dev
 * Version:     1.0.0
 * Author:      Shibbir Ahmed
 * Author URI:  https://www.shibbir.dev
 * Text Domain: navigate-master
 */

define( 'ELEMENTOR_NAVIGATEMASTER', __FILE__ );

/**
 * Include the Elementor_NaviageMaster class.
 */
require plugin_dir_path( ELEMENTOR_NAVIGATEMASTER ) . 'class-navigate-master.php';
