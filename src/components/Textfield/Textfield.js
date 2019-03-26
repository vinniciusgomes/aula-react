import React from 'react';

export default (props) => {
    return (
        <div className="form-group bmd-form-group">
            <label className="bmd-label-floating">{props.inputName}</label>
            <input type={props.type} class="form-control" />
        </div>
    )
}