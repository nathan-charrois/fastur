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
                this.currentView = this.initialState;
            break;
            case 'wait':
                this.currentView = this.uploading;
            break;
        }
    }

    View.prototype.render = function() {
        return this.currentView();
    }

    View.prototype.initialState = function(data) {
        this.$container.append(this.template.initialState(this.data));
    }

    View.prototype.uploading = function() {
        console.log('Uploading...');
    }

    window.app = window.app || {};
    window.app.View = View;
})(window, jQuery);