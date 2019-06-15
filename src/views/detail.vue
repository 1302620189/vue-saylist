<template>
    <div>
        <myheader :back="true" :write="true">
            <span>脉脉直言</span>
        </myheader>
        <div v-if="loding">loding...</div>
        <section v-if="!loding">
            <mydl :cont="val" >
                    <dt v-if="val.type==='zhiyan'">
                        <span>{{val.name}}</span>
                    </dt>
                    <dt v-else>
                        <img :src="'../../static/'+val.face" alt="">
                        <p>
                            <b>{{val.name}}</b>
                            <span>{{val.tag}}</span>
                        </p>  
                    </dt>
            </mydl>
            <div class="commit">
                <h2>热门评论</h2>
                <dl  v-for="(val,i) in val.commitcont" :key="i">
                    <dt><img :src="'../../static/'+val.face" alt=""></dt>
                    <dd>
                        <span>{{val.name}}</span>
                        <p>{{val.text}}</p>
                    </dd>
                </dl>
            </div>
        </section>
        <footer>
            <input type="text" placeholder="请输入您的评论" v-model="text">
            <button @click="sendData">发送</button>
        </footer>
    </div>
</template>
<script>
import mydl from '../components/mydl'
export default {
    data(){
        return{
           val:{},
           loding:true,
           text:''
        }
    },
    components:{
        mydl
    },
    created(){
        this.getdata(this.$route.params.id);
    },
    methods: {
        getdata(id){
            console.log(id);
            this.$http.get('/getdetail?id='+id).then(data=>{
                this.val=data.data;
                this.loding=false;
            })
        },
        sendData(){
            this.$http.post('/sendlist',{
                    id:this.val.id,
                    face:'../../static/1.jpg',
                    name:'小敏',
                    text:this.text
            }).then(data=>{
               if(data.data.code){
                   this.getdata(this.val.id);
                   this.text='';
               }
            })
        }
    },
}
</script>