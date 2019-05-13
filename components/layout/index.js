import React from 'react'
import Header from './header'
import Footer from './footer'

export default class layout extends React.Component {
    render(){
        const {Component, ...pageProps} = this.props;
        return <div>
            <div className="xc_top"><Header></Header></div>
            <div className="xc_mid"><Component {...pageProps} /></div>
            <div className="xc_bottom"><Footer></Footer></div>
        </div>
    }
}