'use strict';

angular.module('fitFriend').controller('ScheduleCtrl', function ($scope) {

  $scope.year = moment().format('YYYY');
  $scope.month = moment().format('MMMM');
  var today = moment().format('DD');
  var firstDayOfMonth = moment().date(1).format('dddd');
  var numFirstDayOfMonth = moment().date(1).format('d');
  var lengthOfMonth = moment().daysInMonth();
  var dayNum = '';
  var todayClass = '';

  // MONTH VIEW
  var weekRow;
  for (var week = 0; week < 6; week++) {
    weekRow = angular.element('<div id="week' + week + '" class="row week-in-month"></div>');
    for (var day = 0; day < 7; day++) {
      if (week === 0 && day === numFirstDayOfMonth - 1) dayNum = 1;
      todayClass = dayNum == today ? 'today-month' : '';
      weekRow.append('<div class="day-in-week ' + todayClass + '">' + dayNum + '</div>');
      if (dayNum === lengthOfMonth) dayNum = '';
      if (dayNum) dayNum++;
    }
    angular.element('.month-calendar').append(weekRow);
  }

  // YEAR VIEW
  var yearCol;
  for (week = 0; week < 53; week++) {
    yearCol = angular.element('<div class="week"></div>');
    for (day = 0; day < 7; day++) {
      yearCol.append('<div id="' + week + day + '" class="day"></div>');
    }
    angular.element('.year-view').append(yearCol);
  }

  $scope.prevMonth = function () {
    console.log(moment().subtract(1, 'month').format('MM'));
  };

  $scope.nextMonth = function () {
    console.log(moment().add(1, 'month').format('MM'));
  };
});