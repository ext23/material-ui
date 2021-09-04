import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    color: black;
`;

export default function DrawerMenu(props) {
    const list = (
        <div>
            <List>
                {
                    props.routes.filter(route => route.icon).map(item => (
                        <StyledLink to={item.path} style={{ textDecoration: 'none' }}>
                            <ListItem button key={item.anchor}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.anchor} />
                            </ListItem>
                        </StyledLink>
                    ))
                }
            </List>
        </div>
    );
    
    return (
        <div>
            <Drawer open={props.open} onClose={props.onClose}>
                {list}
            </Drawer>
        </div>
    );
}