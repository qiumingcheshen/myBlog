const express = require('express')

const app = express()

// 设置默认采用的模板引擎名称
app.set('view engine', 'ejs')

// 设置模板页面的存放路径
app.set('views', './views')

// 因为 node_modules 没有托管出去，所以需要托管为静态资源目录
app.use('/node_modules', express.static('./node_modules'))

// 用户请求项目首页
app.get('/', (req, res) => {

    // 使用render函数之前，一定要保证安装和配置了 ejs 模板引擎
    res.render('index.ejs', { name: 'zs', age: 22 })
})

// 用户请求注册页面
app.get('/register', (req, res) => {

    // 当在调用模板引擎的 res.render 函数的时候，./ 相对路径是相对于 app.set('views')指定的目录来进行查找的
    res.render('./user/register.ejs', {})
})

// 用户请求登录页面
app.get('/login', (req, res) => {
    res.render('./user/login.ejs', {})
})

// 注册新用户
app.post('/register', (req, res) => {

    // TODO: 完成用户注册的业务逻辑
    res.send({ msg: 'ok', status: 200 })
})





app.listen(80, () => {

    console.log('server running at http://127.0.0.1')

})