//Simulación de BD
import { Usuario } from "./models/usuario"

const productosBaseDeDatos = [
	{
		id: "100",
		nombre: "Teclado Mecánico",
		precio: 89.99,
		descripcion: "Teclado RGB con switches azules",
	},
	{
		id: "200",
		nombre: "Mouse Gamer",
		precio: 45.5,
		descripcion: "Mouse ergonómico de 16000 DPI",
	},
]

const usuariosBaseDeDatos = [
	{ id: "1", nombre: "Lucas", email: "lucas@example.com" },
	{ id: "2", nombre: "Maria", email: "maria@example.com" },
]

//Resolvers: Funciones que resuelven las peticiones
export const resolvers = {
	Query: {
		todosLosProductos: () => productosBaseDeDatos,
		productoPorID: (parent, args) => {
			return productosBaseDeDatos.find((producto) => producto.id === args.id)
		},
		todosLosUsuarios: async () => Usuario.collection.countDocuments(),
	},
	Mutation: {
		crearProducto: (root, args) => {
			const nuevoProducto = {
				id: Date.now(),
				nombre: args.nombre,
				precio: args.precio,
				descripcion: args.descripcion,
			}

			productosBaseDeDatos.push(nuevoProducto)
			return nuevoProducto
		},
		crearUsuario: (root, args) => {
			const nuevoUsuario = {
				id: Date.now(),
				nombre: args.nombre,
				email: args.email,
			}

			usuariosBaseDeDatos.push(nuevoUsuario)
			return nuevoUsuario
		},
		editarProducto: (root, args) => {
			const product = productosBaseDeDatos.find(
				(producto) => producto.id === args.id,
			)

			if (!product) {
				throw new GraphQLError("El producto que intentas editar no existe")
			}

			if (args.nombre !== undefined) product.nombre = args.nombre
			if (args.precio !== undefined) product.precio = args.precio
			if (args.descripcion !== undefined) product.descripcion = args.descripcion

			return product
		},
	},
}
