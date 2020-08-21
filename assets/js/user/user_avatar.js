
$(function () {
    var layer = layui.layer;

    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)

    // 选择文件
    $('#chooseFile').on('click', function () {
        $('#file').click();
    })

    // 剪裁图片
    $('#file').on('change', function (e) {
        // 获取用户选择的文件
        var file = e.target.files[0];
        // 获取选择文件的url地址
        var imgURL = URL.createObjectURL(file);

        // 3. 重新初始化裁剪区域
        $image
            .cropper('destroy') // 销毁旧的裁剪区域
            .attr('src', imgURL) // 重新设置图片路径
            .cropper(options) // 重新初始化裁剪区域

    })

    // 点击上传文件
    $('#btnUpload').on('click', function () {
        // 获取剪裁区域的图片- base64 格式
        var dataURL = $image
            .cropper('getCroppedCanvas', {
                // 创建一个 Canvas 画布
                width: 100,
                height: 100
            })
            .toDataURL('image/png');
        // 发起请求
        $.ajax({
            method: 'POST',
            url: '/my/update/avatar',
            data: { avatar: dataURL },
            success: function (res) {
                // console.log(res)
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                // 上传成功
                layer.msg(res.message);
                // 调用父窗口的方法 渲染用户信息
                window.parent.getUserInfo();
            }
        });
    })
})

