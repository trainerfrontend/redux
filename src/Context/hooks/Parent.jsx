// 1. create 
// 2. provider  - user
// 3. consumer - childC

import ChildA from './ChildA';
import { createContext } from 'react';

export const userContext = createContext();
export const userLevelContext = createContext();

const user = "Simona";
const userLevel = "guest";

const Parent = () => {
    return <>

        <userContext.Provider value={user}>
            <userLevelContext.Provider value={userLevel}>
                <h1>Parent</h1>
                <ChildA />
            </userLevelContext.Provider>
        </userContext.Provider>

    </>
}

export default Parent