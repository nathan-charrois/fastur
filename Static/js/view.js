(function(window, $){
    'use strict';

    function View(config, template) {
        this.$container = $(config.container);
        this.template = template;
        this.currentView = null;
        this.data = null;
    }

    View.prototype.set = function(view, content) {
        this.data = content.data;
        switch(view) {
            case 'index':
                this.currentView = this.index;
            break;
            case 'upload':
                this.currentView = this.upload;
            break;
            case 'displayImage':
                this.currentView = this.displayImage;
            break;
        }
    }

    View.prototype.render = function() {
        return this.currentView();
    }

    View.prototype.index = function(data) {
        this.$container.html(this.template.initialState(this.data));
    }

    View.prototype.upload = function() {
        this.$container.html(this.template.uploading());
    }

    View.prototype.displayImage = function() {
        this.$container.html(this.template.displayImage(this.data));
        selectElementContents(test);
    }

    window.app = window.app || {};
    window.app.View = View;
})(window, jQuery);