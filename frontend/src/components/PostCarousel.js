import React from 'react'
import { GridList, makeStyles, GridListTileBar, GridListTile } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0'
    }
}))

function PostCarousel() {

    const classes = useStyles()

    return (
      <GridList className={classes.gridList} cols={2.5}>
        <GridListTile>
          <img src="/images/redInterIPN.jpg" alt="reInterPost" />
          <GridListTileBar title="Hola soy un post" classes={{}} />
        </GridListTile>
        <GridListTile>
          <img src="/images/HP2.jpg" alt="reInterPost" />
          <GridListTileBar title="Hola soy un post" classes={{}} />
        </GridListTile>
        <GridListTile>
          <img src="/images/HP1.jpg" alt="reInterPost" />
          <GridListTileBar title="Hola soy un post" classes={{}} />
        </GridListTile>
        <GridListTile>
          <img src="/images/redInterIPN.jpg" alt="reInterPost" />
          <GridListTileBar title="Hola soy un post" classes={{}} />
        </GridListTile>
      </GridList>
    );
}

export default PostCarousel
