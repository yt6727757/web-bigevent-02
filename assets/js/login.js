$(function () {
<<<<<<< HEAD

    // 获取用户信息
    getUserInfo();

    // 退出登录
    $('#signOut').on('click', function () {
        layui.layer.confirm('确定退出吗?',{icon:3,title:'提示'},function(index){
            // 删除 localStorage
            localStorage.removeItem('token');
            // 跳转到login界面
            location.href = '/login.html';
            // 关闭弹出框
            layui.layer.close(index);
        });
    });
<<<<<<<< HEAD:assets/js/login.js
=======
    // link_reg 点击去注册
    $('#link_reg').on('click', function () {
        $(this).parents('.login_box').hide().siblings('.reg_box').show();
    })

    // 点击去登录
    $('#link_login').on('click', function () {
        $(this).parents('.reg_box').hide().siblings('.login_box').show();
    })


    // 我们先要得到form模块对象
    var form = layui.form;
    form.verify({
        pwd: [/[\S]{6,12}/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            var pwd = $('.reg_box [name=password]').val();
            if (value !== pwd) {
                return '两次密码不一致';
            }
        }
    });

    // 利用 `layer.msg` 来进行提示
    // 获取到  `layer` 内置模块
    var layer = layui.layer;
    // 监听注册提交事件
    $('#reg_form').on('submit', function (e) {
        // 阻止表单默认提交行为
        e.preventDefault();

        var data = {
            username: $('.reg_box [name=username]').val().trim(),
            password: $('.reg_box [name=password]').val()
        };
        // 发起ajax请求
        $.ajax({
            method: 'POST',
            url: '/api/reguser',
            data: data,
            success: function (res) {
                // console.log(res);
                if (res.status != 0) {
                    return layer.msg(res.message);
                }
                // 注册成功
                layer.msg(res.message + '请登录!');
                $('#link_login').click();
                $('#reg_form')[0].reset();

                // 给登录框赋值
                $('.login_box [name=username]').val(data.username)
                $('.login_box [name=password]').val(data.password);
            }
        });
    });
>>>>>>> index

    // 登录按钮监听
    $('#login_form').on('submit', function (e) {
        // console.log(22321);
        e.preventDefault();

        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: $(this).serialize(),
            success: function (res) {
                // console.log(res);
<<<<<<< HEAD
                if (res.status != 0) {
=======
                if (res.status !==  0) {
>>>>>>> index
                    return layer.msg(res.message);
                }
                // 登录成功
                layer.msg(res.message);
                // 保存token到localStroage
                localStorage.setItem('token', res.token);
                // 跳转到 首页
<<<<<<< HEAD
                console.log("shou");
                location.href = '/index.html';
========
});
// 获取用户信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg(res.message);
>>>>>>>> index:assets/js/index.js
            }
            // 渲染用户头像
            renderAvatar(res.data);
        }
    });
}

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
=======
                location.href = '/index.html';
            }
        });
    })

})
>>>>>>> index
