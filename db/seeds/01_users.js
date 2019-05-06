
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {name: "Lucas Romero", email: "lucasjulromero@gmail.com", password: "123", monthly_inc: "4000"},
        {name: "Troy Amelotte", email: "troncity@gmail.com", password: "123", monthly_inc: "30000"},
        {name: "BickCity", email: "bickcity@gmail.com", password: "123", monthly_inc: "5000" }
      ]);
    });
};
