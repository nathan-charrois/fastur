<?php
namespace Fastur\Helper;

/**
 *  Prepare upload for imgur api.
 *
 *  @author nathancharrois@gmail.com
 */

    class Upload {

        /**
        *   @return imgur connection class.
        */
            protected $connection;

        /**
         *  @var string
         */
            protected $endpoint = "https://api.imgur.com/3";

        /**
         *  Constrcut
         *
         *  @param  $connection connection class.
         *  @param  $endpoint imgur api endpoint.
         */
            public function __construct($connection, $endpoint) {

                $this->connection = $connection;
                $this->endpoint = $endpoint;
            }

        /**
         *  Upload file.
         *
         *  @param  array  $image_data  the image and its meta data.
         */
            public function file($image_data = array()) {

                $filename = $image_data['tmp_name'];

                // Get file handle.
                $handle = fopen($filename, "r");

                // Read file.
                $data = fread($handle, filesize($filename));

                // Assign image data into array.
                $image_data = array('image' => base64_encode($data));

                // Access correct API method.
                $url = $this->endpoint . "/upload";

                // Return image data as array.
                return $this->connection->request($url, $image_data, "POST");
            }
    }