import React from 'react';
import classes from '../style.module.css';
import iconPlus from '../../../../assets/svg/plus.svg';
import IntlMessages from '../../../../helpers/IntlMessages';
import { Button } from 'reactstrap';

const AddButton = ({ addfunction, style }) => (
  <div className={classes.paddingEmp} style={style}>
    <Button
      style={{
        backgroundColor: '#223620',
        fontWeight: 'bold',

        borderColor: '#223620',
      }}
      size='sm'
      onClick={() => addfunction()}>
      <IntlMessages id='pages.add-new' />
      <img src={iconPlus} alt='iconplus' className={classes.iconplus} />
    </Button>
  </div>
);
export default AddButton;
