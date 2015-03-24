(function(window, $){
    'use strict';

    function Template() {
        this.interfaceContainer
        =       '<div class="interface">'
        +           '{{elements}}'
        +       '</div>';

        this.helpText
        =       '<h1 class="help-text">'
        +           '{{text}}'
        +       '</h1>';

        this.selectImageButton
        =       '<button class="button button-primary" data-event="select-file">'
        +           '{{buttonText}}'
        +       '</button>'
        +       '<input class="hide" type="file">';
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

    window.app = window.app || {};
    window.app.Template = Template;
})(window, jQuery);