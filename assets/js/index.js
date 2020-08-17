$(function () {
    // link_reg 点击去注册
    $('#link_reg').on('click', function () {
        $(this).parents('.login_box').hide().siblings('.reg_box').show();
    })

    // 点击去登录
    $('#link_login').on('click', function () {
        $(this).parents('.reg_box').hide().siblings('.login_box').show();
    })
});