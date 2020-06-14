<template>
  <div id="app" >
    <!-- <h1>{{msg}}</h1> -->
    <div class="content">
      <userlist-com @chooseuser='toggleUser' :userlist="userlist"></userlist-com>
      <chat-com :currentuser="currentuser"></chat-com>
    </div>
  </div>
</template>

<script>
import chatCom from './components/chatcom'
import userlistCom from './components/userlistcom'
export default {
  name: 'App',
  components: {
    chatCom, userlistCom
  },
  data(){
    return{
      msg: 'lff',
      userlist:[
        {
          username: "小明",
          headerimg: require('./assets/img/1.jpg')
        },
        {
          username: "小黑",
          headerimg: require('./assets/img/2.jpg')
        },
        {
          username: "小张",
          headerimg: require('./assets/img/3.jpg')
        },
      ],
      currentuser: {
        username: "",
        headerimg: require('./assets/img/1.jpg')
      }
    }
  },
  methods:{
    toggleUser: function(index) {
      this.currentuser = this.userlist[index]
    }
  }
}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.content{
  display: flex;
  width: 800px;
  height: 700px;
}
</style>
