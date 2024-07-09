import { Schema, model, models } from "mongoose";

const languagesSchema = new Schema({
    name: {
        type: String,
        require: true
    }
},{ timestamps: true})

const LanguageModel = models.languages || model('languages', languagesSchema)

export default LanguageModel
