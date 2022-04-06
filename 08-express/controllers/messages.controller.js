const path = require('path')

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my Friends!',
        friend: 'Mike'
    })
    // const filePath = path.join(__dirname, '..', 'public', 'trudeau.jpeg')
    // res.sendFile(filePath)
}

function postMessage(req, res) {
    console.log('Updating messages...')
}

module.exports = {
    getMessages,
    postMessage
}