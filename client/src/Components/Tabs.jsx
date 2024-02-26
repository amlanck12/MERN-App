import React from 'react'
import { TABS } from '../Redux/actions/type'
import { useDispatch } from 'react-redux'
import { toggleTab } from '../Redux/actions'

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();
    return (
        TABS.map(tab => (
            <button key={tab} className={tab === currentTab ? 'button selected' : 'button'} onClick={() => dispatch(toggleTab(tab))} >
                {tab}
            </button>
        ))
    )
}

export default Tabs
