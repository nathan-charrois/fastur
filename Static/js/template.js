(function(window, $){
    'use strict';

    function Template() {
        // Containers
        this.interfaceContainer
        =       '<div class="interface">'
        +           '{{elements}}'
        +       '</div>';

        this.displayContainer
        =       '<div class="display">'
        +           '{{elements}}'
        +       '</div>';

        // Elements
        this.helpText
        =       '<h1 class="help-text margin-top-medium margin-bottom-large">'
        +           '{{text}}'
        +       '</h1>';

        this.selectImageButton
        =       '<button class="button button-primary" data-event="select-file">'
        +           '{{buttonText}}'
        +       '</button>';

        this.imageInfo
        =       '<div class="image-info">'
        +           '<div class="image-url" contenteditable>{{url}}</div>'
        +           '<span class="image-size">{{size}}</span>'
        +       '</div>';

        this.image
        =       '<img class="image" src="{{url}}">';

        // Graphics
        this.cloud
        =       '<div class="graphic-cloud margin-bottom-small">'
        +           '<i class="fa fa-cloud"></i>'
        +           '<i class="fa fa-refresh fa-spin"></i>'
        +       '</div>'
    }

    Template.prototype.initialState = function(data) {
        var template = this.interfaceContainer;
        var elements = this.helpText + this.selectImageButton;
        var text = data.text;
        var buttonText = data.buttonText;

        template = template.replace('{{elements}}', elements);
        template = template.replace('{{text}}', text);
        template = template.replace('{{buttonText}}', buttonText);

        return template;
    }

    Template.prototype.uploading = function() {
        var template = this.interfaceContainer;
        var elements = this.cloud + this.helpText;
        var text = 'Uploading file...';

        template = template.replace('{{elements}}', elements);
        template = template.replace('{{text}}', text);

        return template;
    }

    Template.prototype.displayImage = function(data) {

        var template = this.displayContainer;
        var elements = this.imageInfo + this.image;
        var url = data.link;
        var size = data.size / 1024;

        template = template.replace('{{elements}}', elements);
        template = template.replace(/{{url}}/g, url);
        template = template.replace('{{size}}', size.toFixed(2) + ' KB');

        return template;
    }

    window.app = window.app || {};
    window.app.Template = Template;
})(window, jQuery);