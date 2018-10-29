<template>

    <div id="hooker">
        <div class="aside">
            <el-menu
                    default-active="tableView"
                    class="el-menu-vertical-demo"
                    @select="handleSelect">
                <el-menu-item index="tableView">
                    <i class="el-icon-tickets"></i>
                    <span>List</span>
                    <el-badge v-if="newRequestCount!=0" :value="newRequestCount" :max="99" class="badge">
                    </el-badge>
                </el-menu-item>
                <el-menu-item index="graphView">
                    <i class="el-icon-view"></i>
                    <span>Analysis</span>
                </el-menu-item>
                <el-menu-item index="frameView">
                    <i class="el-icon-document"></i>
                    <span>Target Browser</span>
                </el-menu-item>
            </el-menu>
            <div id="footer">
                <hr>
                <p>Shoot Request</p>
                <el-form ref="form" label-width="120px">
                    <el-form-item label="URL">
                        <el-input v-model="requestForm.url" placeholder="Input Destination"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitRequest">Submit</el-button>
                    </el-form-item>
                    <el-form-item label="Method">
                        <el-select v-model="requestForm.method" placeholder="Default GET">
                            <el-option label="GET" value="GET"></el-option>
                            <el-option label="POST" value="POST"></el-option>
                            <el-option label="UPDATE" value="UPDATE"></el-option>
                            <el-option label="DELETE" value="DELETE"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-switch v-model="hooking.running" active-text="Hooked" inactive-text="Stop"></el-switch>
                    </el-form-item>

                </el-form>
                <p>Filter</p>
                <ul id="option">
                    <li>
                        <el-checkbox v-model="filter['GET']">GET Enable</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="filter['POST']">POST Enable</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="filter['UPDATE']">UPDATE Enable</el-checkbox>
                    </li>
                    <li>
                        <el-checkbox v-model="filter['DELETE']">DELETE Enable</el-checkbox>
                    </li>
                </ul>
            </div>

        </div>
        <div class="content">
            <router-view class="contet" :data="requestList"/>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {}
    })
    export default class Hooker extends Vue {
        public $http: any;

        public newRequestCount:number=0;
        public requestList: any = [];
        //request From data
        public requestForm: any = {
            method: "GET",
            url: "",
        }
        public filter: any = {
            GET: true,
            POST: true,
            UPDATE: true,
            DELETE: true
        }
        public hooking: any = {
            running:true
        };// switch


        public handleSelect(key: any, keyPath: any) {
            this.$router.replace("/hooker/" + key);
        }


        async mounted() {

            this.initHooker();//XMLHttpRequest hooking.

            let result = await this.$http.get("./mockup_data/data1.json");
            this.requestList = result.data.list;

        }


        public submitRequest() {
            // let ajax = new XMLHttpRequest();
            // ajax.open(this.requestForm.method,this.requestForm.url,true);
            // ajax.send(null);

           // DUMMY Data Generation.
            let random = Math.floor(Math.random() * 3);
            const status = [200, 404, 500];
            let header;
            let body;

            if(random==0){
                header = {
                    "date": new Date().getDate(),
                    "content-type": "text/html;charset=utf-8",
                    "connection": " keep-alive",
                    "content-length": 6502
                }
                body ="{\"result\":\"success\"}";
            }else if(random==2){
                header = {
                    "date": new Date().getDate(),
                    "content-type": "text/html;charset=utf-8",
                    "connection": " keep-alive",
                    "content-length": 6502
                };
                body = "{\"error\":error}";
            }
            this.registerReuqest( {
                method: this.requestForm.method,
                url: this.requestForm.url + "/response",
                status: status[random],
                header: header,
                body: body,
                timestamp:new Date().getTime()
            })
            this.$notify({
                title: 'Success',
                message: 'Request Success To.' + this.requestForm.url,
                type: 'success'
            });
        }
        public registerReuqest(request:any){
            this.requestList.reverse();
            Vue.set(this.requestList, this.requestList.length, request);
            this.requestList.reverse();
        }
        //TEST METHOD
        private initHooker() {
            //not implement

            // let hooking = this.hooking.running;
            // let oldSend = XMLHttpRequest.prototype.send;
            // let registerFunc = this.registerReuqest;
            // XMLHttpRequest.prototype.send = function() {
            //     oldSend.apply(this, arguments);
            //    let XHR = this;
            //     if(hooking){
            //         registerFunc( {
            //             method: XHR.responseType,
            //             url: XHR.responseURL,
            //             body: XHR.responseText,
            //             header: XHR.getAllResponseHeaders(),
            //             status: XHR.getResponseHeader('status'),
            //             timestamp:new Date().getTime()
            //         })
            //     }
            // }
        }
    }
</script>

<style scoped>
    #hooker {
        height: 100%;
    }

    .aside {
        float: left;
        margin: 0px;
        padding: 0px;
        height: 100%;
        width: 20%;
    }

    .content {
        margin: 0px;
        padding: 0px;
        float: left;
        width: 80%;
        height: 100%;
    }

    #option {
        list-style: none;
    }

    #footer {
        position: relative;
        top: 400px;
    }

    .badge {
        float: right;
    }
</style>