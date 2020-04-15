import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core'

function ListEvents() {
    return (
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="fakeEvent" src="/images/redInterIPN.jpg" />
          </ListItemAvatar>
          <ListItemText 
              primary="Clase de setsal"
              secondary={
                  <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                          CICS Unidad Santo Tomas
                          20/08/18 19:00 Hrs
                          Agendar asistencia
                      </Typography>
                  </React.Fragment>
              }
          />
        </ListItem>
      </List>
    );
}

export default ListEvents
