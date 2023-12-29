import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import Newsbody from "../components/Newsbody"
import NewsHeader from "../components/NewsHeader"
export default class Homepage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <NewsHeader category={this.props.category} />
                <Newsbody category={this.props.category} />
                <Footer />
            </div>
        )
    }
}
