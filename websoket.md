#使用方法：
    var ws = new Websoket()
    判断浏览器是否支持websoket
    ws.onopen 连接成功回调
    ws.onmessage 收到信息回调
    ws.onclose 连接关闭回调
    ws.onerror 连接失败回调
#http连接：
    一个request 一个response,且只能客户端发起，非持久化，每次请求必须带上完整的请求报文，后端也必须每次去判断，带宽、资源消耗大。
    1* 轮询 由前端定时的去请求后端数据 请求后立即返回 资源消耗大 并且每次的请求大多是无用的重复数据 服务器资源浪费 多个轮询的话造成服务器服务崩溃 
    2* 长轮询 实现与轮询类似 但是后端会采取阻塞的方式 客户端发起请求后如果没有消息则不返回 
#WebSoket 
    h5新协议 建立tcp全双工通信 只需要一次http握手 不需要重复的解析http协议 采用代理的方式，当有新消息时通知代理数据出现了变化，代理与客户端建立连接，统一通知客户端数据变化
