import mongoose from "mongoose"

const schema = new mongoose.Schema({
	nombre: { type: String, required: true, minLength: 5 },
	email: { type: String, required: true },
})

const Usuario = mongoose.model("Usuario", schema)

export { Usuario }
