'use strict';
app.controller('HomeController',['$scope', '$rootScope','$route','Users', function ($scope,$rootScope,$route,Users) {

    $scope.init = function(){
        var easyPieChartDefaults = {
            animate: 2000,
            scaleColor: false,
            lineWidth: 6,
            lineCap: 'square',
            size: 105,
            trackColor: '#e5e5e5'
        };
        angular.element('#easy-pie-chart-2').easyPieChart(easyPieChartDefaults);
        angular.element('.progress-bar').tooltip();
        getUserInformation();

    };

   function getUserInformation(){

       var users = Users.UserInfo.one().get().then(function(userResult){
           var analytics = Users.UserInfo.one(userResult.user.id).customGET('analytics').then(function(graphicResult){
               FillGraphic(graphicResult);
           });
       });

   };




   function getAnalyticsData(id){


       var param = id+'/analytics';
       var analytics = ApiRequest.Users.one('f58077f0-3084-012d-4d3f-123139068df2/analytics').get().then(function(Result){
           var Response = Result;
       });
/*        getApiUrlRequest.get().then(function(objUrl){

            var config = {
                    method: "GET",
                    contentType: "application/json",
                    base: 'f58077f0-3084-012d-4d3f-123139068df2/analytics.json',
                    isArray: false,
                    data:''
                },
                requestUrl= objUrl.baseURLv2+objUrl.request.Users+config.base;

            ApiRequest.doRequest(config,requestUrl).then(function(contentResponse){
                if(contentResponse.$resolved==true){
                    FillGraphic(contentResponse);
                }
            });
        });*/

    };

   function FillGraphic(graphicData){

        if(angular.isDefined(graphicData)){
            Morris.Line({
                element: 'hero-graph',
                data: graphicData.analytics,
                xkey: 'day',
                ykeys: ['total_questions'],
                labels: ['Total Questions:'],
                lineColors: ['#fff'],
                lineWidth: 2,
                pointSize: 4,
                gridLineColor: 'rgba(255,255,255,.5)',
                resize: true,
                gridTextColor: '#fff',
                xLabels: "day",
                xLabelFormat: function(d) {
                    return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'][d.getMonth()] + ' ' + d.getDate();
                }
            });
        }


    };

    $scope.setView= function(activeView){

        $rootScope.view =activeView;
        //$route.reload();
   };


}]);