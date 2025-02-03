exports.helloGet = (req, res) => {
    res.status(200).json({ status: "success" })
}

exports.helloPost = (req, res) => {
    res.status(200).json({ "status": "success" })
}