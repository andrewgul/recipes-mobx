import React from 'react'
import counter from '../../store/counter'
import { observer } from 'mobx-react-lite'

const Counter: React.FC = ({}) => {
    return (
        <div>
            <p>{counter.count}</p>
            <div>
                <button onClick={() => counter.decrement()}>minus</button>
                <button onClick={() => counter.increment()}>plus</button>
            </div>
        </div>
    )
}

export default observer(Counter)
