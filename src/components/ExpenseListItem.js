import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>{numeral(props.amount/1000).format('$0,0.00')}
        -
        {moment(props.createdAt).format('MMMM Do, YYYY')}</p>
    </div>
)

export default ExpenseListItem