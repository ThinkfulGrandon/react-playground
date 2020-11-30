import React from 'react';

export default function Currency(props) {
    const money = new Intl
        .NumberFormat(props.locale,
            {
            style: 'currency',
            currency: props.currency
            })
        .format(props.value);

    return(
        <div className="currency">
            { money }
        </div>
    )
}