<template>
  <div>
    <!-- <input class="inputClass" value="" name="name">
    <input class="inputClass" value="" name="name"> -->
    <van-button color="red" @click="test">测试mock</van-button>
    <div class="font-s1">
      测试mock-get传参，是如何获取到的
    </div>
    <van-button plain type="primary" @click="testGet">测试mock-get传值</van-button>

    <van-form @submit="login">
      <van-field
        v-model="loginForm.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { test,testGet, login } from '@/apis/login_api'
import { Notify } from 'vant';
export default {
  name: 'WorkspaceJsonIndex',

  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123123'
      }
    }
  },

  mounted() {

  },

  methods: {
    test() {
      test().then(res => {
        console.log(res);
      })
    },
    testGet(){
      testGet({id:1}).then(res => {
        console.log(res);
      })
    },
    login() {
      login(this.loginForm).then(res => {
        console.log(res);
        if(res.code == 200){
          Notify({ type: 'success', message: '登录成功' });
        }else{
          Notify({ type: 'danger', message: res.message });
        }
      })
    }

  },
};
</script>

<style lang="scss" scoped>
.inputClass {
  width: 90%;
  height: 30px;
}
.font-s1{
 font-size: 18px;
}
</style>
