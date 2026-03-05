import axios from "axios"

export default async function getRecommendedBooks() {
    
    try {
        const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
        return data;
    } catch (error) {
        console.error("Error fetching recommended books:", error)
        throw error;
    }
}