import Mock from 'mockjs'
// 脚手架会通过babel降级语法，js使用需要使用commonjs语法
// const Mock = require('mockjs')

function regUrl(url) {
  return RegExp(url + ".*");
}

Mock.mock('/mock/test', 'get', {
  message: 'success',
  data: ['数据1', '数据2', '数据3'],
  code: 200
})

Mock.mock(regUrl('/mock/testGet'), 'get', (config) =>{
  console.log(config.url)
  return {
    message: 'success',
    data: ['数据1', '数据2', '数据3'],
    code: 200
  }
})

Mock.mock('/mock/login', 'post', (config) => {
  //需要注意返回的 json 格式数据
  const obj = JSON.parse(config.body)
  // 判断用户名密码
  if (obj.username === 'admin' && obj.password === '123123') {
    return {
      code: 200,
      message: '登录成功'
    }
  } else {
    return {
      code: 500,
      message: '用户名或密码错误'
    }
  }
})
