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
	const result = useQuery(ALL_USERS)

	if (result.loading) {
		return <div>loading data...</div>
	}

	console.log(result.data.todosLosUsuarios)

	return (
		<div>
			<ul>
				{result.data.todosLosUsuarios.map((u) => (
					<li key={u.id}>{u.nombre}</li>
				))}
			</ul>
		</div>
	)
}

export default App
