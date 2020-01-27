import {TRAER_TODOS, CARGANDO, TRAER_TODOS_ERROR} from "../types/Types";

const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: ''
};

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {
                ...state,
                usuarios: action.payload,
                cargando: false
            };
        case CARGANDO:
            return  {...state, cargando: true};
        case TRAER_TODOS_ERROR:
            return {
                ...state,
                cargando: false,
                error: action.payload
            };
        default:
            return state
    }
}
