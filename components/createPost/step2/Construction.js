import React from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INPUT } from '../../../actions/types';

const Construction = () => {
  const dispatch = useDispatch();
  const { tail, construction, contour, glassing } = useSelector(
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
            Tail:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Select
            placeholder="Tail Shape..."
            value={tail}
            style={{ width: '100%' }}
            onChange={event => handleInputChange('tail', event)}
          >
            <Select.Option value="Assymetrical">
              Assymetrical Tail
            </Select.Option>
            <Select.Option value="Bat">Bat Tail</Select.Option>
            <Select.Option value="Chop">Chop Tail</Select.Option>
            <Select.Option value="Diamond">Diamond Tail</Select.Option>
            <Select.Option value="Halfcrest Moon">
              Halfcrest Moon Tail
            </Select.Option>
            <Select.Option value="Pin">Pin Tail</Select.Option>
            <Select.Option value="Rocket">Rocket Tail</Select.Option>
            <Select.Option value="Rounded Diamond">
              Rounded Diamond Tail
            </Select.Option>
            <Select.Option value="Rounded Pin">Rounded Pin Tail</Select.Option>
            <Select.Option value="Rounded Square">
              Rounded Square Tail
            </Select.Option>
            <Select.Option value="Round">Round Tail</Select.Option>
            <Select.Option value="Square">Square Tail</Select.Option>
            <Select.Option value="Squash">Squash Tail</Select.Option>
            <Select.Option value="Star">Star Tail</Select.Option>
            <Select.Option value="Swallow">Swallow Tail</Select.Option>
            <Select.Option value="Wing Swallow">
              Wing Swallow Tail
            </Select.Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Construction:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Select
            placeholder="Construction..."
            value={construction}
            style={{ width: '100%' }}
            onChange={event => handleInputChange('construction', event)}
          >
            <Select.Option value="PU">PU(Fiberglass)</Select.Option>
            <Select.Option value="PE">PE(Epoxy)</Select.Option>
            <Select.Option value="EPS">EPS(Epoxy)</Select.Option>
            <Select.Option value="Foam">Foam</Select.Option>
            <Select.Option value="Wood">Wood</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Glassing:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Select
            placeholder="Glassing..."
            value={glassing}
            style={{ width: '100%' }}
            onChange={event => handleInputChange('glassing', event)}
          >
            <Select.Option value="Standard">Standard</Select.Option>
            <Select.Option value="Performance">Performance</Select.Option>
            <Select.Option value="Heavy">Heavy</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Contour:
          </h3>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16}>
          <Input
            placeholder="Contour..."
            value={contour}
            onChange={event => handleInputChange('contour', event.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Construction;
