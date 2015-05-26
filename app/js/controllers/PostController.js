'use strict';

SocialNetwork.controller('postController',
    function($scope, $location, $route, $routeParams, postService, userService, notifyService){

        $scope.username = userService.GetUsername();
        $scope.commentsClicked = {};
        $scope.showCommentsClicked = {};
        $scope.news = [];
        $scope.userPosts = [];


        $scope.getNewsFeed = function() {
            if(!$scope.newsLastPostReached) {
                postService.getNewsFeed($scope.startPostId, $scope.pageSize, userService.GetHeaders(),
                    function(data) {
                    $scope.news.push.apply($scope.news, data);
                    $scope.startPostId = data[data.length - 1].id;

                    }, function(error){
                        console.log(error);
                    }
                )
            }
        };

        $scope.getNewsFeed();

        $scope.addPost = function () {
            $scope.postData.username = $routeParams.username;
            postService.addPost($scope.postData, userService.GetHeaders(),
                function() {
                    notifyService.showInfo("Successful Ad Publish!");
                    $route.reload();
                },
                function (serverError) {
                    notifyService.showError("Unsuccessful Ad Publish!", serverError)
                })
        };

        $scope.addCommentToPost = function(post) {
            postService.addCommentToPost(post.id, $scope.commentData, userService.GetHeaders(),
                function(data) {
                    post.comments.unshift(data);
                    $scope.commentData = {};
                },
                function(serverError){
                    console.log(serverError);
                })
        };

        $scope.editPost = function (post) {
            postService.editPost(post.id, post, userService.GetHeaders(),
                function() {
                    $route.reload();
                },
                function (serverError) {
                    console.log(serverError);
                })
        };

        $scope.deletePost = function (post) {
            postService.deletePost(post.id, userService.GetHeaders(),
                function() {
                    $scope.userPosts = {};
                    getUserPosts();
                },
                function (serverError) {
                    console.log(serverError);
                })
        };

        $scope.likePost = function(post) {
            postService.likePost(post.id, userService.GetHeaders(),
                function() {
                    post.liked = true;
                    post.likesCount++;
                },
                function(serverError) {
                    console.log(serverError);
                }
            )
        };

        $scope.unlikePost = function(post) {
            postService.unlikePost(post.id, userService.GetHeaders(),
                function() {
                    post.liked = false;
                    post.likesCount--;
                },
                function(serverError) {
                    console.log(serverError);
                }
            )
        };

        $scope.deleteCommentOnPost = function(post, comment) {
            postService.deleteCommentOnPost(comment.id, post.id, userService.GetHeaders(),
                function() {
                    var commentIndex = post.comments.indexOf(comment);
                    post.comments.splice(commentIndex, 1);
                }, function(error) {
                    console.log(error);
                }
            )
        };

        $scope.editCommentOnPost = function(post, comment) {
            postService.editCommentOnPost(comment.id, post.id, comment, userService.GetHeaders(),
                function() {
                    $route.reload();
                }, function(error) {
                    console.log(error);
                }
            )
        };

        $scope.likeCommentOnPost = function(postId, comment) {
            postService.likeCommentOnPost(comment.id, postId, userService.GetHeaders(),
                function() {
                    comment.liked = true;
                    comment.likesCount++;
                }, function(error) {
                    console.log(error);
                }
            )
        };

        $scope.unlikeCommentOnPost = function(postId, comment) {
            postService.unlikeCommentOnPost(comment.id, postId, userService.GetHeaders(),
                function() {
                    comment.liked = false;
                    comment.likesCount--;
                }, function(error) {
                    console.log(error);
                }
            )
        };

        $scope.showAllCommentsOnPost = function(post) {
            postService.showAllCommentsOnPost(post.id, userService.GetHeaders(),
                function(data){
                    post.comments = data;
                    post.comments.forEach(function(comment) {
                        $scope.getCommentDetailedLikes(post, comment);
                    });
                    $scope.showCommentsClicked[post.id] = true;
                }, function(error){
                    console.log(error);
                }
            )
        };

        $scope.hideAllCommentsOnPost = function(post) {
            post.comments = post.comments.slice(0, 3);
            $scope.showCommentsClicked[post.id] = false;
        };

        $scope.getPostDetailedLikes = function(post) {
            postService.getPostDetailedLikes(post.id, userService.GetHeaders(),
                function(data) {
                    post.detailedLikes = data;
                }, function(error) {
                    console.log(error);
                }
            )
        };

        $scope.getCommentDetailedLikes = function(post, comment) {
            postService.getCommentDetailedLikes(post.id, comment.id, userService.GetHeaders(),
                function(data) {
                    comment.detailedLikes = data;
                }, function(error) {
                    console.log(error);
                }
            )
        };

        $scope.showDetailedLikes = function() {
            $scope.postDetailedLikesClicked = true;
        };


        $(document).ready(function(){
            function addMoreNews() {
                $scope.getNewsFeed();
            }

            function addMorePosts() {
                getUserPosts();
            }

            //lastAddedLiveFunc();
            $(window).scroll(function(){

                var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
                var  scrolltrigger = 0.95;

                if  ((wintop/(docheight-winheight)) > scrolltrigger) {
                    addMoreNews();
                    addMorePosts();
                }
            });
        });
    });