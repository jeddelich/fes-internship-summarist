import axios from "axios"

export default async function getBookById(id) {
    
    try {
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
        return data;
    } catch (error) {
        console.error("Error fetching book by id:", error)
        throw error;
    }
}