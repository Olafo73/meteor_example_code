// Sólo visibles para usuarios autenticados

Router.route( 'profile', {
  path: '/profile',
  template: 'pizzaProfile',
  onBeforeAction: function() {
    Session.set( 'currentRoute', 'profile');
    this.next();
  }
});
