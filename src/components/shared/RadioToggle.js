import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, Fragment, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const RadioToggle = ({user, onSearch}) => {

        const [checked, setChecked] = useState(false);
        const [radioValue, setRadioValue] = useState('1');
        console.log('radioValue',radioValue);
      
        const radios = [
          { name: 'Movies', value: '1' },
          { name: 'TV', value: '2' },
        ];

        if(radioValue === '1'){

        } else if (radioValue === '2'){

        }
      
        return (
          <Fragment>           
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-secondary' : 'outline-secondary'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Fragment>
        )
      }


export default RadioToggle