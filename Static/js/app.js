(function($){
    'use strict';

    function Fastur(config){
        this.config = new app.Config(config);
        this.template = new app.Template();
        this.view = new app.View(this.config, this.template);
        this.controller = new app.Controller(this.config, this.view);
    }

    $(document).ready(function(){
        new Fastur({
            container: '.container',
            dropzone: '[data-event="dropzone"]'
        });
    });
})(jQuery);