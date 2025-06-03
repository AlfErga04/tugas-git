import API from "../_api"

export const getGenres = async () => {
    const {data} = await API.get("/genre")
    return data.data
}

export const createGenres = async (data) => {
    try {
        const response = await API.post("/genre", data)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}