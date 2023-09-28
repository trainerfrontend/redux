// 1. create 
// 2. provider  - user
// 3. consumer - childC

import ChildA from './ChildA';
import { createContext } from 'react';

export const userContext = createContext();

const user = "Mary";

const Parent = () => {
    return <>
        <userContext.Provider value={user}>
            <h1>Parent</h1>
            <ChildA />
        </userContext.Provider>
    </>
}

export default Parent