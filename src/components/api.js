import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api"

export const fetchImages = async (value, currentPage) => {
    const responce = await axios.get(`/?q=${value}&page=${currentPage}&key=39172985-9aae9b27665de10b1c143dbd8&image_type=photo&orientation=horizontal&per_page=12`);
    return responce.data.hits;
}