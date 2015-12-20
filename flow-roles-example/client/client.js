"use strict";

App.signout = function() {
  console.log('logging out...');
  Meteor.logout(function() {
     console.log('...done');
     Meteor.navigateTo('/');
  });
};

// stubs for IE
if( !window.console ) {
  window.console = {};
}
if( !window.console.log ) {
  window.console.log = function( msg ) {
    $( '#log' ).append('<br /><p>' + msg + '</p>');
  };
}

// fix bootstrap dropdown unclickable issue on iOS
$(document).on('touchstart.dropdown.data-api', '.dropdown-menu', function( e ) {
  e.stopPropagation();
});
