<?php
namespace Fastur\Controller;

use Fastur\Lib\Controller;
use Fastur\Helper\Imgur;
use Fastur\Helper\Input;

/**
 *  Home Controller
 *
 *  @author nathan <nathancharrois@gmail.com>
 */
    class Home extends Controller {

        /**
         *  Index page.
         */
            public function index() {

                // If file has been posted.
                if(Input::exists('file')) {

                    // Connect to imgur.
                    $imgur = new Imgur(API_KEY, API_SECRET);

                    // Upload file.
                    $image = $imgur->upload()->file('/test/path', $_FILES['image']);

                    var_dump($image);
                }


                // Render layout and view files.
                $this->render('static/index', 'upload/index');
            }
    }