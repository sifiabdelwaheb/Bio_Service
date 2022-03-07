import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { changeLocale } from '../../../redux/actions'
import { Navbar, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import Classes from './style.module.css'
import IntlMessages from '../../../helpers/IntlMessages'
import { getParameterByName, randomString } from '../../../helpers/Utils'
import { Polar } from 'react-chartjs-2'

import { injectIntl } from 'react-intl'
import Card from '../../../components/user/Card'
//import registerUserAction from '../../../redux/package/RegisterUserRedux';
import InputPattern from '../../../common/inputPattern'
import Hoc from '../../../hoc/wrapperInputs'
import { Spinner } from 'reactstrap'
import { Button } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'
import IdentifyForms from '../../../common/identify'
import identifyAction from '../../../redux/plant/identifyRedux'
import PlantCard from '../../../components/cards/PlantCard'
import DetailsAction from '../../../redux/plant/detailsRedux'
import { Row, Col, Input, Container } from 'reactstrap'
import Maps from '../../../components/cards/Maps'
import Map from '../../../components/cards/Maps'
import logo from '../../../assets/images/Lord_Darzi_online.jpg'

const Wrapper = Hoc(InputPattern)

function Identify(props) {
  const dispatch = useDispatch()
  const [isValid, setValidation] = useState(false)
  const [clicked, setClick] = useState(false)
  const [identifyForm, setidentifyForm] = useState(IdentifyForms())

  const [detail, setdetail] = useState([])
  const [SpeciesDetail, setSpeciesDetail] = useState([])
  const [selectedId, setSelectedId] = useState()
  const [deleteVerif, setdeleteVerif] = useState(false)
  const redux = useSelector((state) => state)
  //const [selectedId, setSelectedId] = useState()
  const [activeIdx, setActiveIdx] = React.useState(-1)
  const isClicked = (idx) => {
    setActiveIdx(idx)
  }
  const [list, updateList] = useState(detail)

  const onSendForm = (form) => {
    let data = {}
    for (let key in form) {
      data[key] = form[key].value
    }
    return data
  }
  const onSendFormHandler = () => {
    setClick(true)
    if (isValid) {
      onIdentify(onSendForm(identifyForm))

      // setTimeout(()=>{
      //
      // },1000)
    } else {
      setClick(false)
    }
  }

  const onIdentify = (data) => {
    dispatch(identifyAction.IdentifyRequest(data))
  }

  function ShowDetails(details) {
    //setSelectedId(details)
    console.log('detailsùùùùùùùù', details)
  }
  const handleClick = (value) => () => {
    console.log('detailsùùùùùùùù', value)
  }

  async function onCardClick(item) {
    console.log('detailsùùùùùùùù', item)
    setdeleteVerif(true)
    setSelectedId(item)
    dispatch(DetailsAction.DetailsRequest({ item }))
    //setSpeciesDetail(redux.search.response.data.asMutable({ deep: true }))
  }

  useEffect(() => {
    if (redux.details.loaded) {
      setSpeciesDetail(redux.details.response.data.asMutable({ deep: true }))
      console.log('details**************', detail)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redux.details.loaded, redux.details.response])

  const onCloseModal = () => {
    setdeleteVerif(false)
  }
  useEffect(() => {
    if (redux.identify.loaded) {
      setdetail(redux.identify.response.data.asMutable({ deep: true }))
      console.log('details**************', detail)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redux.identify.loaded, redux.identify.response])

  return (
    <div className={Classes.Container_Recherche}>


      <div
        className={Classes.Hiden_image
        }>
        <div>


          <Row>
            <Col className={Classes.image_title}>

              HEALTH TECHNOLOGY
            </Col>
          </Row>

          <Row>
            <div className={Classes.hr}></div>
          </Row>
          <Row>

            <Col>
              <div className={Classes.home_image_title}>
                At the service of health
              </div>

            </Col>
          </Row>
          <Row>
            <Col>
              <div className={Classes.home_image_title1}>

                for more than 30 years </div>
            </Col>
          </Row>
          <Row style={{width:'60%',marginTop:'12%'}}>
            <Col>
              {' '}
              <Button
                variant="contained"
                onClick={() => { }}
                style={{
                  backgroundColor: '#1f3b64',
                  fontWeight: 'bold',
                  height: '60px',
                  color: 'white',
                  borderRadius: '30px',
                  width: '148px',
                  fontSize:'16px',
                  fontFamily:'Montserrat-Bold,sans-serif'
                }}
              >
                EXPLORE
              </Button>
            </Col>
            <Col>
              <Button
                variant="contained"
                onClick={() => { }}
                className={Classes.home_button_title1}
                style={{
                  backgroundColor: '#3e884f',
                  fontWeight: 'bold',
                  height: '60px',
                  color: 'white',
                  borderRadius: '30px',
                  width: '168px',
                  fontSize:'16px',
                  fontFamily:'Montserrat-Bold,sans-serif'
                }}
              >
                OUR CATALOG
              </Button>
            </Col>
          </Row>







        </div>
      </div>


    </div >
  )
}

export default injectIntl(Identify)
