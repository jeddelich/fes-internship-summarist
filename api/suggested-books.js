import axios from "axios"

export default async function getSuggestedBooks() {
    
    try {
        const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
        return data;
    } catch (error) {
        console.error("Error fetching suggested books:", error)
        throw error;
    }
}