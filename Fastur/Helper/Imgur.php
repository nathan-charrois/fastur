<?php
namespace Fastur\Helper;

/**
 *  Imgur
 *
 *  @author nathan <nathancharrois@gmail.com>
 */
    class Imgur {

        /**
         *  @var string
         */
            protected $api_key = "";
            protected $api_secret = "";
            protected $api_endpoint = "https://api.imgur.com/3";
            protected $oauth_endpoint = "https://api.imgur.com/oauth2";

        /**
         *   @return imgur connection class.
         */
            protected $connection;

        /**
         *  Upload to imgur.
         */
            public function __construct($api_key, $api_secret) {

                // If api key and secret are not injected.
                if (!$api_key || !$api_secret) {

                    throw Exception("Please provided API key data");
                }

                $this->api_key = $api_key;
                $this->api_secret = $api_secret;
                $this->connection = new Connect($this->api_key, $this->api_secret);
            }

            public function upload() {

                $upload = new Upload($this->connection, $this->api_endpoint);

                return $upload;
            }
    }