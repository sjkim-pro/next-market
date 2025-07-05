import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://root:example@localhost:27017/next-market?authSource=admin", {})
        console.log("Successfully connected to MongoDB")
    } catch (e){
        console.log(e.message)
        console.log("Error connecting to MongoDB")
    }
}

export default connectDB;