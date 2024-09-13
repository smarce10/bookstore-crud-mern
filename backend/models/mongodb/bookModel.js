import mongoose from "mongoose"
import { mongoDBURL } from "../../utilities/config.js"

mongoose    
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
    })
    .catch((error) => {
        console.log(error)
    })

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export const BookModel = mongoose.model('Book', bookSchema)