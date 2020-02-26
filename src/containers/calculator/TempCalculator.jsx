import React from "react";
import {
  Form,
  InputNumber,
  Button,
  Select,
  Row,
  Col,
  message
} from "antd";
import { fromCelsius, fromFahrenheit, fromKelvin } from "helper/methods";

const { Option } = Select;

const TempCalculator = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const { from, to, value, student_response } = values;
        if (from !== to) {
          let converted = null;
          if (from === "Celsius") {
            converted = fromCelsius(Number(value));
          } else if (from === "Fahrenheit") {
            converted = fromFahrenheit(Number(value));
          } else if (from === "Kelvin") {
            converted = fromKelvin(Number(value));
          }
          if (
            converted &&
            Math.round(converted[to]) === Number(Math.round(student_response))
          ) {
            message.success("correct!");
          } else {
            message.error("incorrect!");
            message.success(`correct ans is!, ${Math.round(converted[to])}`);
          }
        } else {
          message.error("Both unit of measure are same!");
        }
      }
    });
  };
  return (
    <div className="temp_calc__container flex-x center">
      <Form onSubmit={handleSubmit} className="temprature-form">
        <div className="an-20 bold-text pb15 text-center">
          Temprature Converter
        </div>
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Unit of measure">
              {getFieldDecorator("from", {
                rules: [
                  { required: true, message: "Please select unit of measure!" }
                ]
              })(
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select unit of measure"
                  optionFilterProp="children"
                >
                  <Option value="Celsius">Celsius</Option>
                  <Option value="Fahrenheit">Fahrenheit</Option>
                  <Option value="Kelvin">Kelvin</Option>
                  <Option value="Rankine">Rankine</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Target unit of measure">
              {getFieldDecorator("to", {
                rules: [
                  {
                    required: true,
                    message: "Please select targeted unit of measure!"
                  }
                ]
              })(
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select target unit of measure"
                  optionFilterProp="children"
                >
                  <Option value="Celsius">Celsius</Option>
                  <Option value="Fahrenheit">Fahrenheit</Option>
                  <Option value="Kelvin">Kelvin</Option>
                  <Option value="Rankine">Rankine</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Numerical Value">
          {getFieldDecorator("value", {
            rules: [
              { required: true, message: "Please input numerical value!" }
            ]
          })(
            <InputNumber className="fill-width" placeholder="Numerical Value" />
          )}
        </Form.Item>
        <Form.Item label="Student Response">
          {getFieldDecorator("student_response", {
            rules: [
              { required: true, message: "Please input student response!" }
            ]
          })(
            <InputNumber
              className="fill-width"
              placeholder="Enter student response"
            />
          )}
        </Form.Item>
        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Check
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: "form" })(TempCalculator);
