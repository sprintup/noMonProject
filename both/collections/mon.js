import { Mongo } from 'meteor/mongo';

export const Mon = new Mongo.Collection('mon');

Mon.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Title",
    max: 200
  },
  monID: {
    type: Number,
    label: "monID"
  }
}));
