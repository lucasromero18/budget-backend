const login_register = require("../controllers/login_register.js");
const users = require("../controllers/users.js");
const credentials = require("../controllers/credentials.js");


module.exports = function(app){

  //login & register
  app.post("/login", login_register.login);
  app.post("/register", login_register.register);

  //users
  app.get("/users", users.getUsers);
  app.patch("users/edit/:id", users.editUser);
  app.post("/users/add", users.addUser);
  app.delete("users/delete/:id", users.deleteUser)

  //credentials
  app.get("/credentials", credentials.getCredentials);
  app.post("credentials/add", credentials.addCredentials);
  app.patch("/credentials/edit/:id", credentials.editCredential);
  app.delete("/credentials/delete:id", credentials.deleteCredential);


}
function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.status(401).send({message: 'Token incorrect, You are not authorized to view that resource, Please log in to continue.' });
      } else {
        // if everything is good, save to request for use in other routes
        delete decoded.password;
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(401).send({
        message: 'No Token, You are not authorized to view that resource, Please log in to continue.'
    });

  }
}
