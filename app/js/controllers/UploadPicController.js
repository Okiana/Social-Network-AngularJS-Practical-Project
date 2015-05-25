SocialNetwork.controller('MyCtrl', ['$scope', '$http', '$timeout', '$compile', 'Upload',
    function ($scope, $http, $timeout, $compile, Upload) {
        $scope.usingFlash = FileAPI && FileAPI.upload != null;


        $scope.$watch('files', function(files) {
            $scope.formUpload = false;
            if (files != null) {
                for (var i = 0; i < files.length; i++) {
                    $scope.errorMsg = null;
                    (function(file) {
                        upload(file);
                    })(files[i]);
                }
            }
        });

        $scope.uploadPic = function(files) {
            $scope.formUpload = true;
            if (files != null) {
                upload(files[0])
            }
        };

        function upload(file) {
            uploadUsingUpload(file);
        }

        function uploadUsingUpload(file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload' + $scope.getReqParams(),
                method: 'POST',
                headers: {
                    'my-header': 'my-header-value'
                },
                fields: {username: $scope.username},
                file: file,
                fileFormDataName: 'myFile'
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            });

        }
        angular.element(window).bind('dragover', function(e) {
            e.preventDefault();
        });


        $timeout(function(){
            $scope.accept = localStorage.getItem('accept'+ version) || 'image/*,audio/*,video/*';
            $scope.acceptSelect = localStorage.getItem('acceptSelect'+ version) || 'image/*,audio/*,video/*';
            $scope.$watch('capture+accept+acceptSelect+disabled+capture+multiple+allowDir', function() {
                localStorage.setItem('capture'+ version, $scope.capture);
                localStorage.setItem('accept'+ version, $scope.accept);
                localStorage.setItem('acceptSelect'+ version, $scope.acceptSelect);
                localStorage.setItem('disabled'+ version, $scope.disabled);
                localStorage.setItem('multiple'+ version, $scope.multiple);
                localStorage.setItem('allowDir'+ version, $scope.allowDir);
            });
        });
}]);
