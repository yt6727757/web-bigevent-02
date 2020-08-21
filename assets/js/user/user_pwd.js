$(function () {

    // 自定义密码输入规则
    var form = layui.form;
    form.verify({
        pwd: [/[\S]{6,12}/, '密码长度为6-12位，且不能有空格'],
        saimPwd: function (value) {
            var oldPwd = $('[name="oldPwd"]').val();
            if (value === oldPwd) {
                return '新密码和旧密码不能一致';
            }
        },
        rePwd: function (value) {
            var newPwd = $('[name="newPwd"]').val();
            if (value !== newPwd) {
                return '两次新密码不一致';
            }
        }
    });

    // 监听 表单提交
    $('.layui-form').on('submit',function(e){
        e.preventDefault();

        $.ajax({
            method:'POST',
            url:'/my/updatepwd',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !== 0){
                    return layui.layer.msg(res.message);
                }
                // 修改成功
                layui.layer.msg(res.message);
                $('.layui-form')[0].reset();
            }
        });
    });
});