'use client';
import { Typography, Button, Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { FaCloud, FaLock, FaPython, FaRobot } from 'react-icons/fa';
import Countdown from 'react-countdown';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const { Title, Paragraph } = Typography;

// Sample trainer data
const trainers = [
    {
        name: 'Mr Sandeepraj',
        bio: 'Certified Ethical Hacker with a passion for cybersecurity and ethical hacking.',
        image: '/cyber.jpg',
    },
    {
        name: 'Mr Jean-Eudes ASSOGBA',
        bio: 'Certified Full Stack Developer with expertise in Python, JavaScript, and modern web technologies.',
        image: '/me.jpg',
    },
    {
        name: 'Mr McCarthy Sandy',
        bio: 'Cloud Computing Specialist with hands-on experience in AWS and Google Cloud.',
        image: '/mcctech.jpg',
    },
];

export default function LandingPage() {
    // Countdown Timer for Registration Deadline
    const renderer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => {
        return (
            <div style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}>
                <strong>{days}</strong> days <strong>{hours}</strong>:<strong>{minutes}</strong>:<strong>{seconds}</strong>
            </div>
        );
    };

    return (
        <div className="bg-gradient-to-r from-[#1E293B] to-[#4338CA] text-white min-h-screen font-inter">
            {/* Hero Section */}
            <div className="relative text-center py-20 px-6 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[#1E293B] to-[#4338CA]">
                {/* Background Animation */}
                <div className="absolute inset-0 z-0">
                    <DotLottieReact
                        src="https://lottie.host/3a940fef-183f-4e04-900f-01e71d257e60/HQNXE7gpd2.lottie"
                        loop
                        autoplay
                        style={{
                            height: '700px',
                            width: '700px',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                </div>
                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                    style={{ marginBottom: '30px' }}
                >
                    <Title style={{ color: '#ffffff', fontSize: '4rem', fontWeight: 'bold', lineHeight: '1.2' }}>
                        Join the 2 Weeks Practical Bootcamp
                    </Title>
                    <Paragraph
                        style={{
                            fontSize: '1.75rem',
                            color: '#ffffff',
                            maxWidth: '800px',
                            margin: '20px auto',
                        }}
                    >
                        Learn world-leading technology and earn a certificate to boost your career.
                    </Paragraph>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            background: '#f97316',
                            borderColor: '#f97316',
                            marginTop: '20px',
                            borderRadius: '8px',
                            padding: '10px 30px',
                            fontSize: '1.25rem',
                        }}
                        href="/registration"
                    >
                        Register Now
                    </Button>
                    <div className="mt-8 text-2xl font-semibold">
                        <strong>Dates:</strong> February 10th to 24th, 2025
                    </div>
                </motion.div>
            </div>

            {/* Training Tracks Section */}
            <div className="py-16 text-center gradient-bg">
                <Title
                    level={2}
                    style={{
                        color: '#ffffff',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '40px',
                    }}
                >
                    Training Tracks
                </Title>
                <Row gutter={[16, 32]} justify="center">
                    {[
                        {
                            icon: <FaCloud className="text-6xl text-blue-500" />,
                            title: 'AI and Digitalization',
                            description: 'Explore cutting-edge AI and the impact of digital technologies on industries.',
                        },
                        {
                            icon: <FaLock className="text-6xl text-red-500" />,
                            title: 'Cybersecurity - Ethical Hacking',
                            description: 'Learn the skills to protect systems, networks, and data from malicious attacks.',
                        },
                        {
                            icon: <FaRobot className="text-6xl text-teal-500" />,
                            title: 'Cloud Computing Mastery',
                            description: 'Master cloud computing concepts with hands-on experience in major platforms.',
                        },
                        {
                            icon: <FaPython className="text-6xl text-yellow-500" />,
                            title: 'Python and JavaScript Full Stack Development',
                            description:
                                'Build modern web applications using Python and JavaScript as a full-stack developer.',
                        },
                    ].map((track, index) => (
                        <Col
                            key={index}
                            span={24}
                            sm={12}
                            md={8}
                            lg={6}
                            className="flex justify-center"
                        >
                            <Card
                                hoverable
                                style={{
                                    borderRadius: '12px',
                                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: '#1e293b',
                                    color: '#ffffff',
                                    padding: '20px',
                                    maxWidth: '300px',
                                    transition: 'transform 0.3s',
                                }}
                                className="hover:scale-105"
                                cover={
                                    <div className="flex justify-center items-center h-40">
                                        {track.icon}
                                    </div>
                                }
                            >
                                <Title
                                    level={4}
                                    style={{
                                        color: '#ffffff',
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {track.title}
                                </Title>
                                <Paragraph
                                    style={{
                                        fontSize: '1rem',
                                        color: '#d1d5db',
                                        marginTop: '10px',
                                    }}
                                >
                                    {track.description}
                                </Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            {/* Meet Your Expert Trainers Section */}
            <div className="relative py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-center">
                <Title
                    level={2}
                    style={{
                        color: '#ffffff',
                        fontSize: '2.75rem',
                        fontWeight: 'bold',
                        marginBottom: '2rem',
                    }}
                >
                    Meet Your Expert Trainers
                </Title>
                <Row gutter={[32, 32]} justify="center">
                    {trainers.map((trainer, index) => (
                        <Col span={24} md={12} lg={6} key={index}>
                            <div className="relative group p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <Image
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="rounded-full mb-6 mx-auto border-4 border-blue-500 group-hover:border-orange-500 transition-colors"
                                    width={160}
                                    height={160}
                                    style={{ objectFit: 'cover' }}
                                />
                                <Title
                                    level={4}
                                    style={{
                                        color: '#ffffff',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    {trainer.name}
                                </Title>
                                <Paragraph
                                    style={{
                                        color: '#d1d5db',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    {trainer.bio}
                                </Paragraph>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Why Choose MCCOTECH Section */}
            <div className="relative py-16 bg-gradient-to-r from-[#1E293B] via-[#4338CA] to-[#6366F1] text-center">
                <Title
                    level={2}
                    style={{
                        color: '#ffffff',
                        fontSize: '2.75rem',
                        fontWeight: 'bold',
                        marginBottom: '2rem',
                        letterSpacing: '0.05em',
                    }}
                >
                    Why Choose MCCOTECH?
                </Title>
                <Row gutter={[32, 32]} justify="center">
                    {[
                        {
                            icon: <FaLock className="text-5xl text-blue-400 mb-4" />,
                            title: "Hands-On Training",
                            description:
                                "Engage in practical, real-world projects designed to prepare you for the industry.",
                        },
                        {
                            icon: <FaRobot className="text-5xl text-teal-400 mb-4" />,
                            title: "Learn from Experts",
                            description:
                                "Our trainers are industry leaders with years of experience in cutting-edge technology.",
                        },
                        {
                            icon: <FaCloud className="text-5xl text-purple-400 mb-4" />,
                            title: "Earn a Certificate",
                            description:
                                "Gain a globally recognized certificate to boost your resume and career prospects.",
                        },
                        {
                            icon: <FaPython className="text-5xl text-yellow-400 mb-4" />,
                            title: "Step into High-Growth Careers",
                            description:
                                "Join a community of graduates who are excelling in high-demand fields like AI and full-stack development.",
                        },
                    ].map((feature, index) => (
                        <Col span={24} md={12} lg={6} key={index}>
                            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                                {feature.icon}
                                <Paragraph
                                    style={{
                                        color: '#ffffff',
                                        fontSize: '1.3rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    {feature.title}
                                </Paragraph>
                                <Paragraph
                                    style={{
                                        color: '#d1d5db',
                                        fontSize: '1rem',
                                        lineHeight: '1.5',
                                        textAlign: 'center',
                                    }}
                                >
                                    {feature.description}
                                </Paragraph>
                            </div>
                        </Col>
                    ))}
                </Row>
                {/* Decorative Animation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <DotLottieReact
                        src="https://lottie.host/2c57bd22-e4d7-4d8c-8586-c26c83a25519/P5AzV5bnZ3.lottie"
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>

            <div className="relative text-center py-16 bg-gradient-to-r from-[#1E293B] via-[#FF5722] to-[#4338CA]">
                <Title
                    level={2}
                    style={{
                        color: '#ffffff',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.05em',
                    }}
                >
                    Limited Slots Available – Don&apos;t Miss Out!
                </Title>
                <Paragraph
                    style={{
                        color: '#FBBF24',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                    }}
                >
                    Time is ticking – secure your spot now before it&apos;s too late!
                </Paragraph>
                <div className=' color '>
                    <Countdown
                        date={new Date('2025-02-10T00:00:00')}
                        renderer={renderer}
                        className="text-4xl font-bold tracking-wide"

                    />
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            background: '#f97316',
                            borderColor: '#f97316',
                            borderRadius: '12px',
                            padding: '12px 40px',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                        }}
                        href="/registration"
                    >
                        📝 Register Now
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            background: '#38BDF8',
                            borderColor: '#38BDF8',
                            borderRadius: '12px',
                            padding: '12px 40px',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                        }}
                        href="tel:+905338597852"
                    >
                        📞 Call Now: +90 533 859 7852
                    </Button>
                </div>
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <DotLottieReact
                        src="https://lottie.host/840f72a5-413e-46b7-8609-47c1f63c551f/ZK41tNde4L.lottie"
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>

        </div>
    );
}