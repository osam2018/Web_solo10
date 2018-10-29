<template>

    <div id="dashboard" >
        <h1 class="title">Hello, Hooker!!</h1>
        <h2 class="title">Sorry,! Hooker is not Perfect....</h2>
        <el-steps :active="1" align-center>
            <el-step title="Step 1" description="UI Development"></el-step>
            <el-step title="Step 2" description="AJAX Hooking API Development"></el-step>
            <el-step title="Step 3" description="Merge Above 2 chase"></el-step>
            <el-step title="Step 4" description="Finish Refactoring"></el-step>
        </el-steps>
        <p></p>
        <el-card class="box-card" ></el-card>
    </div>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
        }
    })
    export default class DashBoard extends Vue {

    }
</script>

<style scoped>
.title{
    font-size:40px;
    margin:50px auto;
    text-align:center;
}
</style>