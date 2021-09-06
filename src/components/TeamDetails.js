import React from 'react';
import { connect } from 'react-redux';
import { useGetTeamDetailsQuery } from '../api';
import { useParams } from "react-router-dom";
import { useStyles } from '../style'
import { TextField } from '@material-ui/core';
import { Form, Field } from 'react-final-form';

 
const TeamDetails = (props) => {
    const { teamId } = useParams();
    const classes = useStyles();

    const { data, error, isLoading } = useGetTeamDetailsQuery({ matchId: props.matchId, teamId: teamId });

    const clickOnSubmit = (e) => {
        console.log("submit");
    };

    return (
        <Form onSubmit={onSubmit}>
            <form onSubmit={clickOnSubmit}>
            <h1>Информация о команде</h1>           
            </form>
        </Form>
    );
}

const mapStateToProps = state => {
    return {
        matchId: state.user.matchId,
    };
}

export default connect(mapStateToProps, null)(TeamDetails)