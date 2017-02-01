var ctx = document.getElementById("myChart");



var myChart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
            label: 'Cases Opened' ,
            data: [12, 19, 3, 5, 2, 3, 6, 23, 50, 46, 29, 30],
            backgroundColor: [
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)'
            ],
            borderColor: [
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)',
                'rgb(207,0,15)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});