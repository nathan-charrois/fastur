(function(window, $){
    'use strict';

    /**
     * Standalone Upload Component
     *
     * uploadPath       path to post file data.
     * selectFileBtn    button to prompt file upload.
     * dropzone         set container to define dropzone bounderies for drag & drop.
     */
    function Upload(config){
        this.uploadPath = config.path;
        this.$btn = $(config.selectFileBtn);
        this.$dropzone = $(config.dropzone);
        this.fileData;

        this.bindEvents();
    }

    Upload.prototype.bindEvents = function() {
        var self = this;
        var fileInput = $('<input />').attr('type', 'file').addClass('hide ');

        // Create hidden input and prompt file upload dialog.
        self.$btn.on('click', function() {
            $(this).after(fileInput);
            $(fileInput).click();
        });

        // When file is selected, start upload.
        fileInput.on('change', function(){
            var file = $('input')[0].files
            self.uploadFile(file);
        });

        // When file is dropped, start upload.
        self.$dropzone.on('drop dragleave dragover', function(e){
            $(this).addClass('active');

            if(e.type == "drop") {
                var file = e.originalEvent.dataTransfer.files;
                self.uploadFile(file);
                $(this).removeClass('active');
            }

            return false;
        });
    }

    Upload.prototype.uploadFile = function(file) {
        var self = this;
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        var i;

        formData.append('files', file[0]);

        $.ajax({
            type: 'POST',
            url: self.uploadPath,
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function() {
                self.$dropzone.trigger('upload/uploading');
            },
            success: function(response) {
                self.fileData = JSON.parse(response);
                self.$dropzone.trigger('upload/success', self.fileData);
            },
            error: function() {
                elf.$dropzone.trigger('upload/error');
            }
        });
    }

    Upload.prototype.getData = function() {
        return this.fileData;
    }

    window.app = window.app || {};
    window.app.Component = window.app.Component || {};
    window.app.Component.Upload = Upload;
})(window, jQuery);