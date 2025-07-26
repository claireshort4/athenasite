import React from 'react';
import Layout from '../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default function HomePage() {
    return (
        <Layout>
            <h1>AI Alignment Mentorship Program for Women</h1>
            <p>
                Athena is a 10 week remote mentorship program for women looking to strengthen their research skills
                and network in technical <a href="https://en.wikipedia.org/wiki/AI_alignment">AI alignment</a> research.
                Our goals are to:
            </p>
            <ul>
                <li>Increase representation of women in a male dominated field and promote a diversity of ideas in the AI safety research community</li>
                <li>Offer a supportive and collaborative space that will enable mentees to learn from experienced professionals in the field of AI safety research</li>
                <li>Provide an inclusive environment that encourages and motivates women to pursue their interests and rapidly grow their knowledge in AI safety research in a nonjudgmental atmosphere</li>
                <li>To foster networking and working relationships within the field, leading to potential opportunities for internships, research collaborations, and future employment/grant opportunities</li>
            </ul>
            <p>
                Our program includes a 1-week in-person retreat during the 10 week remote mentorship by established researchers in the field,
                with networking opportunities and weekly research talks.
            </p>
            
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
                        <span className="quotation-marks">"</span>I feel so much more confident about applying for jobs and entering the field, and about making my own contributions with my research. I feel like I actually have a sense of what the field is that I'm entering. I've met a bunch of incredible people, made connections that I'm sure will last, and learned a ton in the process.” <br /> a 2024 fellow
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="quote">
                        <span className="quotation-marks">"</span>Athena gets some competent researchers into the field that otherwise may not have!" <br /> Adría Alonso, 2024 mentor
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="quote">
                        <span className="quotation-marks">"</span>It's really great seeing women getting interested in this field. Seeing so many men makes my brain subconsciously start thinking this field is a “male thing” when it really shouldn’t be the case. Also seeing people coming into AI Safety outside of EA is exciting too!” <br />  a 2024 fellow
                    </div>
                </SwiperSlide>
            </Swiper>
            <img src="/images/bar.svg" alt="Decorative bar" className="bar" />

            <p>
                Athena aims to equip women with the knowledge, skills, and network they need to thrive in AI alignment research.
                We believe that diversity is a strength, and hope to see this program as a stepping stone towards a more diverse and inclusive AI safety research field.
                This program is designed to offer mentorship opportunities to technically qualified women who are early in their AI alignment research careers or looking
                to transition into the field by connecting them with experienced mentors, resources to upskill, networking, and a supportive community.
            </p>
            <p>
                The remote mentorship program begins on October 14 and ends December 22. The in-person retreat will occur in November.
                We ask that you devote at least 20 hours per week to the program, but working schedules can be discussed with your mentor.
            </p>
        </Layout>
    );
}
