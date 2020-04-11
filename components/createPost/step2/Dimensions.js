import React from 'react';
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INPUT } from '../../../actions/types';

const Dimensions = () => {
  const dispatch = useDispatch();
  const { lengthFt, lengthIn, width, depth, volume } = useSelector(
    state => state.createpost
  );

  function handleInputChange(name, value) {
    const payload = { name: name, value: value };
    dispatch({ type: SET_INPUT, payload: payload });
  }

  function handleNumber(name, value) {
    if (isNaN(value.charAt(0))) {
      /* check if first character is a number */
      handleInputChange(name, '');
    } else if (value.slice(-1).charCodeAt(0) === 46) {
      /* prevent decimal to be entered */
      return;
    } else if (name === 'lengthFt' && !isNaN(value) && value < 25) {
      /* check max value of ft and is a number*/
      handleInputChange(name, value);
    } else if (name === 'lengthIn' && !isNaN(value) && value < 12) {
      /* check max value of In and is a number*/
      handleInputChange(name, value);
    } else return;
  }

  function handleFraction(name, value) {
    /* get ascii value of next character entered */
    const character = value.slice(-1);
    const ascii = character.charCodeAt(0);

    /* if first character is not a number, set to empty string: (FIXES: first character entered was allowed) */
    if (isNaN(value.charAt(0)) || value.charAt(0) === ' ') {
      handleInputChange(name, '');
    } else if (
      /* check if next character is "." "/" or 0-9 */
      (ascii > 45 && ascii < 58) ||
      /* allow empty value */
      value === '' ||
      /* prevent double space */
      (character === ' ' && value.charAt(value.length - 2) !== ' ') ||
      /* prevent double dot */
      (character === '.' && value.charAt(value.length - 2) !== '.')
    ) {
      handleInputChange(name, value);
    } else return;
  }

  function convertFraction(value) {
    eval(value.trim().replace(' ', '+'));
  }

  return (
    <Form>
      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Length:
          </h3>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <Input
            placeholder="6"
            suffix="ft."
            value={lengthFt}
            onChange={event => handleNumber('lengthFt', event.target.value)}
          />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <Input
            placeholder="2 1/4"
            suffix="in."
            value={lengthIn}
            onChange={event => handleFraction('lengthIn', event.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Width:
          </h3>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <Input
            placeholder="18 3/8"
            suffix="in."
            value={width}
            onChange={event => handleFraction('width', event.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Depth:
          </h3>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <Input
            placeholder="2 1/2"
            suffix="in."
            value={depth}
            onChange={event => handleFraction('depth', event.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Volume:
          </h3>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <Input
            placeholder="30"
            suffix="liters."
            value={volume}
            onChange={event => handleFraction('volume', event.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Dimensions;
