// ajax 的拦截器
$.ajaxPrefilter(function (params) {
    // 将所有的url请求 拦截 并拼接成新的url返回
    params.url = "http://ajax.frontend.itheima.net" + params.url;

    if (params.url.indexOf('/my/') !== -1) {
        params.headers = {
            Authorization: localStorage.getItem('token'),
        }
    }
    // 全局统一挂载 complete 回调函数
    params.complete = function (res) {
        // console.log(res);
        // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
        var rest = res.responseJSON;
        if (1 === rest.status && '身份认证失败！' === rest.message) {

            // 清空localStorage
            localStorage.removeItem('token');
            // 跳转到login页面
            top.location.href = '/login.html';
        }
    }
});