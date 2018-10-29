<template>
    <div id="frame-view">

         <h1>Target Browser</h1>
        <el-form label-width="120px">
        <el-form-item label="URL">
            <el-input v-model="targetURL"></el-input>
        </el-form-item>
        </el-form>
        <el-card>
            <iframe  class="frame" :src="targetURL" width="600" height="600"></iframe>
        </el-card>

    </div>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({

    })
    export default class HookerFrameView extends Vue {
        public targetURL:string="http://localhost:8080";
        private connection:boolean = false;
        mounted(){
           // this.connect();

        }
    }
</script>

<style scoped>

    h1{
        text-align:center;
    }
    .frame{
        width:100%;
    }
    #frame-view{
        width:100%;
    }
</style>