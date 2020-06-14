<template>
  <div>
    <input @keydown.enter="sendEvent($event.target.value)" v-model="inputContent" type="text">
    <!-- <button @click="sendEvent(inputContent)">发送</button> -->
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  props:['sendEvent'],
  data(){
    return {
      inputContent:""
    }
  },
  methods:{
    send:function() {
      this.sendEvent(this.inputContent)
      this.inputContent
    }
  }
  
}
</script>