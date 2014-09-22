<?php
namespace Fastur\Helper;

/**
 *  Input Class
 *
 *  @author nathan <nathancharrois@gmail.com>
 */

    class Input{

        /**
         *  Check if post data exists.
         *
         *  @param $method   string
         */
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