import axios from "axios";

const ipAdress = "10.4.3.38";

export async function CreateComment(commentData) {
    try {
        const response = await axios.post(`http://${ipAdress}:8080/comments`, commentData);
        return response.data;
    }
    catch (error) {
        console.error("Error creating comment:", error);
        throw error;
    }
}
