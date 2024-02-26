import mongoose from "mongoose";

const Schema = mongoose.Schema

const Todoschema = new Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.Now
    }
})

const todo = mongoose.model('todo', Todoschema);

export default todo;