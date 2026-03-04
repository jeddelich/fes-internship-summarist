import axios from "axios"

export default async function getSelectedBook() {
    
    try {
        const { data } = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected")
        return data[0];
    } catch (error) {
        console.error("Error fetching selected book:", error)
        throw error;
    }
}