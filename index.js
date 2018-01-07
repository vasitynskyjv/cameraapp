$(function(){
    var startCameraAbove = function(){
                CameraPreview.startCamera({
                toBack: false,
                tapPhoto: false
                });
                hideCamera();
    };

    var stopCamera = function(){
                setTimeout(function(){
                    CameraPreview.stopCamera()},
                    3000);
    };

    var hideCamera = function(){
                    setTimeout(function(){
                        CameraPreview.hide()
                    },100);
                    setTimeout(function(){
                        takePicture()},
                        1000);
    };

    var takePicture = function(){
                   setTimeout(function(){
                       CameraPreview.takePicture({
                           width : 640 ,
                           height : 640 ,
                           quality : 85
                       },
                       function ( base64PictureData ){
                            imageData = 'data:image/jpeg;base64,' + base64PictureData;
                            $(originalPicture).attr("src", imageData);
                       });
                   },1000);
                    stopCamera();
    };

    $(capturePhoto).on('click', startCameraAbove);
});
