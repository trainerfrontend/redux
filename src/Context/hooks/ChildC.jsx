import { userContext, userLevelContext } from './Parent';
import { useContext } from 'react';
const ChildC = () => {

    const username = useContext(userContext);
    const level = useContext(userLevelContext);

    return (
        <>
            <h1>Welcome, {username} Yo!! you are {level}</h1>
        </>
    )
}

export default ChildC

