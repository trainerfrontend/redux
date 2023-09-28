import { userContext, userLevelContext } from './Parent';

const ChildC = () => {
    return (
        <>
            <userContext.Consumer>
                {
                    (user) => {
                        return (
                            <userLevelContext.Consumer>
                                {
                                    (userLevel) => {
                                        return <h1>welcome, {user}. Your level is {userLevel}</h1>
                                    }
                                }
                            </userLevelContext.Consumer>
                        )
                    }
                }


            </userContext.Consumer>
        </>
    )
}

export default ChildC

