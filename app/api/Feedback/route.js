import { FeedbackModel } from "@/app/DbModels/FeedbackModel";
import mongoose from "mongoose";



// ************* GET Rec ************
export async function GET() {
  console.log('Getting Feedbacks from Api');
  // const conn = process.env["mongoURL"]
  const conn= process.env.MONGO_URL
  const chk= await mongoose.connect( conn )  
  // await mongoose.connect('mongodb+srv://Muffi:ugKoucNpkiv626qf@clusterx.yag3axg.mongodb.net/?retryWrites=true&w=majority')
    
  return Response.json(await FeedbackModel.find())
  }
  
// ************* ADD NEW/ CREATE Rec ************
export async function POST(req) {
  // console.log('Post is hit for conn: ', process.env.mongoURL)
  // await mongoose.connect('mongodb+srv://Muffi:ugKoucNpkiv626qf@clusterx.yag3axg.mongodb.net/?retryWrites=true&w=majority')
  const conn= process.env.MONGO_URL
  const chk= await mongoose.connect( conn )  
  
  const rec = await req.json(); 
  console.log('RSVD for posting: ', rec)

  //   await FeedbackModel.create({  
  //     Title: rec.Title,
  //     Desc: rec.Desc
  // })

  await FeedbackModel.create(rec)

  return Response.json(rec)
}

