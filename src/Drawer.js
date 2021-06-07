import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

export default function DrawerMenu(props) {    
    const list = (
        <div> 
            <List>
                {
                    props.routes.map(item => (
                        <ListItem button key={item.anchor} onClick={item.eventListener}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.anchor} />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
    return (        
        <div>            
            <Drawer open={props.open} onClose={props.onClose}>
                {list}
            </Drawer>
        </div>
    );
}