// $(document).ready(function (currentData) {

// var chartData = [];
// chartData[0] = [63, 83, 36, 90, 43, 125, 67]; //студии
// chartData[1] = [80, 111, 44, 90, 45, 125, 110]; // 1к
// chartData[2] = [45, 58, 87, 23, 95, 41, 54]; // 2к
// chartData[3] = [80, 88, 75, 148, 95, 125, 46]; // 3к
// chartData[4] = [6, 32, 5, 90, 95, 125, 110]; // 4к
// chartData[5] = [11, 83, 75, 90, 95, 125, 30]; //5+к

// var currentData = [80, 111, 44, 90, 45, 125, 110];

// var btn = document.querySelectorAll('.chart__btn');

// for(var i = 0; i < btn.length; i++){
//   $(btn[i]).attr('data-item', i);
// }

// $(btn).on('click', function () {
//   var number = $(this).attr('data-item');
//   currentData = chartData[number];

//   $('.chart__btn--active').removeClass('chart__btn--active');
//   $(this).addClass('chart__btn--active');

//   fillChart(currentData);
// });


// var fillChart = function (currentData) {

//   var ctx = document.getElementById('myChart').getContext('2d');
//   var dataLabels = ['нояб’18', 'дек’18', 'янв’19', 'фев’19', 'март’19', 'апр’19',
//     'май’19'
//   ]; //  массив для изменяемыхданных

//   // console.log(currentData);

//   var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//       labels: dataLabels,
//       datasets: [{
//         label: '',
//         backgroundColor: 'rgba(233,70,70, 0.1)',
//         borderColor: 'rgb(233,70,70)',
//         borderWidth: 1,
//         pointHoverBackgroundColor: 'rgb(233,70,70)',
//         spanGaps: true,
//         data: currentData
//       }]
//     },

//     // Configuration options go here
//     options: {
//       legend: {
//         display: false
//       },
//       tooltips: {
//         backgroundColor: '#7be37b',
//         bodyFontSize: 16,
//         bodyFontColor: '#fefcfc',
//       },
//       scales: {
//         xAxes: [{
//           gridLines: {
//             display: false
//           }
//         }],
//         yAxes: [{
//           scaleLabel: {
//             display: true
//           },
//           ticks: {
//             min: 0,
//             max: 150,
//             stepSize: 25
//           }
//         }]
//       }
//     }
//   });
// }

// fillChart(currentData);
// });


;
(function () {
  $(document).ready(function () {
    let chartData = [];
    chartData['studio'] = [63, 83, 36, 90, 43, 125, 67]; //студии
    chartData['1'] = [80, 111, 44, 90, 45, 125, 110]; // 1к
    chartData['2'] = [45, 58, 87, 23, 95, 41, 54]; // 2к
    chartData['3'] = [80, 88, 75, 148, 95, 125, 46]; // 3к
    chartData['4'] = [6, 32, 5, 90, 95, 125, 110]; // 4к
    chartData['5'] = [11, 83, 75, 90, 95, 125, 30]; //5+к

    var ctx = document.getElementById('myChart').getContext('2d');
    var dataLabels = ['нояб’18', 'дек’18', 'янв’19', 'фев’19', 'март’19', 'апр’19', 'май’19'];
    var data = [];
    for (let i = 0; i < chartData['2'].length; i++) {
      const element = chartData['2'][i];
      data.push(element);
    }

    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataLabels,
        datasets: [{
          label: '',
          backgroundColor: 'rgba(233,70,70, 0.1)',
          borderColor: 'rgb(233,70,70)',
          borderWidth: 2,
          pointHoverBackgroundColor: 'rgb(233,70,70)',
          pointBackgroundColor: '#fff',
          spanGaps: true,
          data: data,
          pointRadius: 7,
          pointHoverRadius: 7,
          pointHitRadius: 7,
          
        }]
      },

      options: {
        bezierCurve : false,
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        tooltips: {
          // backgroundColor: '#7be37b',
          // bodyFontSize: 16,
          // bodyFontColor: '#fefcfc',
          // yAlign: 'bottom',
          // xPadding: 12,
          // // yPadding: 10,
          // intersect: false,
          // mode: 'point',
          // displayColors: false,
          // callbacks: {
          //   label: function(tooltipItem) {
          //       return Number(tooltipItem.yLabel);
          //   },
          //   title: function (tooltipItem) {
          //     return false;
          //   }
          // },
          enabled: false,
          custom: function (tooltipModel) {
            var tooltipEl = document.getElementById('chartjs-tooltip');
            if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.id = 'chartjs-tooltip';
              tooltipEl.innerHTML = '<div class="body"><span class="text"></span><span class="figure"></span></div>';
              document.body.appendChild(tooltipEl);
            }

            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
            }
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {

              tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
              tooltipEl.classList.add('no-transform');
            }

            if (tooltipModel.body) {
              $(tooltipEl).children().children('.text').text(tooltipModel.body[0].lines[0]);
            }

            var position = this._chart.canvas.getBoundingClientRect();

            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';

            tooltipEl.style.fontFamily = 'Open Sans';

            tooltipEl.style.fontWeight = '700';
            tooltipEl.style.color = '#fff';
            tooltipEl.style.display = 'flex';
            tooltipEl.style.justifyContent = 'center';

            tooltipEl.style.borderRadius = '4px';
            tooltipEl.style.textAlign = 'center';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.backgroundColor = '#7be37b';
            tooltipEl.style.zIndex = '100';

            if ($(window).width() <= 768) {
              tooltipEl.style.height = '22px';
              tooltipEl.style.width = '36px';
              tooltipEl.style.fontSize = 11 + 'px';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 18 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 40 + 'px';
            } else {
              tooltipEl.style.fontSize = 16 + 'px';
              tooltipEl.style.height = '35px';
              tooltipEl.style.width = '56px';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 28 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 60 + 'px';
            }

            tooltipEl.classList.add('tooltipChart');
          }
        },
        scales: {
          // xAxes: [{
          //   gridLines: {
          //     display: false,
          //   },
          //   ticks: {
          //     fontFamily: "'Open Sans', sans-serif",
          //     fontSize: 14,
          //     fontColor: "#545454",
          //     color: 'blue'
          //   }
          // }],
          // yAxes: [{
          //   color: '#8d7c7c',
          //   gridLines: {
          //     display: true,
          //     color: "#efdfdf",
          //     lineWidth: 1,
          //     drawTicks: true,
          //     tickMarkLength: 2,
          //     drawTicks: true,
          //   },
          //   scaleLabel: {
          //         display: true,
          //       },
          //   ticks: {
          //     fontFamily: "'Open Sans', sans-serif",
          //     fontSize: 14,
          //     min: 0,
          //     max: 150,
          //     stepSize: 25,
          //   }
          // }]
          xAxes: [{
            
            gridLines: {
              display: true,
						  zeroLineWidth: 1,
              zeroLineColor: "trasparent",
              drawOnChartArea: false,
              lineWidth: 0
            },
            ticks: {
              fontSize: 14,
            }
          }],
          yAxes: [{
            color: '#8d7c7c',
            gridLines: {
              // // drawOnChartArea: false,
              // drawTicks: true,
              lineWidth: 2,
              zeroLineWidth: 1,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              padding: 15,
              min: 0,
              max: 150,
              stepSize: 25,
              fontSize: 14
            }
          }]
        }
      }
    });
    let desctopOptions = [];
    desctopOptions['borderWidth'] = 2;
    desctopOptions['pointRadius'] = 7;
    desctopOptions['pointHoverRadius'] = 7;
    desctopOptions['pointHitRadius'] = 7;
    desctopOptions['fontSizeAxes'] = 14;
    desctopOptions['paddingTicks'] = 15;
    desctopOptions['gridLinesLineWidthYAxes'] = 2;
    let options = [];
    options['borderWidth'] = 1;
    options['pointRadius'] = 3;
    options['pointHoverRadius'] = 4;
    options['pointHitRadius'] = 3;
    options['fontSizeAxes'] = 10;
    options['paddingTicks'] = 10;
    options['gridLinesLineWidthYAxes'] = 1;
    if ($(window).width() <= 768) {
      updateSize(chart, options);
    }
    $(window).on('resize', function () {
      if ($(window).width() <= 768) {
        updateSize(chart, options);
      } else {
        updateSize(chart, desctopOptions);

      }
    });


    $('.chart__btn').on('click', function () {
      $('.chart__btn--active').removeClass('chart__btn--active');
      $(this).addClass('chart__btn--active');
      let flat = $(this).attr('data-item');
      let Newdata = chartData[flat];
      updateData(chart, Newdata);
    });

    function updateSize(chart, options) {
      console.log(chart.options.scales.yAxes[0].gridLines);

      chart.data.datasets[0].borderWidth = options['borderWidth'];
      chart.data.datasets[0].pointRadius = options['pointRadius'];
      chart.data.datasets[0].pointHoverRadius = options['pointHoverRadius'];
      chart.data.datasets[0].pointHitRadius = options['pointHitRadius'];
      chart.options.scales.xAxes[0].ticks.fontSize = options['fontSizeAxes'];
      chart.options.scales.xAxes[0].ticks.major.fontSize = options['fontSizeAxes'];
      chart.options.scales.xAxes[0].ticks.minor.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.major.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.minor.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.padding = options['paddingTicks'];
      chart.options.scales.yAxes[0].gridLines.lineWidth = options['gridLinesLineWidthYAxes'];
      chart.update();
    }

    function updateData(chart, Newdata) {
      let length = chart.data.datasets[0].data.length;
      for (let i = 0; i < length; i++) {
        chart.data.datasets[0].data.pop();
      }
      for (let i = 0; i < Newdata.length; i++) {
        chart.data.datasets[0].data.push(Newdata[i]);
      }
      chart.update();
    }
    Chart.pluginService.register({
      afterDraw: function (chart, easing) {
        if (chart.config.options && chart.config.options.scales) {
          if (chart.config.options.scales.xAxes)
            chart.config.options.scales.xAxes.forEach(function (xAxisConfig) {
              if (!xAxisConfig.color)
                return;
  
              var ctx = chart.chart.ctx;
              var chartArea = chart.chartArea;
              var xAxis = chart.scales[xAxisConfig.id];
  
              // just draw the scale again with different colors
              var color = xAxisConfig.gridLines.color;
              xAxisConfig.gridLines.color = xAxisConfig.color;
              xAxis.draw(chartArea);
              xAxisConfig.gridLines.color = color;
            });
  
          if (chart.config.options.scales.yAxes)
            chart.config.options.scales.yAxes.forEach(function (yAxisConfig) {
              if (!yAxisConfig.color)
                return;
  
              var ctx = chart.chart.ctx;
              var chartArea = chart.chartArea;
              var yAxis = chart.scales[yAxisConfig.id];
  
              // here, since we also have the grid lines, set a clip area for the left of the y axis
              ctx.save();
              ctx.rect(0, 0, chartArea.left + yAxisConfig.gridLines.lineWidth - 1, chartArea.bottom + yAxisConfig.gridLines.lineWidth - 1);
              ctx.clip();
                
              var color = yAxisConfig.gridLines.color;
              yAxisConfig.gridLines.color = yAxisConfig.color;
              yAxis.draw(chartArea);
              yAxisConfig.gridLines.color = color;
  
              ctx.restore();
            });
  
          // we need to draw the tooltip so that it comes over the (redrawn) elements
          chart.tooltip.transition(easing).draw();
        }
      }
    });
  });
})();