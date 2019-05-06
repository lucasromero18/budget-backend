const knex = require("../db/knex.js");

module.exports = {

    getCredentials: (req, res) => {
        knex("credentials").then((results) => {
            res.send(results)
        })
    },
    editCredential: (req, res) => {
        knex("credentials").update(req.body).where("id",  req.params.id).then((results) => {
            res.send(200)
        })
    },
    addCredentials: (req, res) => {
        knex("credentials").insert(req.body, '*').then((results) => {
            res.json(results[0])
        })
    },
    deleteCredential: (req, res) => {
        knex("credentials").del().where("id", req.params.id).then((results) => {
            res.send(200)
        })
    }
    
}
