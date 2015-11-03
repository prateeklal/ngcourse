'use strict';

angular.module('ngcourse')

.controller('TaskListCtrl', function ($log, tasks) {

  var vm = this;
  vm.tasks = [];

  tasks.getTasks()
    .then(function(tasks) {
      vm.tasks = tasks;
      vm.numberOfTasks = tasks.length;
    })
    .then(null, $log.error);

});
