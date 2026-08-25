import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"
import { useState } from "react"

const FIND_PRODUCT = gql`
    query findProductByID($idToSearch: ID!) {
        productoPorID(id: $idToSearch) {
            nombre
            precio
            descripcion
        }
    }
`

function Product({ product }) {
	return (
		<div>
			<h3>{product.nombre}</h3>
			<p>{product.price}</p>
			<p>{product.descripcion}</p>
		</div>
	)
}

function Users({ products }) {
	const [productToSearch, setProductToSearch] = useState(null)
	const result = useQuery(FIND_PRODUCT, {
		variables: { idToSearch },
		skip: !idToSearch,
	})
	return (
		<ul>
			{products.map((prod) => (
				<Product key={prod.id} product={prod} />
			))}
		</ul>
	)
}

export default Users
