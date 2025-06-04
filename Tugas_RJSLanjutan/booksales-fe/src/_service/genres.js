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

export const showGenre = async (id) => {
    try {
        const { data } = await API.get(`/genre/${id}`)
        return data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const updateGenre = async (id, data) => {
    try {
        const response = await API.post(`/genre/${id}`, data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteGenre = async (id) => {
    try {
        await API.delete(`/genre/${id}`)
    } catch (error) {
        console.log(error)
        throw error
    }
}
