<?php
/**
 *  index.php
 *
 *  data-event="dropzone"
 *  data-mode="select"
 *  data-mode="upload"
 *  data-mode="view"
 */
?>
    <div class="container" data-event="dropzone" data-mode="select">
        <div class="interface">
            <div class="interface-content">
                <h1 class="margin-bottom-large">
                    Drag &amp; drop your image here <br />
                    or manually select them below.
                </h1>
                <button class="button button-primary" data-event="select-file">
                    Select Images
                </button>
                <input type="file" class="hide" />
            </div>
        </div>
    </div>

    <div class="container hide" data-mode="upload">
        <div class="interface">
            <div class="interface-content">
                <div class="graphic-cloud">
                    <i class="fa fa-cloud"></i>
                    <i class="fa fa-refresh fa-spin"></i>
                </div>
                <h1 class="margin-top-medium">
                    uploading 1 file...
                </h1>
            </div>
        </div>
    </div>

    <div class="container hide" data-mode="view">
        <div class="image-view" data-clipboard-text="">
            <div class="image-info">
                <h1 data-update="file-link"></h1>
                <span data-update="file-size"></span>
            </div>
        </div>
    </div>