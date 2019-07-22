import axios from 'axios';

API_KEY = 'fb85d1b407msh999b2a5ad0f5335p1465d4jsn8f40dd104b87';

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 2000,
    headers: { 'X-RapidAPI-Key': API_KEY }
});

export const searchTracks = async singerName => {
    const response = await axiosInstance.get(`search?q=${singerName}`);
    return response.data.data.map(({ title, preview, artist: { name: artist_name }, album: { cover_medium: cover_medium }, duration }) => ({ title, preview, artist_name, duration, cover_medium }));
}