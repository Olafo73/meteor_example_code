Orders = new Meteor.Collection( 'orders' );

var OrdersSchema = new SimpleSchema({
  "userId": {
    type: String,
    label: "Customer User ID"
  },
  "pizzaId": {
    type: String,
    label: "ID of Pizza Ordered"
  },
  "date": {
    type: String,
    label: "Date Pizza was Ordered"
  }
});

Orders.attachSchema( OrdersSchema );
