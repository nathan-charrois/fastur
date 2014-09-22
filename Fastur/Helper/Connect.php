<?php
namespace Fastur\Helper;

/**
 *  Connect to imgur api.
 *
 *  @author nathan <nathancharrois@gmail.com>
 */

    class Connect {

        /**
         *  @var array
         */
            protected $options;

        /**
         *  @var string
         */
            protected $api_key;
            protected $api_secret;
            protected $api_endpoint;
            protected $access_token;
            protected $refresh_token;

        /**
         *  Connect to imgur oauth api.
         *
         *  @var string
         */
            protected $oauth = "https://api.imgur.com/oauth2";

        /**
         *  Set api key and secret on Construct.
         */
            public function __construct($api_key, $api_secret) {

                $this->api_key = $api_key;
                $this->api_secret = $api_secret;
            }

        /**
         *  Request imgur api endpoint.
         *
         *  @param  string $endpoint   imgur api endpoint
         *  @param  array  $image_data image_data
         */
            public function request($endpoint, $image_data = FALSE, $type = "GET") {

                // Set API key as header.
                $headers = array('Authorization: CLIENT-ID ' . $this->api_key);

                $curl = curl_init();

                curl_setopt($curl, CURLOPT_URL, $endpoint);
                curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
                curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 30);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
                curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $type);
                curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

                if ($image_data) {

                    curl_setopt($curl, CURLOPT_POSTFIELDS, $image_data);
                }

                if (($data = curl_exec($curl)) === FALSE) {

                    throw new Exception(curl_error($curl));
                }

                curl_close($curl);

                return json_decode($data, true);
            }
    }