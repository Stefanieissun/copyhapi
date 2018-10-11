module.exports=[
    {
        method:'GET',
        path:'/dex',
        handler:(req,replay)=>{
            replay('hapi')
        },
        config: {
             tags: ['api', 'tests'],
             description: '测试hello-hapi',
        },
    }
]