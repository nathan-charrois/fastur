<?php
namespace Fastur\Helper;

class Input{

    public static function exists($method = 'post') {

        switch ($method) {
            case 'post':
                return (!empty($_POST)) ? true : false;
                break;
            case 'file':
                return (!empty($_FILES)) ? true : false;
                break;
            default:
                return false;
                break;
        }
    }
}