<template>
  <header>
    <span v-if="back" @click="$router.go(-1)">></span>
    <span v-if="search">☆</span>
    <slot></slot>
    <span v-if="write">❤</span>
  </header>
</template>
<script>
export default {
  props:{
    back:{
      default:false,
      type:Boolean
    },
    search:{
      default:false,
      type:Boolean
    },
     write:{
      default:false,
      type:Boolean
    }
  }
}
</script>