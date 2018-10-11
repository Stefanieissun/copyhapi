const nfetch=require('node-fetch');
const fs=require('fs');
nfetch('https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg')
    .then(res=>{
        const dest = fs.createWriteStream('1.svg');
        res.body.pipe(dest);
    })