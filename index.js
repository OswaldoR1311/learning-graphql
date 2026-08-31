import { configDotenv } from "dotenv"
import connectToDatabase from "./db"
import startServer from "./server"

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 4000

async function main() {
	await connectToDatabase(MONGODB_URI)
	startServer(PORT)
}

main()
