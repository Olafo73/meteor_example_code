Accounts.onCreateUser( function( options, user ) {
  // Aquí tenemos acceso al documento del usuario recién creado. Queremos configurar
  // un nuevo documento en nuestra colección de Clientes para almacenar alguna información del
  // perfil del cliente. Podemos hacerlo aquí recogiendo el userId de la función callback de
  // onCreateUser e insertando un documento en blanco asociado a este usuario en nuestra colección
  // de Clientes.

  if( options.profile && options.profile.customer ) {
    customer          = options.profile.customer;
    customer.userId   = user._id;

    // No queremos almacenar esto en el objeto del perfil del usuario (sólo usamos el perfil
    // como un mecanismo de respaldo), así que lo quitamos para que no sea insertado por accidente.
    delete options.profile;

    Customer.insert( customer );
  }

  if( options.profile ) {
    user.profile = options.profile;
  }

  return user;
});
