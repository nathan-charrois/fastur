<?php
/**
 *  Static Layout.
 */
    echo $this->view('_templates/header', $data);

    echo $data['view_content'];

    echo $this->view('_templates/footer', $data);
?>