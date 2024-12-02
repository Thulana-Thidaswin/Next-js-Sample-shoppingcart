
'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../store/store' // Adjust the path to your store file

interface Props {
    children: ReactNode;
}
const AppProviders = (props: Props) => {
    return (
        <Provider store={store}>{props.children}</Provider>
    )
}

export default AppProviders
