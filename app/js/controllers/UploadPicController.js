SocialNetwork.controller('UploadPicController', ['$scope', '$http', '$timeout', '$compile', 'Upload',
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

        };

       angular.element(window).bind('dragover', function(e) {
            e.preventDefault();
        });

}]);
