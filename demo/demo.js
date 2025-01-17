'use strict';

angular.module('KnobDemoApp', ['ui.knob'])
  .controller('knobCtrl1', function ($scope) {
    $scope.value = 65;
    $scope.trackValue = 80;
    $scope.options = {
      skin: {
        type: 'tron'
      },
      onEnd: function (v) {
        console.log('onEnd value: ' + v);
      },
      size: 300,
      unit: "%",
      barWidth: 40,
      trackColor: 'rgba(255,0,0,.1)',
      trackValueColor: 'rgba(255,0,0,.2)',
      prevBarColor: 'rgba(0,0,0,.2)',
      subText: {
        enabled: true,
        text: 'CPU used'
      },
      scale: {
        enabled: true,
        type: 'lines',
        width: 3
      },
      step: 5,
      displayPrevious: true
    };
  })
  .controller('knobCtrl2', function ($scope) {
    $scope.value = 5.4;
    $scope.options = {
      skin: {
        type: 'tron',
        width: 5,
        color: '#494B52',
        spaceWidth: 3
      },
      barColor: '#494B52',
      trackWidth: 30,
      barWidth: 30,
      textColor: '#494B52',
      step: 0.1,
      max: 10
    };
  })
  .controller('knobCtrl3', function ($scope) {
    $scope.value = 65;
    $scope.trackValue = 80;
    $scope.options = {
      unit: "%",
      readOnly: true,
      subText: {
        enabled: true,
        text: 'CPU used',
        color: 'gray',
        font: 'auto'
      },
      trackWidth: 40,
      barWidth: 25,
      trackColor: '#656D7F',
      trackValueColor: '#1B512D',
      barColor: '#2CC185'
    };
  })
  .controller('knobCtrl4', function ($scope) {
    $scope.value = 70;
    $scope.options = {
      displayPrevious: true,
      barCap: 25,
      trackWidth: 30,
      barWidth: 20,
      trackColor: 'rgba(255,0,0,.1)',
      prevBarColor: 'rgba(0,0,0,.2)',
      textColor: 'rgba(255,0,0,.6)'
    };
  })
  .controller('knobCtrl5', function ($scope) {
    $scope.value = 85;
    $scope.trackValue = 90;
    $scope.options = {
      scale: {
        enabled: true,
        type: 'lines',
        color: 'gray',
        width: 1,
        quantity: 20,
        height: 8
      },
      displayTrackValue: false,
      trackWidth: 30,
      barWidth: 30,
      step: 5,
      trackColor: 'rgba(52,152,219,.1)',
      trackValueColor: 'rgba(52,152,219,.3)',
      barColor: 'rgba(52,152,219,.5)'
    };
  })
  .controller('knobCtrl6', function ($scope) {
    $scope.value = 350;
    $scope.options = {
      min: -1000,
      max: 1000,
      barColor: '#5BC01E',
      trackColor: '#212121',
      trackWidth: 15,
      barWidth: 30
    };
  })
  .controller('knobCtrl7', function ($scope) {
    $scope.value = 65;
    $scope.options = {
      scale: {
        enabled: true,
        type: 'dots',
        color: 'rgba(255,0,0,.2)',
        width: 2,
        quantity: 50,
        spaceWidth: 10
      },
      trackWidth: 25,
      barWidth: 40,
      trackColor: 'rgba(0,0,0,.1)',
      dynamicOptions: true
    };
    $scope.changeOptions = function(){
      $scope.options = {
        trackColor: "#988CE0",
        barColor: "rgba(18,7,101,.5)"
      };
    };
  })
  .controller('knobCtrl8', function ($scope) {
    $scope.value = 65;
    $scope.options = {
      displayInput: false,
      animate: {
        enabled: true,
        duration: 2000,
        ease: 'linear'
      },
      trackColor: 'rgba(33,33,33,.2)',
      barColor: 'rgba(255,221,51,1)'
    };
  })
  .controller('knobCtrl9', function ($scope) {
    $scope.value = 65;
    $scope.trackValue = 15;
    $scope.options = {
      displayTrackValue: false,
      bgColor: '#2C3E50',
      trackWidth: 50,
      barWidth: 30,
      barColor: '#FFAE1A',
      trackValueColor: '#774E24',
      textColor: '#eee'
    };
  })
  .controller('knobCtrl10', function ($scope) {
    $scope.value = 65;
    $scope.trackValue = 80;
  })
  .controller('knobCtrl11', function ($scope) {
    $scope.value = 65;
    $scope.options = {
      startAngle: 90,
      endAngle: 180,
      displayPrevious: true,
      prevBarColor: 'rgba(255,0,0,.2)',
      trackColor: 'rgba(255,0,0,.2)',
      skin: {
        type: 'tron'
      },
      scale: {
        enabled: true,
        type: 'lines',
        width: 2,
        quantity: 5
      }
    };
  })
  .controller('knobCtrl12', function ($scope) {
    $scope.value = 256;
    $scope.options = {
      startAngle: 30,
      endAngle: 330,
      unit: 'MB',
      trackColor: "rgba(162,121,143,1)",
      barColor: 'rgba(102,0,204,.5)',
      trackWidth: 15,
      barWidth: 15,
      subText: {
        enabled: true,
        text: 'RAM used'
      },
      max: 1024
    };
  })

  .controller('knobCtrl13', function ($scope) {
    $scope.value = 5;
    $scope.options = {
      startAngle: -115,
      endAngle: 115,
      unit: '°C',
      trackWidth: 40,
      barWidth: 35,
      trackColor: '#656D7F',
      prevBarColor: 'rgba(0,0,0,.3)',
      displayPrevious: true,
      skin: {
        type: 'tron'
      },
      subText: {
        enabled: true,
        text: 'Outside'
      },
      rangesEnabled: true,
      ranges: [
        { min: -10,
          max: 0,
          barColor: "rgb(0,204,255)",
          textColor: "rgb(0,204,255)"},
        { min: 10,
          max: 20,
          barColor: "rgb(255,153,51)",
          textColor: "rgb(255,153,51)"},
        { min: 20,
          max: 40,
          barColor: "rgb(255,51,0)",
          textColor: "rgb(255,51,0)"},
        { min:  0,
          max: 10,
          barColor: "rgb(0,204,102)",
          textColor: "rgb(0,204,102)"},
        { min: -20,
          max: -10,
          barColor: "rgb(0,102,255)",
          textColor: "rgb(0,102,255)"}
      ],
      min: -20,
      max: 40
    };
  });

