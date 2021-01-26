import {loadAllMovies} from './BookingService.js'


class Booking extends React.Component{
    state = {
        showMovies: true,
        showShows: false
    }


    componentDidMount(){
        loadAllMovies().then(response =>{
            console.log(response)
          })
    }
    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}


export default (withStyles(styles)(Booking));
