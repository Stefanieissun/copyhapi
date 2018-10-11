const Hapi = require('hapi');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
require('env2')('./.env');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const routesUsers = require('./routes/users');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');
//测试
const song=require('./routes/song');
//

//Websocket聊天


//

const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
    port: config.port,
    host: config.host,
});

const init = async () => {
    // 注册插件
    await server.register([
        ...pluginHapiSwagger,
        pluginHapiPagination,
        hapiAuthJWT2,
    ]);
    pluginHapiAuthJWT2(server);
    // 注册路由
    server.route([
        // 创建一个简单的hello hapi接口
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders,
        ...routesUsers,
        //测试
        ...song,
    ]);
    // 启动服务
    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
};

init();


const ws1=require('ws');
const ws=new ws1.Server({port:30});
ws.on('connection',(wss)=>{
    wss.on('message',data=>{
        console.log(data);
        ws.clients.forEach(function each(client){
            console.log('isequal',client===wss)
            if(client!=wss&&client.readyState===ws1.OPEN){
                client.send(data);
            }
        })
        wss.send(data);
    });
});
ws.on('close',()=>{
    console.log(`it's already closed`);
})