Meteor.startup(function() {

  // Custom Browser Policies
  customBrowserPolicies();

  // Generate Test Accounts
  generateTestAccounts();

  createPizzas();
  
});
