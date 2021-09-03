import React from 'react';
import { connect } from 'react-redux';
import { useGetTeamsQuery } from '../api';
import { DataGrid } from '@material-ui/data-grid';

const Teams = (props) => {
    const { data, error, isLoading } = useGetTeamsQuery( {matchId: props.matchId} );

    const columns = [
        { field: 'id', headerName: 'ID'},
        { field: 'name', headerName: 'Название команды', width: 250 },
        { field: 'checkin', headerName: 'Зарегистрирована', width: 210, type: 'boolean' },
        { field: 'pin', headerName: 'Пин-код', width: 200 },
        { field: 'pin2', headerName: 'Пин-код (резерв)', width: 200 },
    ];

    return (
        <div>
            <h1>Список команд</h1>      
            {error ? (
                <>error</>
                ) : isLoading ? (
                <>Загрузка...</>
                ) : data ? (
                    <DataGrid
                        autoHeight
                        rows={data.teams}
                        columns={columns}   
                        pageSize={20}                                                
                    >
                    </DataGrid>
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