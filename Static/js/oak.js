/* oak.js
 * nathancharrois@gmail.com
 *
 * todo: rewrite with module pattern.
 */

    $(function(){

        var dropzone = $('[data-event="dropzone"]');

        // Set interface.
        var setMode = function(name) {
            switch(name) {
                case 'select':
                    $('[data-mode="view"]').hide();
                    $('[data-mode="select"]').show();
                break;

                case 'upload':
                    $('[data-mode="select"]').hide();
                    $('[data-mode="upload"]').show();
                break;

                case 'view':
                case 'upload':
                    $('[data-mode="upload"]').hide();
                    $('[data-mode="view"]').show();
                break;
            }
        }

        // Render file.
        var render = function(file) {

            var file = JSON.parse(file);

            // Update URL.
            window.history.pushState('', '', '/2014/fastur/view/' + file.data.id);

            // Create and set image.
            var img = document.createElement('img');
            img.src = file.data.link;
            $('.image-view').append(img);

            // Set image size.
            var size = file.data.size / 1024;
            $('[data-update="file-size"]').html(size.toFixed(2) + ' KB');

            // Set image link
            $('[data-update="file-link"]').html(file.data.link);

            // Set text so user can copy.
            setupCopy(file.data.link);
        }

        // Upload via ajax.
        // todo: allow for multi file upload.
        var upload = function(file) {

            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var i;

            // Append file data to object.
            formData.append('files', file[0]);

            // Post with ajax.
            $.ajax({
                type: 'POST',
                url: '/2014/fastur/site/upload',
                processData: false,
                contentType: false,
                data: formData,
                beforeSend: function() {

                    // Change to upload interface.
                    setMode('upload');
                },
                success: function(imgurResponse) {

                    // Change to view interface.
                    setMode('view');

                    // Render the view.
                    render(imgurResponse);
                }
            });
        }


        // Set Copy
        var setupCopy = function(url) {

            $('.image-view').attr("data-clipboard-text", url)

            // Setup ZeroClipboard
            var client = new ZeroClipboard($('.image-view'));
        }


        // Send files to upload.
        dropzone.on("drop", function(event){
            event.preventDefault();
            dropzone.removeClass('active');

            var file = event.originalEvent.dataTransfer.files;
            upload(file);
        });

        $('input').change(function(event){
            var file = $('input')[0].files;
            upload(file);
        });


        // Browse for file.
        $('[data-event="select-file"]').click(function(){
            $('input').click();
        });


        // Get image URL.
        $('[data-event="get-url"]').click(function(){
            var test = $('.image-view').find('img').attr('src');

            console.log(test);
        });


        // Add / Remove hover classes.
        dropzone.on("dragover", function(){
            dropzone.addClass('active');
            return false;
        });

        dropzone.on("dragleave", function(){
            dropzone.removeClass('active');
            return false;
        });

        $('button').hover(function(){
            dropzone.toggleClass('active');
        });
    });