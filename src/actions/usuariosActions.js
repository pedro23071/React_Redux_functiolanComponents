import axios from 'axios';
import {TRAER_TODOS, CARGANDO, TRAER_TODOS_ERROR} from "../types/Types";

export const traerTodos = () => async (dipatch) => {
    dipatch({
        type: CARGANDO
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dipatch({
            type: TRAER_TODOS,
            payload: response.data
        })
    }catch (e) {
        console.log(e);
        dipatch({
            type: TRAER_TODOS_ERROR,
            payload: e
        })
    }
}
