import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Receipt as ReceiptIcon, People as PeopleIcon, Gavel as GavelIcon,
    Person as PersonIcon} from '@material-ui/icons'

export default function DrawerMenu(props) {    
    const listItems = [
        {anchor: 'Турниры', icon: <ReceiptIcon />},
        {anchor: 'Команды', icon: <PeopleIcon /> },
        {anchor: 'Участники', icon: <PersonIcon />},
        {anchor: 'Судьи', icon: <GavelIcon />},
    ];
    const list = (
        <div>
            <List>
                {
                    listItems.map(item => (
                        <ListItem button key={item.anchor}>
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