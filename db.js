import mongoose, { connect } from "mongoose"

async function connectToDatabase(uri) {
	console.log("Connecting to database uri", uri)

	try {
		await mongoose.connect(uri)
		console.log("Connected to MongoDB")
	} catch (error) {
		console.log("error connection to MongoDB ", error.message)
		process.exit(1)
	}
}

export default connectToDatabase
