import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://tasty.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '2451a83946mshf1e0b090deb7f2dp16e5fejsndac1aa1b90e9',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
    }
})

export default axiosClient