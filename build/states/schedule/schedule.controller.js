'use strict';

angular.module('fitFriend')

.controller('ScheduleCtrl', function($scope) {

  $scope.year = moment().format('YYYY');
  $scope.month = moment().format('MMMM');
  let today = moment().format('DD');
  let firstDayOfMonth = moment().date(1).format('dddd');
  let numFirstDayOfMonth = moment().date(1).format('d');
  let lengthOfMonth = moment().daysInMonth();
  let dayNum = '';
  let todayClass = '';

// MONTH VIEW
  let weekRow;
  for (let week=0; week<6; week++) {
    weekRow = angular.element(`<div id="week${week}" class="row week-in-month"></div>`)
    for (let day=0; day<7; day++) {
      if (week === 0 && day === numFirstDayOfMonth-1) dayNum = 1;
      todayClass = (dayNum == today) ? 'today-month' : '';
      weekRow.append(`<div class="day-in-week ${todayClass}"> ${dayNum} </div>`);
      if (dayNum === lengthOfMonth) dayNum = '';
      if (dayNum) dayNum++;
    }
    angular.element('.month-calendar').append(weekRow);
  }

// YEAR VIEW
  let yearCol;
  for (let week=0; week<53; week++) {
    yearCol = angular.element('<div class="week"></div>');
    for (let day=0; day<7; day++) {
      yearCol.append(`<div id="${week}${day}" class="day"></div>`);
    }
    angular.element('.year-view').append(yearCol);
  }

  $scope.prevMonth = function() {
    console.log(moment().subtract(1, 'month').format('MM'))
  };

  $scope.nextMonth = function() {
    console.log(moment().add(1, 'month').format('MM'))
  };

});