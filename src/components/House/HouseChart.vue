<template>
    <div id="house-container">
        <canvas id="house-chart"></canvas>
    </div>
</template>


<script>
// @ is an alias to /src
import Chart from 'chart.js';
// import houseChartData from '../../houseData.js';
// import axios from 'axios';

export default {
    name: 'HouseChart',
    props: ["location"],
    data() {
        return {
            houseChartData: {
                type: 'bar',
                data: {
                    labels: ['خانه ۳ خوابه در جردن', 'خرید آپارتمان ۳ خوابه در ولنجک', 'خرید آپارتمان ۱ خوابه در اکباتان', 'خرید آپارتمان ۲ خوابه در بلوار فردوس غربی', 'خانه ۳ خوابه در زعفرانیه', 'خرید آپارتمان ۲ خوابه در سعادت آباد', 'خرید آپارتمان ۲ خوابه در بریانک', 'خرید آپارتمان ۲ خوابه در بلوار فردوس غربی'],
                    datasets: [
                        { // one line graph
                            label: 'قیمت خانه',
                            type: 'bar',
                            data: [2100, 5200, 2200, 4500, 7100, 3300, 4500, 4500],
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            padding: 25,
                        }
                        }]
                    }
                }
            }
        }
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
            console.log(myChart);
        }
    },
    mounted() {
        this.createChart('house-chart', this.houseChartData);
    }
    
    // async created() {
    //     console.log(this.houseChartData.data.datasets[0].data);
        
    //     let res = await axios.get('http://hallows.ir/chart');

    //     try {
    //         let prices = [];
    //         // let bgcolors = [];
    //         let newlabels = []
    //         res.data.data.forEach(house => {
    //             newlabels.push(house.title)
    //             prices.push(house.price)
    //             // bgcolors.push(house.other_color)
    //         });
    //         let obj = {
    //             type: 'bar',
    //             data: {
    //                 labels: newlabels,
    //                 datasets: [
    //                     { // one line graph
    //                         label: 'قیمت خانه',
    //                         type: 'bar',
    //                         data: prices,
    //                         borderWidth: 3
    //                     }
    //                 ]
    //             },
    //             options: {
    //                 responsive: true,
    //                 lineTension: 1,
    //                 scales: {
    //                     yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true,
    //                         padding: 25,
    //                     }
    //                     }]
    //                 }
    //             }
    //         }
    //         this.houseChartData = obj;
            
    //         // console.log(obj);
            
    //         // this.houseChartData.data.datasets[0].backgroundColor = bgcolors;
    //         // console.log(this.houseChartData.labels);
    //         // return obj
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}
</script>


<style scoped>

</style>
