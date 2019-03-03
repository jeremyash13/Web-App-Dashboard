const trafficMainDiv = document.querySelector('.charts--large');
const trafficSmallDiv = document.querySelector('#chart--traffic-bar')
const mobileUsersDiv = document.querySelector('#chart--mobile-users')

const trafficMainCanvas = document.querySelector('#chart--traffic-main');
const alert = document.querySelector('.alert');

trafficMainCanvas.getContext('2d');
trafficSmallDiv.getContext('2d');
mobileUsersDiv.getContext('2d');

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.defaultFontFamily = 'Trebuchet MS';

const closeAlert = () => {
    alert.style.display = 'none';
};

const genRandomData = (min, max) => {
    return Math.random() * (max - min) + min;    
};

const updateChartSelection = (currentChart) => {
    const options = document.querySelectorAll('.traffic-chart-options li');

    for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains('selected')) {
            options[i].classList.remove('selected');
        }
        if (options[i].classList.contains(currentChart)) {
            options[i].classList.add('selected');
        }
    };
};

// LINE CHARTS

// BAR CHARTS
const createTrafficChartBar = () => {
    const myChart = new Chart(trafficSmallDiv, {
        type: 'bar',
        maintainAspectRatio: false,
        responsive: true,
        data: {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                data: [75, 100, 175, 125, 225, 200, 100],
                backgroundColor: [
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                    '#7377bf',
                ],
            }]
        },
        options: {
            legend: {
                display: false,
            },
        },
    });
};

// DONUT CHARTS
const createMobileUsersChartDonut = () => {
    const myDoughnutChart = new Chart(mobileUsersDiv, {
        type: 'doughnut',
        maintainAspectRatio: false,
        responsive: true,
        data: {
            labels: ['Phones', 'Tablets', 'Desktop'],
            datasets: [{
                data: [16, 14, 70],
                backgroundColor: [
                    '#74b1bf',
                    '#81c98f',
                    '#7377bf',
                ]
            }]
        },
        options: {
            title: {
                text: 'Mobile Users',
                fontSize: 25,
            },
            legend: {
                display: true,
                position: 'right',
            },
            
        },
    });
};

const createTrafficChartUi = () => {
    
    const buttonsDiv = document.createElement('div');
    const chartContainer = document.querySelector('#container__chart--traffic-main');

    trafficMainDiv.insertBefore(buttonsDiv, chartContainer);
    buttonsDiv.innerHTML = 
    `<h5 style="float: left">TRAFFIC</h5>
    <ul class='traffic-chart-options'></ul>`;

    const trafficChartOptions = document.querySelector('.traffic-chart-options');

    const hourly = document.createElement('li');
    const daily = document.createElement('li');
    const weekly = document.createElement('li');
    const monthly = document.createElement('li');

    trafficChartOptions.appendChild(hourly);
    trafficChartOptions.appendChild(daily);
    trafficChartOptions.appendChild(weekly);
    trafficChartOptions.appendChild(monthly);

    hourly.textContent = 'Hourly';
    daily.textContent = 'Daily';
    weekly.textContent = 'Weekly';
    monthly.textContent = 'Monthly';

    hourly.className += 'hourly ';
    daily.className += 'daily ';
    weekly.className += 'weekly ';
    monthly.className += 'monthly ';

    let hourlyChart = undefined;
    let dailyChart = undefined;
    let weeklyChart = undefined;
    let monthlyChart = undefined;
    
    weeklyChart = new Chart(trafficMainCanvas, {
        type: 'line',
        data: {
            labels: ['1-4','4-8','8-12','12-16','16-20',
                    '20-24','24-28','28-32','32-36','36-40',
                    '40-44', '44-48', '48-52'],
            datasets: [{
                label: 'Traffic', /* legend label*/
                data: [
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                    genRandomData(5000, 20000),
                ],
                backgroundColor: 'rgba(116,119,191,.4)',
                lineTension: 0,
                pointBackgroundColor: 'white',
                pointBorderColor: '#7477bf',
                pointRadius: 5,
                pointBorderWidth: 2,
            }]
        },
        options: {
            title: {
                // display: true,
                // text: 'TRAFFIC',
                // fontSize: 25,
                // position: 'left'
            },
            legend: {
                display: false,
            },
            
        }
    });
    updateChartSelection('weekly');

    const clearOldCharts = () => {
        if (hourlyChart !== undefined) {
            hourlyChart.destroy();
        }
        if (dailyChart !== undefined) {
            dailyChart.destroy();
        }
        if (weeklyChart !== undefined) {
            weeklyChart.destroy();
        }
        if (monthlyChart !== undefined) {
            monthlyChart.destroy();
        }
    };
    
    trafficChartOptions.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('hourly') === true) {
            clearOldCharts();
            hourlyChart = new Chart(trafficMainCanvas, {
                type: 'line',
                data: {
                    labels: ['12pm - 3am','3am - 5am','5am - 7am','7am - 9am','9am - 11am',
                            '11am - 1pm','1pm - 3pm','3pm - 5pm','5pm - 7pm','7pm - 9pm',
                            '9pm - 12pm'],
                    datasets: [{
                        label: 'Traffic', /* legend label*/
                        data: [
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                            genRandomData(100, 1000),
                        ],
                        backgroundColor: 'rgba(116,119,191,.4)',
                        lineTension: 0,
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#7477bf',
                        pointRadius: 5,
                        pointBorderWidth: 2,
                    }]
                },
                options: {
                    title: {
                        // display: true,
                        // text: 'TRAFFIC',
                        // fontSize: 25,
                        // position: 'left'
                    },
                    legend: {
                        display: false,
                    },
                    
                }
            });
            updateChartSelection('hourly');
        } else if (target.classList.contains('daily') === true) {
            clearOldCharts();
            dailyChart = new Chart(trafficMainCanvas, {
                type: 'line',
                data: {
                    labels: ['Monday','Tuesday','Wednesday','Thursday','Friday',
                            'Saturday','Sunday',],
                    datasets: [{
                        label: 'Traffic', /* legend label*/
                        data: [
                            genRandomData(1000, 3000),
                            genRandomData(1000, 3000),
                            genRandomData(1000, 3000),
                            genRandomData(1000, 3000),
                            genRandomData(1000, 3000),
                            genRandomData(1000, 3000),
                            genRandomData(1000, 3000),
                        ],
                        backgroundColor: 'rgba(116,119,191,.4)',
                        lineTension: 0,
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#7477bf',
                        pointRadius: 5,
                        pointBorderWidth: 2,
                    }]
                },
                options: {
                    title: {
                        // display: true,
                        // text: 'TRAFFIC',
                        // fontSize: 25,
                        // position: 'left'
                    },
                    legend: {
                        display: false,
                    },
                    
                }
            });
            updateChartSelection('daily');
        } else if (target.classList.contains('weekly') === true) {
            clearOldCharts();
            weeklyChart = new Chart(trafficMainCanvas, {
                type: 'line',
                data: {
                    labels: ['1-4','4-8','8-12','12-16','16-20',
                            '20-24','24-28','28-32','32-36','36-40',
                            '40-44', '44-48', '48-52'],
                    datasets: [{
                        label: 'Traffic', /* legend label*/
                        data: [
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                            genRandomData(5000, 20000),
                        ],
                        backgroundColor: 'rgba(116,119,191,.4)',
                        lineTension: 0,
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#7477bf',
                        pointRadius: 5,
                        pointBorderWidth: 2,
                    }]
                },
                options: {
                    title: {
                        // display: true,
                        // text: 'TRAFFIC',
                        // fontSize: 25,
                        // position: 'left'
                    },
                    legend: {
                        display: false,
                    },
                    
                }
            });
            updateChartSelection('weekly');
        } else if (target.classList.contains('monthly') === true) {
            clearOldCharts();
            monthlyChart = new Chart(trafficMainCanvas, {
                type: 'line',
                data: {
                    labels: ['January','February','March','April','May',
                            'June','July','August','September','October',
                            'November', 'December'],
                    datasets: [{
                        label: 'Traffic', /* legend label*/
                        data: [
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                            genRandomData(50000, 300000),
                        ],
                        backgroundColor: 'rgba(116,119,191,.4)',
                        lineTension: 0,
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#7477bf',
                        pointRadius: 5,
                        pointBorderWidth: 2,
                    }]
                },
                options: {
                    title: {
                        // display: true,
                        // text: 'TRAFFIC',
                        // fontSize: 25,
                        // position: 'left'
                    },
                    legend: {
                        display: false,
                    },
                    
                }
            });
            updateChartSelection('monthly'); 
        }
    });
};

createTrafficChartUi();
createTrafficChartBar();
createMobileUsersChartDonut();
alert.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('alert-close') === true) {
        closeAlert();
    }
});


