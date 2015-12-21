Template.signup.onRendered(function() {
  $('#application-signup').validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to signup.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password to signup.",
        minlength: "Please use at least six characters."
      }
    },
    submitHandler: function() {
      var user = {
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      }
    }
  });

  Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: {
      customer: {
        userId: "",
        name: "",
        streetAddress: "",
        secondaryAddress: "",
        city: "",
        state: "",
        zipCode: "",
        telephone: ""
      }
    }
  }, function(error, userId) {
    if(error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('Welcome to Pizza Planet!', 'success');
    }
  });
});

Template.signup.events({
  'submit form': function(e) {
    e.preventDefault();
  }
});
