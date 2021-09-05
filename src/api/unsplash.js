import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OfjLI3I5i_mGTuLICB7Mrl2lCwkX1TiQnxwrW5bK64I'
    }
});

