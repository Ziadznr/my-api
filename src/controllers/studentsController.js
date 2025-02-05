const StudentsModel = require('../models/StudentsModel');

// create
exports.InsertData = async(req, res) => {
    console.log("Headers:", req.headers);
    console.log("Received Request Body:", req.body);

    try {
        let reqBody = req.body;
        const data = await StudentsModel.create(reqBody);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "fail", data: err.message });
    }
};

// read
exports.ReadStudent = async(req, res) => {
    try {
        const data = await StudentsModel.find({}); // ✅ No callback, returns a promise
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(500).json({ status: "fail", data: err.message });
    }
};

// update
exports.UpdateStudents = async(req, res) => {
    let id = req.params.id
    let Query = { _id: id }
    let reqBody = req.body;
    try {
        const data = await StudentsModel.updateOne(Query, reqBody)
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(500).json({ status: "fail", data: err.message });
    }
}

//Delete
exports.DeleteStudent = (req, res) => {
    let id = req.params.id
    let Query = { _id: id }
    try {
        const data = StudentsModel.remove(Query)
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(500).json({ status: "fail", data: err.message });
    }
}