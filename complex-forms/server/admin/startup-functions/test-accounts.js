/*
* Genera las cuentas de testeo
* Crea automáticamente una colección de cuentas de testeo al inicio
*/

generateTestAccounts = function() {
  // Creamos un array de cuentas de usuario.
  var users = [
    { name: "Admin", email: "admin@admin.com", password: "password" },
    { name: "Pizza Pilot", email: "demo@pizzaplanet.com", password: "extracheese" }
  ];

  // Recorremos el array de cuentas de usuario.
  for(var i=0; i < users.length; i++) {
    var userEmail = users[i].email,
        checkUser = Meteor.users.findOne({"emails.address": userEmail});

    // Si no se ha encontrado el usuario, creamos la cuentas
    if(!checkUser) {
      Accounts.createUser({
        email: userEmail,
        password: users[i].password,
        profile: {
          name: users[i].name
        }
      });
    }
  }
};
