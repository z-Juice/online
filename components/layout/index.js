import React from 'react'
import Top from './top'
import Bottom from './bottom'

export default class layout extends React.Component {
    render(){
        const {Component, ...pageProps} = this.props;
        return <div>
            <div className="xc_top"><Top></Top></div>
            <div className="xc_mid"><Component {...pageProps} /></div>
            <div className="xc_bottom"><Bottom></Bottom></div>
        </div>
    }
}