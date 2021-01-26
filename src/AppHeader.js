import React from 'react'
import { withStyles } from '@material-ui/styles'
import { AppBar, Toolbar} from '@material-ui/core'

const styles = theme => ({
  root: {
    margin: 0,
  },
  header: {
    'background-color': '#846363',
    'box-shadow': 'inset 0 -1px 0 0 #e4e8eb',
  }
})

class AppHeader extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <div style={{
                                        fontSize: '25px',
                                        paddingRight: '0px',
                                        paddingLeft: '45%',
                                        color:'#ffffff'
                                    }}>
                    Book Movie
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default (withStyles(styles)(AppHeader));