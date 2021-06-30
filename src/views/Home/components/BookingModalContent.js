import React from 'react';
import { Form, Input, Button, Col, Space, Divider, DatePicker } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    }
}


function BookingModalContent(props) {

    const { RangePicker } = DatePicker;

    const { onSubmit } = props
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onSubmit(values)
        form.resetFields()
    }

    return (
        <div>
            <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} >
                <Form.Item name='clientName' label="Full Name"
                    rules={[{ required: true, message: 'Please enter client name!' }]}  >
                    <Input />
                </Form.Item>

                <Form.Item name='clientPhone' label="Phone Number"
                    rules={[{ required: true, message: 'Please enter client phone!' }]}  >
                    <Input />
                </Form.Item>

                <Form.Item name='period' label="Desired period"
                    rules={[{ required: true, message: 'Please enter period!' }]} >
                    <RangePicker />
                </Form.Item>

                <Form.Item name='description' label="Notes">
                    <Input.TextArea />
                </Form.Item>

                <Divider />

                <Col span={12} offset={17}>
                    <Space >
                        <Button onClick={props.onCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">OK</Button>
                    </Space>
                </Col>
            </Form>
        </div>
    )
}

export default BookingModalContent;