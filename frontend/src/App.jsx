import { useQuery } from "@apollo/client/react"
import Users from "./components/Users"
import ProductForm from "./components/ProductForm"
import { ALL_PRODUCTS } from "./queries"
import Notify from "./components/Notify"
import { useState } from "react"

function App() {
	const [errorMessage, setErrorMessage] = useState(null)
	const { loading, data } = useQuery(ALL_PRODUCTS)

	if (loading) {
		return <div>loading data...</div>
	}

	function notify(message) {
		setErrorMessage(message)
		setTimeout(() => {
			setErrorMessage(null)
		}, 10000)
	}

	return (
		<div>
			<Notify errorMessage={errorMessage} />
			<ProductForm setError={notify} />
			<Users products={data.todosLosProductos} />
		</div>
	)
}

export default App
