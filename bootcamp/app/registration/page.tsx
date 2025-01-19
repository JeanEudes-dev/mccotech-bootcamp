'use client';
import { Typography, Form, Input, Button, Select, DatePicker, Radio, Checkbox } from 'antd';
const { Title } = Typography;
const { Option } = Select;

export default function RegistrationPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        console.log('Form Submitted:', values);
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
                <Form.Item label="Date of Birth" name="dateOfBirth" rules={[{ required: true, message: 'Please select your date of birth' }]}>
                    <DatePicker style={{ width: '100%', borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please select your gender' }]}>
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                        <Radio value="other">Other</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please select your country' }]}>
                    <Select placeholder="Select your country" style={{ width: '100%', borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }}>
                        <Option value="usa">United States</Option>
                        <Option value="canada">Canada</Option>
                        <Option value="uk">United Kingdom</Option>
                        <Option value="india">India</Option>
                        <Option value="turkey">Turkey</Option>
                        {/* Add more countries as needed */}
                    </Select>
                </Form.Item>
                <Form.Item label="Current Job Title" name="jobTitle">
                    <Input placeholder="Software Engineer" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Current Company" name="company">
                    <Input placeholder="Tech Corp" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Years of Experience" name="yearsOfExperience">
                    <Input type='number' placeholder="5" style={{ width: '100%', borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
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
                <Form.Item label="University/Institute Name" name="university">
                    <Input placeholder="University of Example" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
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
                <Form.Item label="Frameworks/Libraries Familiar With" name="frameworks">
                    <Select mode="tags" placeholder="Select or type frameworks/libraries" style={{ width: '100%', borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }}>
                        <Option value="react">React</Option>
                        <Option value="angular">Angular</Option>
                        <Option value="vue">Vue</Option>
                        <Option value="django">Django</Option>
                        <Option value="spring">Spring</Option>
                        {/* Add more frameworks/libraries as needed */}
                    </Select>
                </Form.Item>
                <Form.Item label="Projects/Work Samples" name="projects">
                    <Input.TextArea rows={4} placeholder="URLs or brief descriptions of your projects" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Short-Term Goals" name="shortTermGoals">
                    <Input.TextArea rows={4} placeholder="Describe your short-term goals" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Long-Term Goals" name="longTermGoals">
                    <Input.TextArea rows={4} placeholder="Describe your long-term goals" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="How Did You Hear About Us?" name="howHeard">
                    <Select placeholder="Select how you heard about us" style={{ width: '100%', borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }}>
                        <Option value="socialMedia">Social Media</Option>
                        <Option value="friend">Friend/Family</Option>
                        <Option value="onlineSearch">Online Search</Option>
                        <Option value="event">Event</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Special Requirements or Accommodations Needed?" name="specialRequirements">
                    <Input.TextArea rows={4} placeholder="Any special requirements or accommodations needed" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
                </Form.Item>
                <Form.Item label="Emergency Contact Information" name="emergencyContact">
                    <Input placeholder="Name and Phone Number" style={{ borderRadius: '8px', borderColor: '#D1D5DB', borderWidth: '2px' }} />
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
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}