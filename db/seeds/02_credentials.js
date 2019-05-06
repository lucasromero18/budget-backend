
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('credentials').del()
    .then(function () {
      // Inserts seed entries
      return knex('credentials').insert([
        {user_id: "1", bill_name: "Car", bill_price: "300.45"},
        {user_id: "1", bill_name: "Rent", bill_price: "1045.00"},
        {user_id: "1", bill_name: "Phone", bill_price: "93.05"},
        {user_id: "2", bill_name: "Car", bill_price: "1000.00"},
        {user_id: "2", bill_name: "Phone", bill_price: "95.00"},
        {user_id: "2", bill_name: "Rent", bill_price: "2500.00"},
        {user_id: "3", bill_name: "Car", bill_price: "250.00"},
        {user_id: "3", bill_name: "Phone", bill_price: "85.00"},
        {user_id: "3", bill_name: "Rent", bill_price: "1100.00"}
      ]);
    });
};
