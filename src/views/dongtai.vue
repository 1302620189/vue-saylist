<template>
    <div>
        <myheader :search="true" :write="true">
            <ul>
                <li v-for="(val,i) in datalist" :key="i"
                :class="{active:i===index}" @click="change(i)">{{val.title}}</li>
            </ul>
        </myheader>
        <section>
            <mydl v-for="(val,i) in childData"
             :key="i"
             :cont="val">
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
        </section>
        <myfooter></myfooter>
    </div>
</template>
<script>
import mydl from '../components/mydl'
export default {
    data(){
        return{
            datalist:[{
               title:"好友",
               type:"haoyou"
            },{
               title:"发现",
               type:"faxian"
            },{
               title:"职言",
               type:"zhiyan"
            }],
            index:0,
            childData:[]
        }   
    },
     components:{
        mydl
    },
    created(){
        this.getdata();
    },
    methods:{
        getdata(){
            this.$http.get(`/getdata?type=${this.datalist[this.index].type}`).then(data=>{
               this.childData=data.data;
            })
        },
        change(i){
            this.index=i;
            this.getdata();
        }

    },
}
</script>