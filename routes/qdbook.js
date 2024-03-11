/*
 * @Author: OCEAN.GZY
 * @Date: 2024-03-11 16:15:19
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2024-03-11 16:40:02
 * @FilePath: /DailyHotApi/routes/qdbook.js
 * @Description: 注释信
 */
const Router = require("koa-router");
const qdbookRouter = new Router();

// 接口信息
const routerInfo = { name: "hotbook", title: "热门书籍", subtitle: "高质量榜单" };

// 调用时间
let updateTime = new Date().toISOString();

// NGA论坛热帖
qdbookRouter.get("/hotbook", async (ctx) => {
    try {
       let data=[
            {
                "title": "逼我重生是吧",
                "desc": "作者:幼儿园一把手",
                "pic": "https://bookcover.yuewen.com/qdbimg/349573/1037551048/150.webp",
                "hot": 100,
                "url": "https://www.qidian.com/book/1037551048/",
                "mobileUrl": "https://www.qidian.com/book/1037551048/"
            },
            {
                "title": "重回1982小渔村",
                "desc": "作者:米饭的米",
                "pic": "https://bookcover.yuewen.com/qdbimg/349573/1034727274/180.webp",
                "hot": 99,
                "url": "https://www.qidian.com/book/1034727274/",
                "mobileUrl": "https://www.qidian.com/book/1034727274/"
            },
            {
                "title": "宿命之环",
                "desc": "作者:爱潜水的乌贼",
                "pic": "https://bookcover.yuewen.com/qdbimg/349573/1036370336/600.webp",
                "hot": 98,
                "url": "https://www.qidian.com/book/1036370336/",
                "mobileUrl": "https://www.qidian.com/book/1036370336/"
            },
            {
                "title": "仙人消失之后",
                "desc": "作者:风行水云间",
                "pic": "",
                "hot": 97,
                "url": "https://www.qidian.com/book/1033991975/",
                "mobileUrl": "https://www.qidian.com/book/1033991975/"
            },
            {
                "title": "御兽之王",
                "desc": "作者:轻泉流响",
                "pic": "https://bookcover.yuewen.com/qdbimg/349573/1037090668/600.webp",
                "hot": 96,
                "url": "https://www.qidian.com/book/1037090668/",
                "mobileUrl": "https://www.qidian.com/book/1037090668/"
            },
            {
                "title": "都重生了谁谈恋爱啊",
                "desc": "作者:错哪儿了",
                "pic": "https://bookcover.yuewen.com/qdbimg/349573/1037068783/600.webp",
                "hot": 95,
                "url": "https://www.qidian.com/book/1037068783/",
                "mobileUrl": "https://www.qidian.com/book/1037068783/"
            },

        ];
      ctx.body = {
        code: 200,
        message: "获取成功",
        ...routerInfo,
        total: data.length,
        updateTime,
        data,
      };
    } catch (error) {
      console.error(error);
      ctx.body = {
        code: 500,
        message: "获取失败",
      };
    }
  });


qdbookRouter.info = routerInfo;
module.exports = qdbookRouter;