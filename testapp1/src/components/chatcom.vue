<template>
  <div class="chat">
    <h1 class="user">用户:{{currentuser.username}}</h1>
    <!-- 聊天列表 -->
      <div class="chatlist">
        <chatitem-com v-for="(item,index) in chatlist" :chatitem='item' :key="'chatitem'+index">
          {{item.chatcontent}}
        </chatitem-com>
      </div>
      <chatinput-com :sendEvent='sendEvent'></chatinput-com>
  </div>
</template>

<script>
import chatinputCom from './chatinputcom'
import chatitemCom from './chatitemcom'
export default {
  props:['currentuser'],
  components: {
    chatinputCom,
    chatitemCom
  },
  data(){
    return {
      chatlist:[
        {
          user:{
            username:'gggggggg',
            headerimg:require('../assets/img/1.jpg')
          },
          chatcontent: '吃了吗？'
        }
      ]
    }
  },
  methods:{
    sendEvent:function (value) {
      this.chatlist.push({
        user:this.$root.$children[0].currentuser,
          chatcontent: value+new Date()
      })
    }
  }
}
</script>
<style scoped>
  .chat{
    width: 500px;
    height: 700px;
    border: 1px solid #ccc;
  }
</style>