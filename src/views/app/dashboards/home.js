import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Classes from './style.module.css'
import IntlMessages from '../../../helpers/IntlMessages'


import { injectIntl } from 'react-intl'
//import registerUserAction from '../../../redux/package/RegisterUserRedux';
import InputPattern from '../../../common/inputPattern'
import Hoc from '../../../hoc/wrapperInputs'


import { Row, Col } from 'reactstrap'
const Wrapper = Hoc(InputPattern)
function Plants(props) {
  const dispatch = useDispatch()
  const [isValid, setValidation] = useState(false)

  const redux = useSelector((state) => state)
  //const [selectedId, setSelectedId] = useState()
  const [activeIdx, setActiveIdx] = React.useState(-1)

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

        </div>
      </div>


    </div >
  )
}

export default injectIntl(Plants)
