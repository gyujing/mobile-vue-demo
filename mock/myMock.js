import Mock from 'mockjs'
// 脚手架会通过babel降级语法，js使用需要使用commonjs语法
// const Mock = require('mockjs')

Mock.mock('/mock/test', 'get', {
  message: 'success',
  data: ['数据1', '数据2', '数据3'],
  code: 200
})
