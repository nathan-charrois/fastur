(function(window, $){
    'use strict';

    function Uploader(config){
        this.uploadPath = config.path + '/site/upload/';
    }

    window.app = window.app || {};
    window.app.Component = window.app.Component || {};
    window.app.Component.Uploader = Uploader;
})(window, jQuery);