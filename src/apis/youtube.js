import axios from 'axios'
const KEY='AIzaSyB3YSEpw6NaBuDswl45bAi97IbFNhn-wX4'
// const KEY='AIzaSyDMJNLsfiWMo0dP10eMtvsFjC0bb4pdARc'
// const KEY='AIzaSyA4wDfcVPcoP6LZdf40HZR_lP__2buZ5I4'

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})