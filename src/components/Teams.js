import React from 'react';
import { connect } from 'react-redux';
import { useGetTeamsQuery } from '../api';
import { DataGrid } from '@material-ui/data-grid';
import { useHistory, useLocation } from "react-router-dom";

const Teams = (props) => {
    const { data, error, isLoading } = useGetTeamsQuery({ matchId: props.matchId });
    const history = useHistory();
    const location = useLocation();

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Название команды', width: 250 },
        { field: 'checkin', headerName: 'Зарегистрирована', width: 210, type: 'boolean' },
        { field: 'pin', headerName: 'Пин-код', width: 200 },
        { field: 'pin2', headerName: 'Пин-код (резерв)', width: 200 },
    ];

    const openTeam = (cellParam) => {
        history.push(location.pathname + '/' + cellParam.id);
    };

    return (
        <div>
            <h1>Список команд</h1>
            {error ? (
                <>error</>
            ) : isLoading ? (
                <>Загрузка...</>
            ) : data ? (
                <DataGrid onCellDoubleClick={openTeam}
                    autoHeight
                    rows={data.teams}
                    columns={columns}
                    pageSize={20}
                />
            ) : null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user.userName,
        matchId: state.user.matchId,
    };
}

export default connect(mapStateToProps, null)(Teams)