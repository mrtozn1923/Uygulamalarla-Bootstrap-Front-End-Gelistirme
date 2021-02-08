$(function() {
    var areChart = document.getElementById('areChart').getContext('2d');
    var barChart = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(areChart, {
        type: 'line',
        data: {
            labels: ['Mar 1', 'Mar 3', 'Mar 5', 'Mar 7', 'Mar 9', 'Mar 11', 'Mar 13'],
            datasets: [{
                data: [10000, 30132, 26532, 18394, 28682, 33554, 38000],
                backgroundColor: '#CCE3F7',
                borderColor: 'blue',
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: false,
           legend:{
               display:false
           }
        }
    });
    var myChart2 = new Chart(barChart, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                data: [400, 500, 600, 800, 1000, 1500],
                backgroundColor: '#0275D8',
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: false,
           legend:{
               display:false
           }
        }
    });
});