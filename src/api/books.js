import axios from "axios";

export const fetchBooks = async () => {
  try {
    const response = await axios.get("/api/books/");
    return response.data;
  } catch (err) {
    throw new Error("An error occurred while fetching books.");
  }
};

export const fetchBookDetails = async (id) => {
  try {
    const response = await axios.get(
      `/api/books/${id}`
    );
    return response.data;
  } catch (err) {
    throw new Error("An error occurred while fetching book details.");
  }
};
