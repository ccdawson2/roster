angular.module('app').controller('DailyRosterCtrl', ['$scope', '$timeout', 'weeklySchedulerLocaleService', '$log',
    
    function ($scope, $timeout, localeService, $log) {

      $scope.title = "Daily Roster";

      $scope.model = {
        locale: localeService.$locale.id,
        options: {},
        items: [{}] 
      };
	  
        $scope.model.items = $scope.model.items.concat([{
          label: 'Item d2',
          schedules: [
            {start: moment('2016-05-03').toDate(), end: moment('2017-02-01').toDate()},
            {start: moment('2015-11-20').toDate(), end: moment('2016-02-01').toDate()}
          ]
        }, {
          label: 'Item d3',
          schedules: [
            {start: moment('2017-08-09').toDate(), end: moment('2017-08-21').toDate()},
            {start: moment('2017-09-12').toDate(), end: moment('2017-10-12').toDate()}
          ]
        }]);

      this.doSomething = function (itemIndex, scheduleIndex, scheduleValue) {
        $log.debug('The model has changed!', itemIndex, scheduleIndex, scheduleValue);
      };

      this.onLocaleChange = function () {
        $log.debug('The locale is changing to', $scope.model.locale);
        localeService.set($scope.model.locale).then(function ($locale) {
          $log.debug('The locale changed to', $locale.id);
        });
      };
    }]);


