/* oak.js
 * nathancharrois@gmail.com
 */

    $(function(){

        var dropzone = $('[data-event="dropzone"]'),
            interface = $('.interface-container');

        var upload = function(files) {

            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var i;

            // Loop through files array.
            for(i = 0; i < files.length; i = i + 1) {

                // Append file data to object.
                formData.append('files', files[i]);
            }

            // Post with ajax.
            $.ajax({
                type: 'POST',
                url: 'upload',
                processData: false,
                contentType: false,
                data: formData,
                success: function() {
                    console.log('Success');
                }
            });
        }

        dropzone.on("dragover", function(){
            interface.addClass('active');
            return false;
        });

        dropzone.on("dragleave", function(){
            interface.removeClass('active');
            return false;
        });

        dropzone.on("drop", function(event){
            event.preventDefault();
            interface.removeClass('active');
            upload(event.originalEvent.dataTransfer.files);
        });
    });