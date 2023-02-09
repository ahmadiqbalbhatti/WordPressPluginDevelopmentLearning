<?php

/*
Plugin Name: Udemy Plus
Plugin URI: http://ahmadiqbalbhatti.com
Description: A new plugin created for learning and practice
Version: 1.0.0
Author: Ahmad Iqbal Bhatti
Author URI: http://ahmadiqbalbhatti.com
*/

if (!function_exists('add_action')){
    echo 'I think you are stumbled here by accident';
    exit;
}


// Setup
define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));


// Includes
include(UP_PLUGIN_DIR . 'includes/register-blocks.php');
// Hooks
add_action('init', 'up_register_block');