const knex = require("../db/knex.js");

module.exports = {

    getUsers: (req, res) => {
        knex("users").then((results) => {
            res.send(results)
        })
    },
    editUser: (req, res) => {
        knex("users").update(req.body).where("id",  req.params.id).then((results) => {
            res.send(200)
        })
    },
    addUser: (req, res) => {
        knex("users").insert(req.body, '*').then((results) => {
            res.json(results[0])
        })
    },
    deleteUser: (req, res) => {
        knex("users").del().where("id", req.params.id).then((results) => {
            res.send(200)
        })
    }
}