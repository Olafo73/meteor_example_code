Customers = new Meteor.Collection( 'customers' );

var CustomersSchema = new SimpleSchema({
  "name": {
    type: String,
    defaultValue: "",
    label: "Customer Name"
  },
  "streeAddress": {
    type: String,
    defaultValue: "",
    label: "Street Address"
  },
  "secondaryAddress": {
    type: String,
    defaultValue: "",
    label: "Seconday Address"
  },
  "city": {
    type: String,
    defaultValue: "",
    label: "City"
  },
  "state": {
    type: String,
    defaultValue: "",
    label: "State"
  },
  "zipCode": {
    type: String,
    defaultValue: "",
    label: "Zip Code"
  },
  "telephone": {
    type: String,
    defaultValue: "",
    label: "Telephone"
  },
  "userId": {
    type: String,
    label: "Associated User ID"
  }
});

Customers.attachSchema( CustomersSchema );
