import { gql } from "@apollo/client"

export const ALL_PRODUCTS = gql`
    query allProducts {
        todosLosProductos {
            nombre
            precio
            descripcion
        }
    }
`

export const FIND_PRODUCT = gql`
    query findProductByID($idToSearch: ID!) {
        productoPorID(id: $idToSearch) {
            nombre
            precio
            descripcion
        }
    }
`

export const CREATE_PRODUCT = gql`
   mutation createProduct($nombre: String! $precio: Float! $descripcion: String) {
    crearProducto(nombre: $nombre, precio: $precio, descripcion: $descripcion) {
        nombre
        precio
        descripcion
        id
    }
   }
`

export const EDIT_PRODUCT = gql`
    mutation editProduct($nombre: String! $precio: Float! $descripcion: String) {
        editarProducto(nombre: $nombre, precio: $precio, descripcion: $descripcion) {
            nombre
            precio
            descripcion
        }
    }
`
