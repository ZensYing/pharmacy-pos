const salesPurchaseChart = {
    series: [
        { name: 'Sales', data: [31, 33, 35, 41, 45, 33, 36, ] },
        { name: 'Purchase', data: [19, 21, 29, 24, 35, 28,  20] }
    ],
    chartOptions: {
        chart: {
            type: 'area',
            height: 350,
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        colors: ['#0F9291', '#FF9500'], // Teal and Orange
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.45,
            opacityTo: 0.15,
            stops: [0, 100]
            }
        },
        markers: {
            size: [0, 0], // Hidden by default
            strokeWidth: 2,
            hover: { size: 6 },
            // To hardcode the dots on Wednesday as seen in your image:
            discrete: [{
            seriesIndex: 0,
            dataPointIndex: 5, // Adjust based on your Wed data point
            fillColor: '#00848E',
            strokeColor: '#fff',
            size: 6
            }, {
            seriesIndex: 1,
            dataPointIndex: 5,
            fillColor: '#FF9F00',
            strokeColor: '#fff',
            size: 6
            }]
        },
        grid: {
            show: false // No background lines as per image
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri',  'Sat', 'Sun'],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { style: { colors: '#9e9e9e' } }
        },
        yaxis: {
            min: 0,
            max: 60,
            tickAmount: 6,
            labels: {
                offsetX: -15,
            formatter: (val) => val + "K",
            style: { colors: '#9e9e9e' }
            }
        },
        dataLabels: {
            enabled: false // This hides the numbers inside or near the points
        },
        tooltip: {
            marker: { show: false } // Keeping your previous preference
        },
        legend: { show: false },		
    }
};

const statisticsChart = {
    series: [{
        name: 'Progress',
        data: [90, 75, 60]
    }],
    chartOptions: {
        chart: {
            height: 180,
            type: 'bar',
            toolbar: { show: false },
            sparkline: true,
        },
        colors: ['#0F9291', '#D97F06', '#D42314'], // Teal, Orange, Red
        plotOptions: {
            bar: {
            distributed: true, // Allows each bar to have its own color
            borderRadius: 4,
            columnWidth: '80%',
            colors: {
                backgroundBarColors: ['#0F92911A', '#D97F0633', '#D4231433'], // Dark "container" colors
                backgroundBarOpacity: 1,
                backgroundBarRadius: 4,
            },
            dataLabels: {
                position: 'top', // Labels inside at the top
            },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
            return val + "%";
            },
            offsetY: 20, // Moves text down inside the bar
            style: {
            fontSize: '12px',
            fontWeight: 'bold',
            colors: ['#fff']
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, 
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0.85, // Creates a slight fade
            stops: [0, 100]
            }
        },
        grid: { 
            show: false,
            padding: {
                left: 0,
                right: 0,
                bottom: 0	
            }
        },
        xaxis: {
            categories: ['Low Stock', 'Available', 'Out of Stock'], 
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            max: 100, // Important to show the "empty" part of the container
            show: false
        },
        tooltip: { enabled: false },
        legend: { show: false },
            tooltip: {
            enabled: true,
            theme: 'dark', // Matches your dark chart style
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
            const category = w.globals.labels[dataPointIndex];
            const value = series[seriesIndex][dataPointIndex];
            
            // Returns a clean, custom HTML box with no empty gaps
            return '<div style="padding: 8px; background: #1a1a1a; color: #fff; border: 1px solid #333;">' +
                    '<span>' + category + ': ' + value + '%</span>' +
                    '</div>';
            },
            marker: { show: false } // Keeping it clean
        },
    }
};

const saleChart = {
    series: [
        { name: 'Product 4', data: [2, 7, 5, 8, 5, 7, 2] },   
        { name: 'Product 3', data: [3, 6, 5, 8, 5, 7, 3] },
        { name: 'Product 2', data: [3, 7, 5, 7, 5, 8, 3] },
        { name: 'Product 1', data: [4, 7, 5, 7, 5, 8, 4] }  
    ],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 150,
            stacked: true, // Crucial for the segmented look
            toolbar: { show: false }
        },
        colors: ['#B5D7D6', '#A2CDCC', '#7CB9B8', '#389C9B'], 
        plotOptions: {
            bar: {
            borderRadius: 10,
            columnWidth: '60%',
            // Only the top series gets the rounded corners
            borderRadiusApplication: 'top', 
            }
        },
        dataLabels: { enabled: false },
        grid: {
            show: false,
            borderColor: '#f1f1f1',
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } } // Keep these for the "30K, 20K" scale
        },
        states: {
            hover: {
            filter: {
                type: 'none', // Disables the default "lighten" effect
            }
            },
            active: {
            filter: {
                type: 'none'
            }
            }
        },
        tooltip: {
            enabled: true,
            marker: {
                show: false, // This removes the teal colored circle
            },
            x: {
                show: false // Optional: hides the x-axis label in the tooltip since you hid it on the chart
            }
        },
        xaxis: {
            show: false,
            labels: { show: false },
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            min: 0,
            max: 30,
            setInterval: 10,
            labels: {
            offsetX: -15,
            formatter: (val) => val + "K", // Matches your "10K, 20K" labels
            style: { colors: '#9e9e9e' }
            }
        },
        legend: { show: false },
        responsive: [{
            breakpoint: 1399,
            options: {
            chart: {
                height: 135 // Reduced height for mobile
            },
            plotOptions: {
                bar: {
                columnWidth: '80%', // Make bars wider on mobile to stay visible
                borderRadius: 6     // Slightly smaller radius for smaller bars
                
                }
            }
            }
        }],
    }
};

const expiryChart = {
    series: [{
        name: 'Data',
        data: [210, 280, 284, 200]
    }],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 110,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                borderRadius: 10, // Rounded tops
                columnWidth: '80%',
                colors: {
                    backgroundBarColors: ['#F5F7FA'],
                    backgroundBarOpacity: 1,
                    backgroundBarRadius: 10,
                },
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false, // This removes the horizontal/vertical background lines
            padding: {
            left: 0,
            right: 0,
            top: -30
            }
        },
        xaxis: {
            categories: ['Jun', 'Jul', 'Aug', 'Sep'],
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            show: false,
            axisBorder: { show: false },
        },
        fill: {
            type: 'gradient',
            gradient: {
            shade: 'light',
            type: "vertical",
            gradientToColors: ['#E0F2F1'], // Light teal/white at bottom
            stops: [0, 100],
            colorStops: [
                {
                offset: 0,
                color: "#26A69A", // Main teal at top
                opacity: 1
                },
                {
                offset: 100,
                color: "#E0F2F1", // Light fade at bottom
                opacity: 0.5
                }
            ]
            }
        },
        tooltip: {
            enabled: true,
            custom: function({series, seriesIndex, dataPointIndex, w}) {
            return '<div class="custom-tooltip p-2">' +
                '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
                '</div>'
            }
        }
    }
};

export { salesPurchaseChart, statisticsChart, saleChart, expiryChart }