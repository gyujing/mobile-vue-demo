<template>
  <div>

    <!-- <input class="inputClass" value="" name="name">
    <input class="inputClass" value="" name="name"> -->
    <van-button color="red" @click="submit">提交</van-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'WorkspaceJsonIndex',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    submit(){
      axios.get('/mock/test').then((res) => {
        console.log(res)
        this.list = res.data.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.inputClass{
  width:90%;
  height:30px;
}
</style>
