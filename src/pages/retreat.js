import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const RetreatPage = () => {
    return (
        <Layout>
        <h1>Athena Retreat 2024</h1>
        <p>
            In February 2024, Athena fellows, staff, speakers, and coaches spent five days together in Oxford to participate in a compact seminar program. Speakers from organizations including Apollo Research, Aligned AI, PIBBSS, Foresight Institute, GPI, and Cooperative AI Foundation met with mentees to share their research agendas and guidance.
        </p>

        <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="retreat-image-swiper"
                style={{ width: '100%', height: 'auto' }}
            >
                <SwiperSlide>
                    <StaticImage src="../../static/images/retreat/r2.jpg" alt="Retreat Image 2" layout="fullWidth" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../static/images/retreat/r1.jpg" alt="Retreat Image 1" layout="fullWidth" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../static/images/retreat/r3.jpg" alt="Retreat Image 3" layout="fullWidth" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../static/images/retreat/r4.jpg" alt="Retreat Image 3" layout="fullWidth" />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../../static/images/retreat/r5.jpg" alt="Retreat Image 3" layout="fullWidth" />
                </SwiperSlide>
        </Swiper>

        <h2>Retreat Seminar</h2>
        <ul>
            <li>Fieldmapping of technical approaches and institutions</li>
            <li>AI policy and governance</li>
            <li>Career, funding, and networking opportunities</li>
            <li>How to thrive as a woman or genderqueer individual in AI safety</li>
        </ul>
        <h3>Seminar Presentations</h3>
        <ul>
            <li><strong>Charlie Griffin:</strong> Key Alignment Concepts</li>
            <li><strong>Rebecca Gorman:</strong> Aligned AI's approach to alignment and safety research / Succeeding and moving up the ladder as a woman in technical roles</li>
            <li><strong>Marius Hobbhahn:</strong> Deceptive alignment: where most of the catastrophic AI risk comes from</li>
            <li><strong>Elliott Thornley:</strong> The Shutdown Problem - Incomplete Preferences as a Solution</li>
            <li><strong>Katie Glass:</strong> Self-Promotion workshop</li>
            <li><strong>Lewis Hammond:</strong> Multi-Agent Risks from Advanced AI</li>
            <li><strong>Niamh Peren:</strong> Foresight Opportunities</li>
            <li><strong>Linda Linsefors:</strong> Shared ontology/abstractions is necessary for alignment/helpfulness/low-impact</li>
            <li><strong>Alan Chan:</strong> Governing Agents</li>
            <li><strong>Nora Ammann:</strong> Untitled</li>
        </ul>

        <img src="/images/bar.svg" alt="Decorative bar" className="bar bar-inverse" />
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="testimonial-swiper"
            >
                <SwiperSlide>
                    <div className="quote">
                        <span className="quotation-marks">"</span>
                        Before arriving I didn't have any well-defined plan for the future, my only intention was: study, study and study. And now I feel very motivated, I understand that I am perfectly capable of working in this area and setting up my own business.”  <br /> Maria, Athena Retreat Attendee ‘24
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="quote">
                        <span className="quotation-marks">"</span>
                        I also feel a little more confident now, because the atmosphere here was really encouraging.” <br /> Jeanne, Athena Fellow ‘24
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="quote">
                        <span className="quotation-marks">"</span>
                        I feel so much more confident about applying for jobs and entering the field, and about making my own contributions with my research. I feel like I actually have a sense of what the field is that I'm entering. I've met a bunch of incredible people, made connections that I'm sure will last, and learned a ton in the process." <br /> Adelin, Athena Fellow ‘24 <br />— a 2024 fellow
                    </div>
                </SwiperSlide>
            </Swiper>
        <img src="/images/bar.svg" alt="Decorative bar" className="bar" />
        </Layout>
    );
};

export default RetreatPage;
