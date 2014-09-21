<?php
namespace Fastur\Controller;

use Fastur\Lib\Controller;

/**
 *  Users Controller
 *
 *  @author nathan <nathancharrois@gmail.com>
 */
    class Upload extends Controller {

        /**
         *  Index page.
         */
            public function index() {

                // Render layout and view files.
                $this->render('static/index', 'upload/index');
            }
    }