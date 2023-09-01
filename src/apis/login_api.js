import request from '@/utils/request'

export function test() {
  return request({
    url: "/mock/test",
    method: "get",
  });
}

export function testGet(data) {
  return request({
    url: "/mock/testGet",
    method: "get",
    params:data
  });
}

export function login(data){
  return request({
    url: "/mock/login",
    method: "post",
    data:data
  });
}
