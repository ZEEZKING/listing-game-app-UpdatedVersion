import axios from "axios";

const key="40a68e10ac2b4e90b6ba9516400d6fbd";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}
