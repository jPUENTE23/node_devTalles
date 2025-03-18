
import { usuarios } from "../data/users"

export const findUserById = (id: number) => {
    return usuarios.find(user => user.id === id)
}