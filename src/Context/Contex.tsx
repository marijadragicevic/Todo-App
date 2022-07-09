import React, { createContext, useReducer } from 'react';
import { Todo } from '../Components/model';
import { Actions } from '../Reducer/Reducer';
import { Reducer } from '../Reducer/Reducer';

//---------CONTEXT (1.define type of data for context; 2.create context)------ //
// 1.
export type ContextType = {
    todos: Todo[],
    dispatch: React.Dispatch<Actions>
}
const initialValue = {
    todos: [],
    dispatch: () => { }
}
// 2.
export const Context = createContext<ContextType>(initialValue);

//----CONTEXT PROVIDER (3. define type for props of ContextProvider; 4.create ContextProvider) --------- //

//3.
type Props = { children: React.ReactNode }

// 4.
const ContextProvider: React.FC<Props> = ({ children }) => {

    const [todos, dispatch] = useReducer(Reducer, [], () => {
        // get data from localStorage
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : [];
    });

    return (
        <Context.Provider value={{ todos, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;