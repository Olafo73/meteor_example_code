checkUserLoggedIn = function() {
  if( !Meteor.loggingIn() && !Meteor.user() ) {
    Router.go('/');
  } else {
    this.next();
  }
};

userAuthenticated = function() {
  if( !Meteor.loggingIn() && Meteor.user() ) {
    Router.go('/profile');
  } else {
    this.next();
  }
};

Router.onBeforeAction( checkUserLoggedIn, {
  except: [
    'order',
    'index',
    'signup',
    'login',
    'recover-password',
    'reset-password'
  ]
});

Router.onBeforeAction( userAuthenticated, {
  only: [
    'index',
    'signup',
    'login',
    'recover-password',
    'reset-password'
  ]
});
