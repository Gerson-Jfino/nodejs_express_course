const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        return res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        return res.end('Here is a short history about us')
    }
    return res.end(`
        <h1>Opsss!</h1>
        <h4>Page not found</h4>
        <a href='/'>back home</a>
    `)
})

server.listen(3000, () => {
    console.log('server is runing on port 3000');
})