<?php


function up_register_block(){
    register_block_type(
        UP_PLUGIN_DIR . 'build/block.json'
    );
}