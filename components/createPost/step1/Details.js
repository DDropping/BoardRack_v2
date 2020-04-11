import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INPUT } from '../../../actions/types';
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';

const Details = () => {
  const dispatch = useDispatch();
  const { title, price, boardType, condition, description } = useSelector(
    state => state.createpost
  );

  function handleInputChange(name, value) {
    const payload = { name: name, value: value };
    dispatch({ type: SET_INPUT, payload: payload });
  }

  return (
    <Form>
      <Row gutter={[16, 16]}>
        <Col xs={7} sm={7} md={7}>
          <h3 style={{ textAlign: 'right' }}>Title:</h3>
        </Col>
        <Col xs={17} sm={17} md={17}>
          <Input
            placeholder="Surfboard"
            value={title}
            onChange={event => handleInputChange('title', event.target.value)}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={7} sm={7} md={7}>
          <h3 style={{ textAlign: 'right' }}>Price:</h3>
        </Col>
        <Col xs={17} sm={17} md={17}>
          <InputNumber
            style={{ width: '100%' }}
            value={price}
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={event => handleInputChange('price', event)}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={7} sm={7} md={7} lg={7}>
          <h3 style={{ textAlign: 'right' }}>Type:</h3>
        </Col>
        <Col xs={17} sm={17} md={17} lg={17}>
          <Select
            placeholder="Shortboard"
            value={boardType}
            onChange={event => handleInputChange('boardType', event)}
            style={{ width: '100%' }}
          >
            <Select.Option value="Shortboard">Shortboard</Select.Option>
            <Select.Option value="Longboard">Longboard</Select.Option>
            <Select.Option value="Fish">Fish</Select.Option>
            <Select.Option value="Funboard">Funboard</Select.Option>
            <Select.Option value="Hybrid">Hybrid</Select.Option>
            <Select.Option value="Gun">Gun</Select.Option>
            <Select.Option value="Grovler">Grovler</Select.Option>
            <Select.Option value="SUP">SUP</Select.Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={7} sm={7} md={7} lg={7}>
          <h3 style={{ textAlign: 'right' }}>Condition:</h3>
        </Col>
        <Col xs={17} sm={17} md={17} lg={17}>
          <Select
            placeholder="Used"
            value={condition}
            onChange={event => handleInputChange('condition', event)}
            style={{ width: '100%' }}
          >
            <Select.Option value="New">New</Select.Option>
            <Select.Option value="Lightly Used">Lightly Used</Select.Option>
            <Select.Option value="Used">Used</Select.Option>
            <Select.Option value="Heavily Used">Heavily Used</Select.Option>
            <Select.Option value="Thrashed">Thrashed</Select.Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={0} sm={0} md={7} lg={7}>
          <h3 style={{ textAlign: 'right' }}>Description:</h3>
        </Col>
        <Col xs={24} sm={24} md={17} lg={17}>
          <Input.TextArea
            name="description"
            placeholder="Description..."
            autoSize={{ minRows: 4 }}
            value={description}
            onChange={event =>
              handleInputChange('description', event.target.value)
            }
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Details;
