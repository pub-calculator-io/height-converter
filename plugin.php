<?php
/*
Plugin Name: Height Converter by Calculator.iO
Plugin URI: https://www.calculator.io/height-converter/
Description: With the height converter tool, you can easily convert height to cm. Convert between US units and metric units.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_height_converter
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Height Converter by Calculator.iO";

function display_ci_height_converter(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/height-converter/" target="_blank"><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48"></a> Height Converter</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_height_converter_iframe"></iframe></div>';
}

add_shortcode( 'ci_height_converter', 'display_ci_height_converter' );