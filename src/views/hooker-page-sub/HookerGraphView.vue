<template>
    <!--<bar-chart></bar-chart>-->
<div id="container">
    <div class="graph-box">
        <canvas id="bar" width="700" height="350"></canvas>
    </div>
    <div class="graph-box">
        <canvas id="pie" width="700" height="350"></canvas>
    </div>
    <div class="graph-box">
        <canvas id="line" width="700" height="350"></canvas>
    </div>
    <div class="clear"></div>
    <el-button class="option" @click="resetGraph">reset</el-button>
</div>
</template>

<script lang="ts">
    import { Component,Prop, Vue } from 'vue-property-decorator';
    import Chart from 'chart.js';
    @Component({
        components: {}
    })

    export default class HookerGraphView extends Vue {
        @Prop() public data!:any;

        public  graph_data:number[]=[0,0,0,0];
        public  DATA_INDEX:any ={GET:0,POST:1,UPDATE:2,DELETE:3}
        public barContext:any;
        public pieContext:any;
        public lineContext:any;

        async mounted(){

           this.resetGraph();
        }

        public resetGraph(){
            this.graph_data =[0,0,0,0]
            this.data.forEach((item:any)=>{
                if(item.method === "GET"){
                    this.graph_data[this.DATA_INDEX.GET]++;
                }else if(item.method ==="POST"){
                    this.graph_data[this.DATA_INDEX.POST]++;
                }else if(item.method ==="UPDATE"){
                    this.graph_data[this.DATA_INDEX.DELETE]++;
                }else if(item.method ==="DELETE") {
                    this.graph_data[this.DATA_INDEX.UPDATE]++;
                }
            })

            this.barContext= (document.getElementById("bar") as HTMLCanvasElement).getContext("2d");
            this.pieContext = (document.getElementById("pie") as HTMLCanvasElement).getContext("2d");
              this.lineContext = (document.getElementById("line") as HTMLCanvasElement).getContext("2d");

            new Chart(this.barContext, {
                type: 'bar',
                data: {
                    labels: ['POST', 'GET', 'DELETE', 'UPDATE'],
                    datasets: [{
                        backgroundColor:[
                            '#ff6384',
                            '#36a2eb',
                            '#cc65fe',
                            '#ffce56',
                        ],
                        data: this.graph_data
                    }]
                },
                options:{
                    responsive: true,
                    legend: {
                        position: 'left',
                    },
                    title: {
                        display: true,
                        text: 'Use Rate'
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            });
            new Chart(this.pieContext,{
                type: 'pie',
                data: {
                    labels: ['POST', 'GET', 'DELETE', 'UPDATE'],
                    datasets: [{
                        backgroundColor:[
                            '#ff6384',
                            '#36a2eb',
                            '#cc65fe',
                            '#ffce56',
                        ],
                        data:this.graph_data
                    }]
                }
            })

            new Chart(this.lineContext,{
                type: 'line',
                data: {
                    labels: ['POST', 'GET', 'DELETE', 'UPDATE'],
                    datasets: [{
                        backgroundColor:[
                            '#ff6384',
                            '#36a2eb',
                            '#cc65fe',
                            '#ffce56',
                        ],
                        data: this.graph_data
                    }]
                },
                options:{
                    responsive: true,
                    legend: {
                        position: 'left',
                    },
                    title: {
                        display: true,
                        text: 'Use Rate'
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            })
        }
     }
</script>

<style scoped>
    #container{
        margin:0 auto;
    }
    .graph-box{
        float:left;
        margin:20px;
    }
    .clear{
        clear:both;
    }
    .option{

        margin:0 auto;
    }
</style>