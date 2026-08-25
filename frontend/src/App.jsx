import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"
import Users from "./components/Users"
import ProductForm from "./components/ProductForm"

const ALL_PRODUCTS = gql`
    query allProducts {
        todosLosProductos {
            nombre
            precio
            descripcion
        }
    }
`

function App() {
	const { loading, data, error } = useQuery(ALL_PRODUCTS)

	if (loading) {
		return <div>loading data...</div>
	}

	return (
		<div>
			<ProductForm />
			<Users products={data.todosLosProductos} />
		</div>
	)
}

export default App
