import React from 'react';
import { connect } from 'react-redux';
import { useGetTeamsQuery } from '../api';
import { DataGrid } from '@material-ui/data-grid';

const Teams = (props) => {
    const { data, error, isLoading } = useGetTeamsQuery( {matchId: props.matchId} );

    const columns = [
        { field: 'id', headerName: 'ID', width: 100},
        { field: 'name', headerName: 'Название команды', width: 320},
        { field: 'checkin', headerName: 'Зарегистрирована', width: 200, type: 'boolean'},
        { field: 'pin', headerName: 'Пин-код', width: 320},
        { field: 'pin2', headerName: 'Пин-код (резерв)', width: 320},
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Список команд</h1>      
            {error ? (
                <>error</>
                ) : isLoading ? (
                <>Загрузка...</>
                ) : data ? (
                    <DataGrid
                        rows={data.teams}
                        columns={columns}   
                        pageSize={5}
                        checkboxSelection                        
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