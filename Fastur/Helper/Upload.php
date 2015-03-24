<?php
namespace Fastur\Helper;

class Upload {

    protected $connection;
    protected $endpoint = "https://api.imgur.com/3";

    /**
     * @param  $connection  connection class.
     * @param  $endpoint    imgur api endpoint.
     */
    public function __construct($connection, $endpoint) {
        $this->connection = $connection;
        $this->endpoint = $endpoint;
    }

    /**
     * Post file to imgur and get response.
     * @param  array  $image_data  the image and its meta data.
     * @return image data response from imgur.
     */
    public function file($image_data = array()) {

        // Prepare to send image file data.
        $filename = $image_data['tmp_name'];
        $handle = fopen($filename, "r");
        $data = fread($handle, filesize($filename));
        $image_data = array('image' => base64_encode($data));

        // Access correct API method.
        $url = $this->endpoint . "/upload";

        // Returns image data as array.
        return $this->connection->request($url, $image_data, "POST");
    }
}