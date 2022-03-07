import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import {
    Navbar, Row, Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import Classes from './style.module.css'
import logo from '../../assets/svg/bioservice.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { green } from '@mui/material/colors';

export default function Footer() {

    return (
        <div className={Classes.FooterHome} expand="md">
            <Row>
                <div
                    className={Classes.Image_Container}
                >
                    <img
                        style={{
                            maxWidth: '120px', minWidth: '100px', maxHeight: 'auto', width: '100%',
                        }}
                        src={logo}
                        alt="logo"
                    />
                </div>
            </Row>
            <Row style={{ marginTop: '4%' }}>
                <Col style={{backgoundColor:'red'}}>
                    <div className={Classes.link_title}>
                        PRODUCTS </div>
                    <div className={Classes.footer_link_item}>
                        Invoice OCR
                    </div>
                    <div className={Classes.footer_link_item}>
                        Driver License (US) OCR
                    </div>
                    <div className={Classes.footer_link_item}>
                        Passport OCR
                    </div>
                    <div className={Classes.footer_link_item}>
                        ID Card OCR
                    </div>
                </Col>
                <Col>



                    <div className={Classes.link_title}>
                        Enterprise Automation </div>
                    <div className={Classes.footer_link_item}>
                        Accounts Payable
                    </div>
                    <div className={Classes.footer_link_item}>
                        Table Extraction
                    </div>
                    <div className={Classes.footer_link_item}>
                        ID Card Verification

                    </div>

                </Col>
                <Col>

                    <div className={Classes.link_title}>
                        COMPANY </div>
                    <div className={Classes.footer_link_item}>
                        About
                    </div>
                    <div className={Classes.footer_link_item}>
                        Investors
                    </div>
                    <div className={Classes.footer_link_item}>
                        Careers
                    </div>
                    <div className={Classes.footer_link_item}>
                        Privacy Policy

                    </div>
                </Col>
                <Col>


                    <div className={Classes.link_title}>
                        FOLLOW US </div>
                    <div className={Classes.footer_link_item}>
                        +216 71889729, 70860282, 71872271
                    </div>
                    <div className={Classes.footer_link_item}>
                        bioservice@planet.tn
                    </div>
                    <div className={Classes.footer_link_item}>

                        3 Avenue du Roi Abedlaziz Al Saoud 2092 El Manar 2
                    </div>

                </Col>

            </Row>

            <div className={Classes.container_icon}>
                <FacebookIcon sx={{ color: green[10], fontSize: 35 }} style={{ marginRight: '20px' }} />
                <LinkedInIcon sx={{ color: green[10], fontSize: 35 }} style={{ marginRight: '20px' }} />
                <TwitterIcon sx={{ color: green[10], fontSize: 35 }} style={{ marginRight: '20px' }} />
                <InstagramIcon sx={{ color: green[10], fontSize: 35 }} style={{ marginRight: '20px' }} />
            </div>
            <hr />
            <div className="container">
                {' '}
                © Bio Service International- 2022 Tous droits réservés.{' '}
            </div>{' '}


        </div>
    )
}