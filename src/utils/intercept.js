let Result = require('../utils/common-utils');

function intercept(req, res, next) {
    // if (req.session.user) {
    //     next();
    // } else {
    //     let arr = req.url.split('/');// 解析用户请求的路径

    //     for (let i = 0, length = arr.length; i < length; i++) {// 去除 GET 请求路径上携带的参数
    //         arr[i] = arr[i].split('?')[0];
    //     }
    //     if (arr.length > 1 && arr[1] === '') {// 判断请求路径是否为根、登录、注册、登出，如果是不做拦截
    //         next();
    //     } else if (arr.length > 2 && arr[2] === 'users' && (arr[3] === 'register' || arr[3] === 'login' || arr[3] === 'logout' || arr[3].indexOf('login') >= 0)) {
    //         next();
    //     } else {  // 登录拦截
    //         // req.session.originalUrl = req.originalUrl ? req.originalUrl : null;  // 记录用户原始请求路径
    //         req.flash('error', '请先登录');
    //         res.send(Result.getUserLoginErrorInstance())
    //         // res.redirect('/user/login');  // 将用户重定向到登录页面
    //     }
    // }
    next();
}

module.exports = intercept;