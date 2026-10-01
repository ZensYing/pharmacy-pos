const medicineChart1 = {    
    series: [{
        name: 'Collected',
        data: [15, 86, 60, 75, 64, 55, 95, 70, 65, 25] 
    }],
    chartOptions: {
        chart: {
            height: 60,
            width: 120,
            type: 'area',
            sparkline: {
                enabled: true 
            }
        },
        // Updated to the purple from your screenshot
        colors: ['#C8AAF0'], 
        stroke: {
            curve: 'smooth',
            width: 0
        },
        fill: {
        type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8, 
                opacityTo: 0.1,   
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: '#C8AAF0',
                        opacity: 0.8
                    },
                    {
                        offset: 100,
                        color: '#FFFFFF',
                        opacity: 0.1
                    }
                ]
            }
        },
        xaxis: {
            crosshairs: {
                show: true,
                stroke: {
                    color: '#CBD5E1', 
                    width: 1,
                    dashArray: 4
                }
            }
        },
        markers: {
            size: 0,
            colors: ['#C8AAF0'], 
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 5 
            }
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                var value = series[seriesIndex][dataPointIndex];
                return '<div style="background: #1e293b; padding: 5px 10px; border-radius: 4px; border: none;">' +
                '<span style="color: #C8AAF0; font-weight: bold;">' + value.toLocaleString() + '</span>' +
                '</div>';
            }
        }
    }
};

const medicineChart2 = {
    series: [{
      name: 'Collected',
      data: [25, 76, 50, 65, 74, 45, 85, 80, 75, 35] 
    }],
    chartOptions: {
        chart: {
            height: 60,
            width: 120,
            type: 'area',
            sparkline: {
                enabled: true 
            }
        },
        // Updated to the purple from your screenshot
        colors: ['#0F9213'], 
        stroke: {
            curve: 'smooth',
            width: 0
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8, 
                opacityTo: 0.1,   
                stops: [0, 100],
                colorStops: [
                {
                    offset: 0,
                    color: '#0F9213',
                    opacity: 0.8
                },
                {
                    offset: 100,
                    color: '#FFFFFF',
                    opacity: 0.1
                }
                ]
            }
        },
        xaxis: {
            crosshairs: {
                show: true,
                stroke: {
                color: '#CBD5E1', 
                width: 1,
                dashArray: 4
                }
            }
        },
        markers: {
            size: 0,
            colors: ['#0F9213'], 
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 5 
            }
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                var value = series[seriesIndex][dataPointIndex];
                return '<div style="background: #1e293b; padding: 5px 10px; border-radius: 4px; border: none;">' +
                '<span style="color: #C8AAF0; font-weight: bold;">' + value.toLocaleString() + '</span>' +
                '</div>';
            }
        }
    }
};

const medicineChart3 = {  
    series: [{
        name: 'Collected',
        data: [35, 76, 80, 75, 54, 65, 85, 70, 75, 35] 
    }],
    chartOptions: {
        chart: {
            height: 60,
            width: 120,
            type: 'area',
            sparkline: {
                enabled: true 
            }
        },
        // Updated to the purple from your screenshot
        colors: ['#FA9200'], 
        stroke: {
            curve: 'smooth',
            width: 0
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8, 
                opacityTo: 0.1,   
                stops: [0, 100],
                colorStops: [
                {
                    offset: 0,
                    color: '#FA9200',
                    opacity: 0.8
                },
                {
                    offset: 100,
                    color: '#FFFFFF',
                    opacity: 0.1
                }
                ]
            }
        },
        xaxis: {
            crosshairs: {
                show: true,
                stroke: {
                color: '#CBD5E1', 
                width: 1,
                dashArray: 4
                }
            }
        },
        markers: {
            size: 0,
            colors: ['#FA9200'], 
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 5 
            }
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                var value = series[seriesIndex][dataPointIndex];
                return '<div style="background: #1e293b; padding: 5px 10px; border-radius: 4px; border: none;">' +
                '<span style="color: #C8AAF0; font-weight: bold;">' + value.toLocaleString() + '</span>' +
                '</div>';
            }
        }
    }
};

const medicineChart4 = {    
    series: [{
        name: 'Collected',
        data: [25, 76, 70, 85, 74, 45, 85, 50, 65, 25] 
    }],
    chartOptions: {
        chart: {
            height: 60,
            width: 120,
            type: 'area',
            sparkline: {
                enabled: true 
            }
        },
        // Updated to the purple from your screenshot
        colors: ['#F07066'], 
        stroke: {
            curve: 'smooth',
            width: 0
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8, 
                opacityTo: 0.1,   
                stops: [0, 100],
                colorStops: [
                {
                    offset: 0,
                    color: '#F07066',
                    opacity: 0.8
                },
                {
                    offset: 100,
                    color: '#FFFFFF',
                    opacity: 0.1
                }
                ]
            }
        },
        xaxis: {
            crosshairs: {
                show: true,
                stroke: {
                color: '#CBD5E1', 
                width: 1,
                dashArray: 4
                }
            }
        },
        markers: {
            size: 0,
            colors: ['#F07066'], 
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 5 
            }
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                var value = series[seriesIndex][dataPointIndex];
                return '<div style="background: #1e293b; padding: 5px 10px; border-radius: 4px; border: none;">' +
                '<span style="color: #C8AAF0; font-weight: bold;">' + value.toLocaleString() + '</span>' +
                '</div>';
            }
        }
    }
};

export { medicineChart1, medicineChart2, medicineChart3, medicineChart4 }