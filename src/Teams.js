import React from 'react';

export default function Teams(props) {
    return (
        <div>
            <h1>Список команд</h1>
            {props.loginData.matchId}
        </div>
    );
}