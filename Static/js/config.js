(function(window, $){
    'use strict';

    function Config(config) {
        this.appName = 'Fastur',
        this.appTag = 'Faster imgur uploading.',
        this.path = '/2015/fastur',
        this.container = config.container;
        this.dropzone = config.dropzone;
    }

    window.app = window.app || {};
    window.app.Config = Config;
})(window, jQuery);