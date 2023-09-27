import { NavLink } from "react-router-dom"

const CardItem = ({ usersData }) => {
    const createUserList = () => {
        return usersData.map((user) => {
            return <li key={user.id} className="my-4">
                <NavLink to={`/techstack/${user.id}`}>{user.email}</NavLink>
                <p className="text-l text-red-600">{user.fullname}</p>
            </li>
        })
    }

    return <ul>{usersData && createUserList()}</ul>
}

export default CardItem