<template>
   <dl @click="detail">
      <slot></slot>
       <dd>
           <p>{{cont.text}}</p>
           <img v-for="(val,i) in cont.textimg" :key="i" :src="'../../static/'+val" alt="">
       </dd>
       <p>评论个数:{{cont.commitcont.length}}</p>
   </dl>
</template>
<script>
export default {
  props:{
      cont:Object
  },
  methods: {
      detail(){
          if(this.cont.type==='zhiyan'){
              this.$router.push('/detail/'+this.cont.id)
          }
      }
  },
}
</script>