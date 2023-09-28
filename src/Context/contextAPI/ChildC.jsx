import { userContext } from './Parent';

const ChildC = () => {
    return <>
        <userContext.Consumer>
            {
                (user) => {
                    return <h1>welcome, {user}</h1>
                }
            }
        </userContext.Consumer>
    </>
}

export default ChildC