// Visibles por todos

Router.route( 'index', {
  path: '/',
  template: 'index',
  onBeforeAction: function() {
    Session.set( 'currentRoute', 'index' );
    this.next();
  }
});

Router.route( 'order', {
  path: '/order',
  template: 'order',
  onBeforeAction: function() {
    Session.set( 'currentRoute', 'order' );
    this.next();
  }
});

Router.route( 'signup', {
  path: '/signup',
  template: 'signup',
  onBeforeAction: function() {
    Session.set( 'currentRoute', 'signup' );
    this.next();
  }
});

Router.route( 'login', {
  path: '/login',
  template: 'login',
  onBeforeAction: function() {
    Session.set( 'currentRoute', 'login' );
    this.next();
  }
});

Router.route( 'recover-password', {
  path: '/recover-password',
  template: 'recover-password',
  onBeforeAction: function() {
    Session.set( 'currentRoute', 'recover-password' );
    this.next();
  }
});

Router.route( 'reset-password', {
  path: '/reset-password',
  template: 'reset-password',
  onBeforeAction: function() {
    Session.set( 'currentRoute', 'reset-password' );
    Session.set( 'resetPasswordToken', this.params.token );
    this.next();
  }
});