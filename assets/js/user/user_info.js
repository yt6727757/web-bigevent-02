$(function () {

    // 自定义昵称的输入规则
    var form = layui.form;
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称长度1-6位'
            }
        }
    });

    // 加载页面数据
    initUserInfo();

    function initUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                // 验证成功
                form.val('initUserInfo', res.data);
            }
        });
    }

    // 点击重置按钮
    $('#resetBtn').on('click', function (e) {
        e.preventDefault();

        initUserInfo();

    })

    // 监听表单提交
    $('.layui-form').on('submit', function (e) {
        e.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layui.layer.msg(res.message);
                }
                // 修改成功
                layui.layer.msg(res.message);
                // 调用父窗口的方法渲染用户名
                window.parent.getUserInfo();
            }
        });
    })
});


