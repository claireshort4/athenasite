import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { ParticipantCard } from "../components/ParticipantCard"
import { Grid } from "@mui/material"

const participants = [
    {
        name: "Adrià Alonso-Garriga",
        image: "/images/participants/adria.png",
        bio: "Adrià is a scientist at FAR, working on understanding what learned optimizers want. Previously he worked at Redwood Research on neural network interpretability. He holds a PhD from the University of Cambridge, where he worked on Bayesian neural networks; his advisor was Prof. Carl Rasmussen. He was a co-organiser of the ICLR 2019 workshop “Safe Machine Learning: Specification, Robustness and Assurance”."
    },
    {
        name: "Lisa Thiergart",
        image: "/images/participants/lisa.jpg",
        bio: "Lisa is a computer scientist turned technical AI safety researcher with an interest in neurotechnology and entrepreneurship. Previously, she worked on activation engineering at SERI MATS with Alex Turner, as well as explored connections between neurotechnology and alignment. She’s currently working for the Machine Intelligence Research Institute in Berkeley as research manager on various theoretical and empirical alignment agendas. Separately, she’s part of Foresight's neurotechnology group and continues to be very interested in Whole Brain Emulation and Human Enhancement."
    },
    {
        name: "Mary Phuong",
        image: "/images/participants/mary.jpg",
        bio: "Mary works on AGI safety, specifically dangerous capability evaluations and responsible scaling at DeepMind. Previously, she was a bootcamp instructor at Redwood Research. She holds a PhD in Machine Learning, advised by Christoph H. Lampert, in theoretical research in deep learning."
    },
    {
        name: "Evan Hubinger",
        image: "/images/participants/evan.png",
        bio: "Evan is the Alignment stress-testing team lead at Anthropic, focused on red-teaming Anthropic’s alignment techniques and evaluations, empirically demonstrating ways in which Anthropic’s alignment strategies could fail. Previously Research Fellow at the Machine Intelligence Research Institute, and experience at OpenAI, Google, Yelp, and Ripple. Author of the Coconut programming language."
    },
    {
        name: "Jesse Hoogland",
        image: "/images/participants/jesse.jpg",
        bio: "Jesse is the Executive director at Timaeus, working on singular learning theory and developmental interpretability. Before that, he was a research assistant at David Krueger's lab in Cambridge studying AI Safety. Before that, he co-founded a healthtech startup automating bariatric surgery patient journeys. Before that, he was studying random neural networks during his masters in theoretical physics at the University of Amsterdam."
    },
    {
        name: "Yolanda Lannquist",
        image: "/images/participants/yolanda.jpg",
        bio: "Yolanda leads AI governance & policy projects at TFS with the mission to align AI through better governance. She directs projects with international organizations, governments, companies, academia and nonprofits towards ethics, safety, security and inclusion. Yolanda is an appointed expert to the OECD AI Policy Observatory, U.S. NIST AI Safety Institute Consortium, UN Broadband Commission on AI Capacity Building, The Economist, and taught AI Policy at IE University in Madrid."
    },
    {
        name: "Roger Grosse",
        image: "/images/participants/roger.jpg",
        bio: "Roger is an Assistant Professor of Computer Science at the University of Toronto, focusing on machine learning. Previously, he was a postdoc at the University of Toronto, after having received a Ph.D. at MIT, studying under Bill Freeman and Josh Tenenbaum. Before that, Roger did his undergraduate degree in symbolic systems and MS in computer science at Stanford University. Roger is a co-creator of Metacademy, a website which uses a dependency graph of concepts to help you formulate personalized learning plans for machine learning and related topics."
    },
    {
        name: "Vanessa Kosoy",
        image: "/images/participants/vanessa.jpg",
        bio: "Vanessa is an AI alignment researcher supported by MIRI and LTFF. Working on the learning-theoretic agenda."
    },
    {
        name: "McKenna Fitzgerald",
        image: "/images/participants/mckenna.jpg",
        bio: "McKenna is a Research Manager at MATS, a technical AI safety fellowship research program. Also mentoring AI governance and policy projects at Athena, a fellowship program for women in AI safety research. Most recently Deputy Director at the Global Catastrophic Risk Institute. Formerly the Director of Academic Affairs at the Consulate General of Israel in San Francisco working on MOU’s, organizing conferences on AI and tech for good, and aiding in diplomatic international relations. Previously, a social media and Marketing Coordinator with a demonstrated history of working in the academic and healthcare industries."
    },
    {
        name: "Quentin Feuillade--Montixi",
        image: "/images/participants/quentin.jpg",
        bio: "Quentin is the Co-founder and CTO at PRISM Eval, which has the goal to work on a new research agenda for AI safety, which they call GenAI Cognitive Science (or GenAI Ethology). They aim to advance the state-of-the-art in evaluating and interpreting frontier AI models. Previously, Quentin was a MATS scholar, mentored by Nicholas Kees Dupuis and Janus and contracted for METR, focusing on evaluating frontier AI models. He obtained his BAC S-SI, math specialization, with mention in 2019."
    },
    {
        name: "Alexandre Variengien",
        image: "/images/participants/alexandre.jpg",
        bio: "Alexandre is an AI safety researcher working to create a vibrant AI safety ecosystem in Paris. His interests include AI governance, interpretability, biology, self-organized systems, and bio-inspired AI. He was working on scalable mechanistic interpretability, looking for macroscopic universal motifs inside LLMs at Conjecture. He previously interned at Redwood Research, researching mechanistic interpretability of language models and leading a team of 10 residents during the REMIX residency program."
    },
    {
        name: "Luciano Cavalcante Siebert",
        image: "/images/participants/luciano.webp",
        bio: "Luciano is an assistant professor at the Interactive Intelligence Group, Delft University of Technology, where he focuses on Responsible Artificial Intelligence. He studied Mechatronics at PUCPR (B.Sc.) and did his M.Sc. and Ph.D. in electrical engineering at the Federal University of Paraná (UFPR), Brazil. During his Ph.D. he also acted as a guest researcher at the Eindhoven University of Technology (TU/e). Prior to his current position, Luciano was a postdoc at TU Delft’s AiTech initiative. Luciano has +8 years of experience in research on developing and applying intelligent techniques to robotics, machine learning, optimization, and automation."
    }
];

const fellows = [
    {
        name: "Thee Ho",
        image: "/images/fellows/thee.png",
    },
    {
        name: "Lhea Beumer",
        image: "/images/fellows/lhea.png",
    },
    {
        name: "Sophia Lloyd George",
        image: "/images/fellows/sophia.png",
    },
    {
        name: "Andrea Murillo",
        image: "/images/fellows/andrea.png",
    },
    {
        name: "Olivia Seow",
        image: "/images/fellows/olivia.png",
    },
    {
        name: "Jeanne Salle",
        image: "/images/fellows/jeanne.png",
    },
    {
        name: "Adelin Kassler",
        image: "/images/fellows/adelin.png",
    },
    {
        name: "Vera Karlin",
        image: "/images/fellows/vera.png",
    },
    {
        name: "Patricia Paskov",
        image: "/images/fellows/patricia.png",
    },
    {
        name: "Nathalie Kirch",
        image: "/images/fellows/nathalie.png",
    },
    {
        name: "Amber van Groenestijn",
        image: "/images/fellows/amber.png",
    },
    {
        name: "Monika Jotautaite",
        image: "/images/fellows/monika.png",
    },
    {
        name: "Rebecca Hawkins",
        image: "/images/fellows/rebecca.png",
    }
];



const Participants = () => {
    return (
        <Layout>
            <h1>Partcipants</h1>
            <h2>Mentors</h2>
            <Grid container spacing={2}>
                {participants.map((participant, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ParticipantCard {...participant} />
                    </Grid>
                ))}
            </Grid>
            <h2>Fellows</h2>
            <Grid container spacing={2}>
                {fellows.map((fellow, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ParticipantCard {...fellow} img="False" />
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}

export default Participants