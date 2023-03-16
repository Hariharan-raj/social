import mongoose from 'mongoose'

const NumberSchema = new mongoose.Schema({
    phoneNumber: {
        type: String, 
        required: true,
    }
})

export const NumberModel = mongoose.model('NumberDb',NumberSchema)


export default {NumberModel};