$(function () {

    getUserInfo();


    // 退出登录
    $('#signOut').on('click', function () {
        layui.layer.confirm('确定退出吗?', { icon: 3, title: '提示' }, function (index) {
            // 删除 localStorage
            localStorage.removeItem('token');
            // 跳转到login界面
            location.href = '/login.html';
            // 关闭弹出框
            layui.layer.close(index);
        });
    });

});

// 获取用户信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg(res.message);
            }
            // 渲染用户头像
            renderAvatar(res.data);
        }
    });
}


// 渲染用户头像
function renderAvatar(data) {
    console.log(data);
    // 设置欢迎文字
    var name = data.nickname || data.username;
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name);

    // 设置头像显示
    if (data.user_pic) {
        $('.layui-nav-img').attr('src', data.user_pic).show();
        $('.text-avatar').hide();
    } else {
        var avatat = name[0].toUpperCase();
        $('.layui-nav-img').hide();
        $('.text-avatar').html(avatat).show().css('visibility', 'visible');
    }

    // visibility: visible;
    $('.layui-side-scroll .userinfo').css('visibility', 'visible')

}