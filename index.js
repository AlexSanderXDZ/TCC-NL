
        const ctxPerformance = document.getElementById('performanceChart').getContext('2d');
        const performanceChart = new Chart(ctxPerformance, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Performance',
                    data: [90, 70, 85, 100, 95, 110, 80, 60, 75, 85, 90, 100],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        });

        const ctxSales = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(ctxSales, {
            type: 'bar',
            data: {
                labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                datasets: [{
                    label: 'Daily Sales',
                    data: [30, 50, 40, 70, 60, 30],
                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1
                }]
            }
        });

        const ctxTasks = document.getElementById('tasksChart').getContext('2d');
        const tasksChart = new Chart(ctxTasks, {
            type: 'line',
            data: {
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Completed Tasks',
                    data: [100, 90, 120, 130, 110, 140],
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }]
            }
        });

      
        