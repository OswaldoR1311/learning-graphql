import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"

const ALL_USERS = gql`
    query {
        todosLosUsuarios {
            id
            nombre
            email
        }
    }
`

function App() {
	const { loading, data, error } = useQuery(ALL_USERS)

	if (loading) {
		return <div>loading data...</div>
	}

	console.log(data.todosLosUsuarios)

	return (
		<div>
			<ul>
				{data.todosLosUsuarios.map((u) => (
					<li key={u.id}>{u.nombre}</li>
				))}
			</ul>
		</div>
	)
}

export default App
