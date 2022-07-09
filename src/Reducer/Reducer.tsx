import { Todo } from '../Components/model';

// defined actions (types and payloads)
export type Actions =
    { type: "ADD_TODO", payload: string }
    | { type: "REMOVE_TODO", payload: number }
    | { type: "DONE_TODO", payload: number }
    | { type: "EDIT_TODO", payload: { id: number, editTodo: string } }


export const Reducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload)
        case "DONE_TODO":
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo);
        case "EDIT_TODO":
            return state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, todo: action.payload.editTodo } : todo);
        default:
            return state;
    }
}