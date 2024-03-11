/*
 * @Author: OCEAN.GZY
 * @Date: 2024-03-11 16:15:19
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2024-03-11 16:28:19
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
        data=[{
        "title": "逼我重生是吧",
            "desc": "作者:幼儿园一把手",
            "pic": "https://bookcover.yuewen.com/qdbimg/349573/1037551048/150.webp",
            "hot": 100,
            "url": "https://www.qidian.com/book/1037551048/",
            "mobileUrl": "https://www.qidian.com/book/1037551048/"
        }];
      ctx.body = {
        code: 200,
        message: "获取成功",
        ...routerInfo,
        from,
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