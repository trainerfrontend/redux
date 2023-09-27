import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
    const [usersData, setUsersData] = useState();
    const { userid } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(response => response.json())
            .then(data => setUsersData(data));
    }, [])

    return <>
        <h1>{usersData && usersData.name}</h1>
        <p>{usersData && usersData.username}</p>
        <p>{usersData && usersData.email}</p>
    </>
}

export default Detail;