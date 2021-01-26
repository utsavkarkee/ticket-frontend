import axios from 'axios'


/**
 * Handle get requests
 */
export function handleGet(url, requestParams, requestHeaders) {
    return axios({
      url,method:'get')
      .then(function(response) {
        console.log(response.data)
        return Promise.resolve(response.data)
      })
      .catch(function(error) {
        console.log('Error occurred while calling :' + url, error)
        return Promise.reject(error)
      })
  }


  export function handlePost(url, requestParams){
    return axios.post(url,requestParams)
    .then(function(response){
      return Promise.resolve(response.data)
    })
    .catch(function(error){
      return Promise.reject(error.response.data.errorMessage)
    })
  } 