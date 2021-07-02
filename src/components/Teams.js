import React from 'react';
import { connect } from 'react-redux';

const Teams = (props) => {
    return (
        <div>
            <h1>Список команд</h1>
            {props.user.matchId}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
  }
  
export default connect(mapStateToProps, null)(Teams)