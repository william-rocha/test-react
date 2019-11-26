/**
 * Estrutura adaptada do Ducks Modular Redux
 * - Types
 * - Reducer
 * - Actions
 */
// Types (Aka constants em outras fontes)
import HttpService from "../../services/config/http";

export const Type = {
    GET_CURSOS: 'GET_CURSOS',
    GET_ALL: 'GET_ALL'
}

const initialState = {
    cursos: [{id: 1, nome: 'joao'}]
}

export default function curso(state = initialState, action) {
    switch (action.type) {
        case Type.GET_CURSOS: 
            console.log(action.cursos)
            return {
                ...state, cursos: [...state.cursos,action.cursos]
            }
          
            case Type.GET_ALL: 
            return {
                ...state, cursos: [...state.cursos, ...action.cursos]
            }
        default:
            return state;
    }
}

export function  getCurso(cursos) {
    return {
        type: Type.GET_CURSOS,
        cursos: cursos
    }
}

export function  getAll(cursosApi) {
    return {
        type: Type.GET_ALL,
        cursos: cursosApi
    }
}

export const getCursoApi = () => {
    return function(dispatch) {
      let api = new HttpService();
      console.log('api', api)
      api.get("cursos/").then(result => {
        if (typeof result !== "undefined") {
          console.log(result)
          dispatch(getAll(result.data));
        }
      });
    };
  };