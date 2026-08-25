import { gql } from "@apollo/client"
import { useMutation } from "@apollo/client/react"
import { useState } from "react"

const CREATE_PRODUCT = gql`
   mutation createProduct($nombre: String! $precio: Float! $descripcion: String) {
    crearProducto(nombre: $nombre, precio: $precio, descripcion: $descripcion) {
        nombre
        precio
        descripcion
        id
    }
   }
`

function ProductForm() {
	const [nombre, setNombre] = useState("")
	const [precio, setPrecio] = useState(0)
	const [descripcion, setDescripcion] = useState("")

	//Mutation
	const [crearF, { data, loading, error }] = useMutation(CREATE_PRODUCT)

	function submit(event) {
		event.preventDefault()

		crearF({
			refetchQueries: ["allProducts"],
			variables: {
				nombre,
				precio: parseInt(precio),
				descripcion,
			},
		})

		setNombre("")
		setPrecio(0)
		setDescripcion("")
	}

	return (
		<div>
			<form onSubmit={submit}>
				<input
					type="text"
					value={nombre}
					placeholder="Nombre del producto"
					onChange={(e) => setNombre(e.target.value)}
				/>
				<input
					type="number"
					value={precio}
					placeholder="Precio del producto"
					onChange={(e) => setPrecio(e.target.value)}
				/>
				<input
					type="text"
					value={descripcion}
					placeholder="Descripción del producto"
					onChange={(e) => setDescripcion(e.target.value)}
				/>

				<button type="submit" disabled={loading}>
					{loading ? "Guardando..." : "Crear producto"}
				</button>

				{error && <p style={{ color: "red" }}>Error: {error.message}</p>}
			</form>
		</div>
	)
}

export default ProductForm
