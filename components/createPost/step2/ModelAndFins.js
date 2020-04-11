import React from 'react';
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INPUT } from '../../../actions/types';

const ModelAndFins = () => {
  const dispatch = useDispatch();
  const { shaper, model, finSystem, finConfiguration } = useSelector(
    state => state.createpost
  );

  function handleInputChange(name, value) {
    const payload = { name: name, value: value };
    dispatch({ type: SET_INPUT, payload: payload });
  }

  return (
    <Form>
      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Shaper:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Input
            placeholder="Shaper..."
            value={shaper}
            onChange={event => handleInputChange('shaper', event.target.value)}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Model:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Input
            placeholder="Model..."
            value={model}
            onChange={event => handleInputChange('model', event.target.value)}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Fin System:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Select
            placeholder="Fin System..."
            style={{ width: '100%' }}
            onChange={event => handleInputChange('finSystem', event)}
          >
            <Select.Option value="Future">Future</Select.Option>
            <Select.Option value="FCS I">FCS I</Select.Option>
            <Select.Option value="FCS II">FCS II</Select.Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Configuration:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Select
            placeholder="Fin Configuration..."
            style={{ width: '100%' }}
            onChange={event => handleInputChange('finConfiguration', event)}
          >
            <Select.Option value="1 - Single Fin">1 - Single Fin</Select.Option>
            <Select.Option value="2 - Twin Fin">2 - Twin Fin</Select.Option>
            <Select.Option value="3 - Thruster">3 - Thruster</Select.Option>
            <Select.Option value="4 - Quad">4 - Quad</Select.Option>
            <Select.Option value="5 - 5 Fin">5 - 5 Fin</Select.Option>
          </Select>
        </Col>
      </Row>
    </Form>
  );
};

export default ModelAndFins;
