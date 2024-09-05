const Task = require('../models/task');

const getAllTasks = (req, res) => {
    Task.find().then((result) => {
        res.status(201).json({ tasks: result });
    }).catch((err) => {
        res.status(500).json({ msg: err });
    });
};

const createTask = (req, res) => {
    Task.create(req.body).then((result) => {
        res.status(201).json({ task: result });
    }).catch((err) => {
        res.status(500).json({ msg: err });
    });

};

const getTask = (req, res) => {
    const id = req.params.id;
    Task.findById(id).then((result) => {
        if (!result) {
            return res.status(404).json({ msg: `No task with id: ${id}` })
        }
        res.status(201).json({ task: result });
    }).catch((err) => {
        res.status(500).json({ msg: err });
    });
};



const deleteTask = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id).then((result) => {
        if (!result) {
            return res.status(404).json({ msg: `No task with id: ${id}` })
        }
        res.status(201).json(result);
    }).catch((err) => {
        res.status(500).json({ msg: err });
    });
};

const updateTask = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, req.body, { new: true }).then((result) => {
        if (!result) {
            return res.status(404).json({ msg: `No task with id: ${id}` })
        }
        res.status(201).json({ task: result });
    }).catch((err) => {
        res.status(500).json({ msg: err });
    });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };