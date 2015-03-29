(function(window, $){
    'use strict';

    function Controller(config, view){
        this.config = config;
        this.view = view;
        this.index();
        this.subscriptions();
        this.uploader = new app.Component.Upload({
            path: this.config.path + '/site/upload/',
            dropzone: this.config.container,
            selectFileBtn: '[data-event="select-file"]'
        });
    }

    Controller.prototype.subscriptions = function() {
        var self = this;

        // Subscribe to Upload component events.
        $(self.config.container)

            .bind('upload/uploading', function() {
                self.upload();
            })

            .bind('upload/success', function(e, data) {
                self.displayImage(data);
            })

            .bind('upload/error', function() {
                console.log('An error has occured.');
            })
    }

    Controller.prototype.index = function() {
        var view = this.view;

        view.set('index', {
            data: {
                text: 'Drag & drop your image here <br /> or manually select them below.',
                buttonText: 'Select Images'
            }
        });

        view.render();
    }

    Controller.prototype.upload = function(){
        var view = this.view;

        view.set('upload', {});
        view.render();
    }

    Controller.prototype.displayImage = function(file) {
        var view = this.view;
        var data = file.data;
        view.set('displayImage', {
            data
        });

        view.render();
    }

    window.app = window.app || {};
    window.app.Controller = Controller;
})(window, jQuery);