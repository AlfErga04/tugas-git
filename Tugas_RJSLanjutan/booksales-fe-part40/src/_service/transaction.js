import {API} from "../_api";

export const createTranscation = async (data) => {
    try {
        const response = await API.post("/transaction", data)
    } catch (error) {
        console.log(error);
        throw error
    }
}