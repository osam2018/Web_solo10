<template>
    <div>
        <el-table class="table"
                  :data="data"
                  style="width: 100%"
                  @row-click="dataClick"
        >
            <el-table-column label="Request">
                <el-table-column
                        prop="method"
                        label="Method"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="url"
                        label="Url"
                        width="300">
                </el-table-column>
            </el-table-column>
            <el-table-column label="Response">
                <el-table-column
                        prop="status"
                        label="Status Code"
                        width="120">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.status===200">{{scope.row.status}}</el-tag>
                        <el-tag type="info" v-if="scope.row.status===400">{{scope.row.status}}</el-tag>
                        <el-tag type="info" v-if="scope.row.status===404">{{scope.row.status}}</el-tag>
                        <el-tag type="danger" v-if="scope.row.status===500">{{scope.row.status}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="header"
                        label="Response Header">
                    <template slot-scope="scope">
                        {{scope.row.header}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="body"
                        label="Response Body">
                </el-table-column>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="Complete"
                    width="100"
            >
                <template slot-scope="scope">
                    <el-progress type="circle" @click="dialogTableVisible = true" :percentage="100" status="success"
                                 :width=50
                                 v-if="scope.row.status !== ''">200
                    </el-progress>
                    <el-progress type="circle" :percentage="0" status="exception" :width=50
                                 v-else></el-progress>
                </template>
            </el-table-column>
        </el-table>

        <!--Table row detail Dialog-->

        <el-dialog title="Detail Infomation" :visible.sync="dialogTableVisible">

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>요청 정보</span>
                    <el-button style="float: right; padding: 3px 0" type="text">Copy</el-button>
                </div>
                <div v-for="(item,key) in selectedData">
                    {{key}}: {{item}}
                </div>
            </el-card>
            <span slot="footer" class="dialog-footer">
                <el-button class="dialog-button" @click="dialogTableVisible = false">Cancel</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({})
    export default class HookerTableView extends Vue {
        @Prop() public data: any;
        public selectedData: any = {}
        public dialogTableVisible: boolean = false;

        mounted() {
        }

        dataClick(request: any) {
            this.dialogTableVisible = true;
            this.selectedData = request;
        }

    }
</script>

<style scoped>
    .table {
        overflow: auto;
        text-align:center;
    }
</style>