import { useQuery } from "@apollo/client/react"
import { useState } from "react"
import { FIND_PRODUCT } from "../queries"

function Product({ product, onSelect }) {
	return (
		<div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
			<h3>{product.nombre}</h3>
			<p>{product.precio}</p>
			<p>{product.descripcion}</p>
			<button type="button" onClick={() => onSelect(product.id)}>
				Ver detalles
			</button>
		</div>
	)
}

function Users({ products }) {
	const [productToSearch, setProductToSearch] = useState(null)
	const { data, loading } = useQuery(FIND_PRODUCT, {
		variables: { idToSearch: productToSearch },
		skip: !productToSearch,
	})
	return (
		<div>
			{loading && <p>Cargando detalles...</p>}
			{data && data.productoPorID && (
				<div
					style={{
						background: "#f0f0f0",
						padding: "20px",
						marginBottom: "20px",
					}}
				>
					<h2>🔎 Detalle del producto encontrado: </h2>
					<p>
						<strong>Nombre:</strong> {data.productoPorID.nombre}
					</p>
					<p>
						<strong>Precio:</strong> {data.productoPorID.precio}
					</p>
					<p>
						<strong>Descripción:</strong> {data.productoPorID.descripcion}
					</p>
					<button type="button" onClick={() => setProductToSearch(null)}>
						Cerrar detalles
					</button>
				</div>
			)}

			<h2>Cátalogo General</h2>
			<ul>
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						onSelect={setProductToSearch}
					/>
				))}
			</ul>
		</div>
	)
}

export default Users
