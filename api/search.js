import axios from "axios"

export default async function getSearch(search) {
    try {
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`)
        return data;
    } catch (error) {
        console.error("Error fetching search:", error)
        throw error;
    }
}