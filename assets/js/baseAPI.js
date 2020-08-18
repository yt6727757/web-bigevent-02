// ajax 的拦截器
$.ajaxPrefilter(function (params) {
    // 将所有的url请求 拦截 并拼接成新的url返回
    params.url = "http://ajax.frontend.itheima.net" + params.url;
});