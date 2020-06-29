// axios全局配置
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://192.168.3.88:8888/';//刘相吾
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.data.code === 7) {
        window.location.href = 'i-login.html';
    }
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
var tkn = 'token';//token
var newsId = 'newsId';//新闻id
var goodsId = 'goodsId';//商品详情id
var shopsId = 'shopsId'; //店铺id
var orderId = 'orderId';//订单id
var storeId = 'storeId';//商城classifyCode
var storeName = 'storeName';//商城跳转选中分类名
var storeModel = 'storeModel';//商城跳转选中分类名
var modelBtn = 'modelBtn';//商城model,判断按钮展示"加入购物车"或"查看详情"
var storeName = 'storeName';//商城跳转选中分类名
var comtPhoneId = "comtPhoneId" ;//移动端跳转详情
var shopRemId = 'shopRemId';//生成订单列表
var shopPay = 'shopPay';// 商品详情页的立即购买
var typeModel = 'typeModel';//商品种类
var workId = 'workId';//跳转交流详情页id
var workId = 'workId';//跳转交流详情页id
var orderNav = 'orderNav';//个人中心跳转查看订单
var searchGood = 'searchGood';//全局搜索产品
