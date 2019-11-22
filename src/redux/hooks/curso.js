/**
 * Estrutura adaptada do Ducks Modular Redux
 * - Types
 * - Reducer
 * - Actions
 */
// Types (Aka constants em outras fontes)
export const Type = {
    GET_CURSOS: 'GET_CURSOS'
}

const initialState = {
    cursos: []
}

export default function curso(state = initialState, action) {
    switch (action.type) {
        case Type.GET_CURSOS: 
            return {
                ...state, cursos: [...state.cursos, action.cursos]
            }
        default:
            return state;
    }
}

export function getCurso(cursos) {
    return {
        type: Type.GET_CURSOS,
        cursos: cursos
    }
}