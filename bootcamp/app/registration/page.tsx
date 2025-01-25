'use client';
import { Typography, Form, Input, Button, Select, Checkbox } from 'antd';
const { Title } = Typography;
const { Option } = Select;
import { useForm, ValidationError } from '@formspree/react';

export default function RegistrationPage() {
    const [state, handleSubmit] = useForm("mnnjnebg");

    if (state.succeeded) {
        window.location.href = '/';
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        handleSubmit(values);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center', backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', fontFamily: 'Inter, sans-serif' }}>
            <Title style={{ color: '#1E293B', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Register for the Bootcamp</Title>
            <Form layout="vertical" onFinish={onFinish} style={{ marginTop: '20px' }}>
                <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="John Doe" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter a valid email' }]}>
                    <Input type="email" placeholder="example@mail.com" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                    <Input placeholder="+123456789" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Highest Degree Obtained" name="degree" rules={[{ required: true, message: 'Please select your highest degree' }]}>
                    <Select placeholder="Select your degree" style={{ width: '100%', borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }}>
                        <Option value="highSchool">High School Diploma</Option>
                        <Option value="associate">Associate Degree</Option>
                        <Option value="bachelor">Bachelor&apos;s Degree</Option>
                        <Option value="master">Master&apos;s Degree</Option>
                        <Option value="doctorate">Doctorate</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Field of Study" name="fieldOfStudy">
                    <Input placeholder="Computer Science" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Programming Languages Known" name="programmingLanguages">
                    <Select mode="tags" placeholder="Select or type programming languages" style={{ width: '100%', borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }}>
                        <Option value="python">Python</Option>
                        <Option value="javascript">JavaScript</Option>
                        <Option value="java">Java</Option>
                        <Option value="csharp">C#</Option>
                        <Option value="ruby">Ruby</Option>
                        {/* Add more languages as needed */}
                    </Select>
                </Form.Item>
                <Form.Item label="Agree to Terms and Conditions" name="termsAndConditions" valuePropName="checked" rules={[{ required: true, message: 'Please agree to the terms and conditions' }]}>
                    <Checkbox>
                        I agree to the <a href="/terms-and-conditions">Terms and Conditions</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            background: '#f97316',
                            borderColor: '#f97316',
                            borderRadius: '8px',
                            padding: '10px 40px',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                        }}
                        disabled={state.submitting}
                    >
                        Submit
                    </Button>
                </Form.Item>
                <ValidationError
                    prefix="Form"
                    field="form"
                    errors={state.errors}
                />
            </Form>
        </div>
    );
}