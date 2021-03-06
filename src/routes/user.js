const router = require('koa-router')()
const { createToken, checkToken } = require('../utils/token')
const { register } = require('../controller/user')

router.prefix('/api/users')

router.post('/register', async (ctx, next) => {
    const { userName, password, nickName, phone } = ctx.request.body;
    ctx.body = await register({ userName, password, nickName, phone }, ctx)
})


// router.post('/login', async (ctx, next) => {
//   const { username, password } = ctx.request.body

//   let userInfo
//   if(username === 'admin' && password === '123'){
//     userInfo = {
//       userId: 1,
//       username: 'admin',
//     }
//   }

//   if(userInfo === null){
//     ctx.body = {
//       errno: -1,
//       msg: '登陆失败'
//     }
//     return
//   }

//   let token = createToken(userInfo)
//   ctx.body = {
//     errno: 0,
//     token: token
//   }
// })


module.exports = router
