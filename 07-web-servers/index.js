const http = require('http')

const PORT = 3000

const server = http.createServer()

const friends = [
    {
        id: 0,
        name: 'JK'
    },
    {
        id: 1,
        name: 'CF'
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/')
    if (req.method === "POST" && items[1] === 'friends') {
        req.on('data', data => {
            // convert data object to readable string
            const friend = data.toString()
            console.log('Request:', friend)
            friends.push(JSON.parse(friend))
        })
        req.pipe(res)
    } else if (req.method === "GET" && items[1] === 'friends') {
        // You can set all headers using writeHead
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        // Call res.end() to finish / send res
        if (items.length === 3) {
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex]))
        } else {
            res.end(JSON.stringify(friends))
        }
    } else if (req.method === "GET" && items[1] === 'messages') {
        // you can also set headers individually
        res.setHeader('Content-Type', 'text/html')
        // if no header is sent, it defaults to 200
        res.write('<head>')
        res.write('<body>')
        res.write('<h1>messages</h1>')
        res.write('</body>')
        res.write('</head>')
        res.end()
    } else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})