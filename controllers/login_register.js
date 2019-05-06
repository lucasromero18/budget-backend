const knex = require("../db/knex.js");
const hasher = require('../config/hasher');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'budget-app'

module.exports = {

    login: (req, res) => {
        console.log('this is the body', req.body)
             knex('users')
            .where('username', req.body.username)
            .first()
            .then((user)=>{
                console.log(user)
                if(user){
                  hasher.check(user, req.body).then((isMatch)=>{
                  if(isMatch){
                      const token = jwt.sign(user, secret);
                      delete user.password;
                      console.log({token, user})
                      res.json(JSON.stringify({token, user}))
                  }else{
                      res.status(400).send({message: 'Invalid Email / Password'});
                      }
                  })
                }else{
                     res.status(400).send({message: 'Invalid Email / Password'});
                }
                }).catch((err)=>{
                res.status(400).send({message: 'Invalid Email / Password'});
                })
    },
    register: (req, res) => {
        hasher.hash(req.body).then((user)=>{
            knex('users').insert({
              username: user.username,
              email: user.email,
              age: user.age,
              password: user.password
            }, 'id').then((results)=>{
              res.json({message: "Successfully registered, please log in", id:results[0]});
            }).catch((err)=>{
              res.status(400).send({message: err});
            })
          })
    },

    verify: (req, res)=>{
        res.json(req.decoded);
      }
    
}