const nfetch = require('node-fetch');
const Joi = require('joi');
const {
    jwtHeaderDefine
} = require('../utils/router-helper');
const config = require('../config');
const SONG_NAME = 'echo';


const puppeteer=require('puppeteer');

module.exports = [
{
    method: 'POST',
    path: `/${SONG_NAME}`,
    handler: async(request, reply) => {

        let { song_name, page } = request.payload;
    
        const SONG_URL = `http://www.app-echo.com/api/search/sound?keyword=${encodeURI(song_name)}&page=${page}&limit=10`;

        try {
            // statements
            let data = await nfetch(SONG_URL);
            let result = await data.json();
           let resultData= result.data.map(x=>{
                return {
                    name:x.name,
                    source:x.source
                }
            })
            if(resultData.length===0)
            {
                reply('no data');
            }
            reply(resultData);
        } catch (e) {
            // statements
            console.log(e);
        }


    },
    config: {
        tags: ['api', SONG_NAME+"回声"],
        description: '搜索echo',
        validate: {
            payload: {
                song_name: Joi.string().required(),
                page: Joi.number().required(),
            },
            ...jwtHeaderDefine,
        },
    },
},
{
    method: 'get',
    path: `/${SONG_NAME}/ha`,
    handler:async(req,reply)=>{
       // let data=await nfetch(`https://cnodejs.org/?tab=job`);
       // let result=await data.text();
       //  reply(result);
       const brower=await puppeteer.launch({headless:false});
       const page=await brower.newPage();
       await page.goto('https://juejin.im/post/5ba73d1de51d450e551a0d08');
       page.on('request',request => {
  request.respond({
    status: 404,
    contentType: 'text/plain',
    body: 'Not Found!'
  });
})
        for(let i in page){
            console.log(i);
        }
       let data=await page.metrics();
       await page.close();
       await brower.close();
       reply(data);
    },
    config:{
        tags: ['api', 'ceshi'],
        description: '搜索cnode',
        auth:false,

    }
}
]