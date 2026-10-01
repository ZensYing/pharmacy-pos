const purchaseYearlyChart = {
    series: [{
        name: 'Revenue',
        data: [45, 60, 52, 58, 40, 30, 55, 48, 22, 15, 30, 60]
    }, {
        name: 'Expense',
        data: [-12, -18, -15, -13, -8, -14, -16, -14, -20, -15, -18, -22]
    }],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: { show: false },
        },
        // Teal colors from your target screenshot
        colors: ['#0F9291', '#8BC4BF'], 
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 10, 
                borderRadiusApplication: 'end', 
                borderRadiusWhenStacked: 'all', 
            },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: { colors: '#8E9FB1', fontSize: '12px', fontWeight: 500 }
            }
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                style: { colors: '#8E9FB1', fontSize: '12px', fontWeight: 500 },
                formatter: function (val) { return "$" + Math.abs(val); },
                offsetX: -15,
            }
        },
        grid: {
            borderColor: '#E2E8F0',
            strokeDashArray: 0,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
            padding: { top: 0, right: 0, bottom: 0, left: 10 }
        },
        legend: { show: false },
        tooltip: {
            enabled: true,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                const month = w.globals.labels[dataPointIndex];
                const revenue = series[0][dataPointIndex];
                return '<div class="custom-apex-tooltip">' +
                    '<div style="margin-bottom: 2px;">' + month + '</div>' +
                    '<div>Revenue : $' + revenue + '00</div>' +
                    '</div>';
            }
        }
    }
};

const revenueExpenseChart = {
    series: [{
        name: 'Base',
        data: [40, 15, 25, 32, 28, 42, 35, 26, 33, 39, 29, 11]
    }, {
        name: 'Growth',
        data: [35, 15, 28, 33, 29, 44, 36, 27, 34, 42, 31, 13]
    }, {
        name: 'Projected',
        data: [10, 5, 7, 8, 6, 11, 9, 7, 10, 9, 7, 3]
    }],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        // Using the Orange-to-Peach palette from the screenshot
        colors: ['#FF9800', '#FFCC80', '#FFF3E0'], 
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
                // In your screenshot, only the very top segment is rounded
                borderRadius: 8,
                borderRadiusApplication: 'end', 
                borderRadiusWhenStacked: 'last', 
            },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            labels: {
                formatter: function (val) { return "$" + val; } ,
                offsetX: -15,
            }
        },
        grid: {
            borderColor: '#f1f1f1',
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        legend: { show: false },
        tooltip: {
            enabled: true,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                // This targets the specific value of the hovered bar
                var value = series[seriesIndex][dataPointIndex];
                return (
                    '<div class="custom-apex-tooltip">' +
                        '<span>Expense: $' + value + '</span>' +
                    '</div>'
                );
            }
        },
    }
};

export { purchaseYearlyChart, revenueExpenseChart }
