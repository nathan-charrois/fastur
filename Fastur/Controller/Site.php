<?php
namespace Fastur\Controller;

use Fastur\Lib\Controller;
use Fastur\Helper\Imgur;
use Fastur\Helper\Input;


class Site extends Controller {

    public function index() {
        $this->render('Static/index', 'site/index');
    }

    public function upload() {

        if(Input::exists('file')) {

            // Connect and upload to imgur.
            $imgur = new Imgur(API_KEY, API_SECRET);
            $image = $imgur->upload()->file($_FILES['files']);

            echo json_encode($image);
        }
    }
}