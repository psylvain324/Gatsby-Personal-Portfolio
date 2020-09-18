/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from "react-helmet"
import ComponentStyles from '../assets/scss/components.scss';

const SocialSideBar = props => (
    <React.Fragment>
        <Helmet>
            <div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"></link>
                <ul id="social-sidebar">
                    <li>
                        <a className="entypo-twitter"><span>Tweeter</span></a>
                    </li>
                    <li>
                        <a className="entypo-facebook"><span>Facebook</span></a>
                    </li>
                    <li>
                        <a className="entypo-linkedin"><span>LinkedIn</span></a>
                    </li>
                    <li>
                        <a className="entypo-github"><span>Github</span></a>
                    </li>
                </ul>
            </div>
        </Helmet>
    </React.Fragment>
)

export default SocialSideBar
