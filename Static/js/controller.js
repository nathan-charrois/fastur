(function(window, $){
    'use strict';

    function Controller(config, view){
        this.config = config;
        this.view = view;
        this.index();
    }

    Controller.prototype.index = function() {
        var uploader = new app.Component.Uploader(this.config);
        var view = this.view;

        view.set('index', {
            data: {
                text: 'Drag & drop your image here <br /> or manually select them below.',
                buttonText: 'Select Images'
            }
        });

        $(window).on('click', function() {
            view.set('wait', {});
            view.render();
        });

        view.render();
    }

    window.app = window.app || {};
    window.app.Controller = Controller;
})(window, jQuery);