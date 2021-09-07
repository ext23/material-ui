import React from 'react';
import { connect } from 'react-redux';
import { useGetTeamDetailsQuery } from '../api';
import { useParams } from "react-router-dom";
import { makeStyles, Button, ButtonGroup } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { Paper } from '@material-ui/core';
import { TextField } from 'mui-rff'

const useStyles = makeStyles((theme) => ({
    fields: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    buttonGroup: {    
        display: 'flex',        
        alignItems: 'left',
        '& > *': {
            margin: theme.spacing(1),           
            fontSize: 10,
        }
    },
}));

const TeamDetails = (props) => {
    const { teamId } = useParams();
    const { data, error, isLoading } = useGetTeamDetailsQuery({ matchId: props.matchId, teamId: teamId });
    const classes = useStyles();

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <h1>Информация о команде: {!data || data.teams.name}</h1>
            <Form
                onSubmit={onSubmit}
                initialValues={!data || {
                    ...data.teams,
                }}
                render={({ handleSubmit, pristine, form, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        <ButtonGroup className={classes.buttonGroup} color="secondary" variant="outlined">
                            <Button type="submit" disabled={submitting || pristine} >
                                Сохранить
                            </Button>
                            <Button type="button" onClick={form.reset} disabled={submitting || pristine}>
                                Сбросить
                            </Button>
                        </ButtonGroup>
                        <Paper className={classes.fields}>
                            <div>                                
                                <TextField label="Код команды" name="id" required={true} />
                                <TextField label="Название команды" name="name" required={true} />                                
                                <TextField label="Имя капитана" name="captainName" required={true} />
                                <TextField label="Имя помощника" name="assistantName" required={true} />
                                <TextField label="Основной пин-код" name="pin" required={true} />
                                <TextField label="Резервный пин-код" name="pin"/>
                            </div>
                        </Paper>
                    </form>
                )
                }
            ></Form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        matchId: state.user.matchId,
    };
}

export default connect(mapStateToProps, null)(TeamDetails)