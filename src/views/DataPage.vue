<template>
    <el-main class="data-page">
        <ul v-for="item in list">
            <li>{{item}}</li>
        </ul>
        <el-button @click="testAJAX">CLICK AJAX</el-button>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({

    })
    export default class DataPage extends Vue {
        public $http:any;
        private list:string[]=[];
        async mounted(){
            let result  = await this.$http.get("./mockup_data/data1.json");
            this.list = result.data.list;
        }
        testAJAX(){
            let request = new XMLHttpRequest();
            request.open("GET","http://localhost:8080");
            request.send();

        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>