<?php
namespace Fastur\Controller;

use Fastur\Lib\Controller;
use Fastur\Helper\Imgur;
use Fastur\Helper\Input;

/**
 *  Site Controller
 *
 *  @author nathan <nathancharrois@gmail.com>
 */
    class Site extends Controller {

        /**
         *  Index page.
         */
            public function index() {

                // Render layout and view files.
                $this->render('static/index', 'site/index');
            }

        /**
         *  Upload.
         */
            public function upload() {

                // If file has been posted.
                if(Input::exists('file')) {

                    // Connect to imgur.
                    $imgur = new Imgur(API_KEY, API_SECRET);

                    // Upload file.
                    $image = $imgur->upload()->file($_FILES['files']);

                    var_dump($image);

                    return true;
                }
            }
    }