const { model, models, Schema } = require("mongoose");


const schema = new Schema({
  Title: { type: String }
  ,Desc: { type: String }

  // public_id: "dzjrhk6z3cduqmmvgejp"  ​​  ​​
  // secure_url: "https://res.cloudinary.com/dyu6r9geu/image/upload/v1699944107/dzjrhk6z3cduqmmvgejp.png"

  ,public_id: { type: String }
  ,secure_url: { type: String }


  // ,IP: { type: String }
}, { timestamps: true });

// export const FeedbackModel = models?.FeedbackModel || model('Feedback', schema, 'Feedback');
export const FeedbackModel = models?.Feed || model('Feed', schema);

// let  FeedbackModel
// try {
//   FeedbackModel = model('Feed')
// } catch (error) {
//   FeedbackModel = model('Feed', schema)
// }