import axios from "axios";
import SummaryApi , { baseURL } from "../common/SummaryApi";

const Axios = axios.create({
    baseURL : baseURL,
    withCredentials : true
})

//sending access token in the header
Axios.interceptors.request.use(
    async(config)=>{
        const accessToken = localStorage.getItem('accesstoken')

        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

//extend the life span of access token with 
// the help refresh
Axios.interceptors.response.use(
    (response)=>{
        return response
    },
    async(error)=>{
        let originRequest = error.config 

        if(error.response?.status === 401 && !originRequest.retry){
            originRequest.retry = true

            const refreshToken = localStorage.getItem("refreshToken")

            if(refreshToken){
                try {
                    const newAccessToken = await refreshAccessToken(refreshToken)

                    if(newAccessToken){
                        originRequest.headers.Authorization = `Bearer ${newAccessToken}`
                        return Axios(originRequest)
                    }
                } catch (refreshError) {
                    console.log('Token refresh failed:', refreshError)
                    // Clear tokens on refresh failure
                    localStorage.removeItem('accesstoken')
                    localStorage.removeItem('refreshToken')
                }
            }
        }
        
        return Promise.reject(error)
    }
)


const refreshAccessToken = async(refreshToken)=>{
    try {
        const response = await axios({
            ...SummaryApi.refreshToken,
            baseURL: baseURL,
            headers : {
                Authorization : `Bearer ${refreshToken}`
            }
        })

        const accessToken = response.data.data.accessToken
        localStorage.setItem('accesstoken',accessToken)
        return accessToken
    } catch (error) {
        console.log('Refresh token error:', error)
        throw error
    }
}

export default Axios