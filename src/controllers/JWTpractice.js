const jwt = require("jsonwebtoken")

exports.CreateToken = (req, res) => {

    let Payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            Name: 'Ziad',
            City: 'Tangail',
            admin: true
        }
    }

    let Token = jwt.sign(Payload, "Ziad123")

    res.send(Token)
}

exports.DecodeToken = (req, res) => {

    let Token = req.headers['token-key']
    jwt.verify(Token, "Ziad123", function(err, decoded) {

        if (err) {
            res.status(401).json({ status: 'fail', data: err })

        } else {
            res.status(200).json({ status: 'success', data: decoded })
        }
    })
}