import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import { Card, CardBody, CardTitle } from 'reactstrap'
import IntlMessages from '../../helpers/IntlMessages'
import plantimg from '../../assets/images/medium.jpeg'
import species from '../../data/species'
import itemData from '../../data/images'

const PlantCard = (props) => (
  <Card
    style={{ borderRadius: '12px', marginBottom: '2%', maxHeight: '400px' }}
  >
    <CardTitle
      style={{
        backgroundColor: '#CFD8DC',
        height: '70px',
        color: '#43A047',
        padding: '1%',
        cursor: 'pointer',
      }}
    >
      <div
        style={{ textDecoration: 'underline ' }}
        onClick={props.PlantDetails}
      >
        {props.name}
      </div>

      <div cslassName="text-muted text-small" style={{ color: 'white' }}>
        {props.family}
      </div>
    </CardTitle>
    <CardBody>
      <div
        style={{
          width: '100%',
          height: '20%',

          flexWrap: 'wrap',
        }}
      >
        {itemData.map((item) => (
          <img
            style={{
              marginLeft: '30px',
              minWidth: '200px',
              maxWidth: '200px',
              maxHeight: '200px',
              minHeight:'200px'
            }}
            src={item.img}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            width={'200px'}
          />
        ))}
      </div>
    </CardBody>
  </Card>
)
export default injectIntl(PlantCard)
