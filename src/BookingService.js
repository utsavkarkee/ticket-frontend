import { handleGet, handlePost} from './HttpUtils'


export function loadAllMovies() {
    let url = 'https://shailesh-ticket-booking.herokuapp.com/booking/all_movies'
    return new Promise((resolve, reject) => {
        handleGet(url).then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
}