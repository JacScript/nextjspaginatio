"use server";

import connectDB from "@/app/utils/connectMongo";
import LanguageModel from "../models/LanguageModel";

export async function getPosts(perPage, page) {
  try {
    await connectDB();
    const data = await LanguageModel.find({}).skip(perPage * (page - 1)).limit(perPage);
    // const data = item.toArray();
    // const item = JSON.parse(JSON.stringify(await LanguageModel.find()));
    // const data = item.limit(perPage)
    const itemCount = await LanguageModel.countDocuments({});
    // console.log(itemCount)
    return { data, itemCount };
  } catch (error) { 
    return { errMsg: error.message };
  }
}
