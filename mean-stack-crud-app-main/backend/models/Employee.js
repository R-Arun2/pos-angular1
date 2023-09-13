const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   location: {
      type: String
   },
   counterNo:{
      type: Number
   },
   customer:{
      type:String
   },

   invoiceDate:{
      type:String
   },
   invoiceNo:{
      type:String
   },
   currency:{
      type:String
   },
   salesExRate:{
      type:Number
   },
   localExRate:{
      type:Number
   },
   placeOfDelivery:{
      type:String
   },
   customerRemarks:{
      type:String
   },
   marketingPerson:{
      type: String
   },
   localCurrency:{
      type:String
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)