import React from 'react';
import { connect } from 'react-redux';
import { useGetTeamDetailsQuery } from '../api';
import { useParams } from "react-router-dom";
import { useStyles } from '../style'
import { TextField } from '@material-ui/core';

 
const TeamDetails = (props) => {
    const { teamId } = useParams();
    const classes = useStyles();

    const { data, error, isLoading } = useGetTeamDetailsQuery({ matchId: props.matchId, teamId: teamId });

    return (
        <div>
            <h1>Информация о команде</h1>
            {error ? (
                <>error</>
            ) : isLoading ? (
                <>Загрузка...</>
            ) : data ? (
                <form>
                    <div>
                    <TextField label="Код" variant='filled' defaultValue={data.teams.id}></TextField>
                    <TextField label="Название" variant='filled' defaultValue={data.teams.name}></TextField>
                    </div>
                    <div>    
                    <TextField label="Капитан" variant='filled' defaultValue={data.teams.captainName}></TextField>                                   
                    <div>Капитан: </div>
                    <div>Помощник: {data.teams.assistantName}</div>
                    </div>            
                </form>                
            ) : null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        matchId: state.user.matchId,
    };
}

export default connect(mapStateToProps, null)(TeamDetails)