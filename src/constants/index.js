import { meta, shopify, starbucks, tesla, hids } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    unity,
    unrealengine,
    figma,
    dhitva,
    thetannmanngaadi,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: unity,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: unrealengine,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: figma,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
];

export const experiences = [
    {
        title: "Free lancing",
        company_name: "Fiver / Freelancer",
        icon: freelancer,
        iconBg: "#accbe1",
        date: "Apr 2022 - Dec 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "AR / VR Developer",
        company_name: "HiDs Technology - Full Time",
        icon: hids,
        iconBg: "#fbc3bc",
        date: "Jul 2023 - May 2023",
        points: [
            "Started as a intern and After 5 months i promoted to AR / VR Developer",
            "Worked on “AR with IOT & Digital twin” Project called “MMS 4.0” an Industry 4.0 Project for a Client. In this project I showcase how Augmented Reality Worked with IOT using AWS with Physical machine.",
            "Taking the Realtime data and showing to user in Augmented reality for that user can see and manage the machine in Augmented reality only establishes one side connection for visualization",
            "Worked on “Web AR based Platform” (Product) for AR Creation & Also worked on “Web AR Mirror”",
        ],
    },
    {
        title: "AR / VR Developer",
        company_name: "Cad Mech - Client - Remote",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Aug 2023 - Oct 2023",
        points: [
            "Build Augmented Reality application for their Product to showing case there working principle in AR.",
            "Build Different application for their “Hydraulic” and “Pneumatic” machinery Products, Application focus on EdTech and Automation Industry.",
        ],
    },
    {
        title: "Project Lead (AR / VR Developer)",
        company_name: "HiDs Technology - Full Time",
        icon: hids,
        iconBg: "#b7e4c7",
        date: "Jul 2022 - Dec 2022",
        points: [
            "Managing Product like “WeldVerse” – VR Project, Created UI using Figma and managing all the document (Gathered data) for this project, managed a Team of 4 people, this project focus on EdTech and Training Industry.",
            "Developed one Virtual reality Product called “ShipVerse” -VR Project focusing on Shipping Industry. Developing the Project with one mentor and 3D modeler and managing it, this project focus on Shipping Industry.",
            "Worked on an AR application for one of our partner products “Devkit” – “AR with IOT & Digital twin” - AR application focusing on EdTech.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Unity Developer (AR / VR Developer)",
        company_name: "Dhitva - New Dawn in Education - Internship",
        icon: dhitva,
        iconBg: "#b7e4c7",
        date: "Sep 2024 - Present",
        points: [
            "",
            "",
            "",
            "",
        ],
    },
    {
        title: "3D developer (AR / VR Developer)",
        company_name: "The Tann Mann Gaadi - Part Time",
        icon: thetannmanngaadi,
        iconBg: "#b7e4c7",
        date: "Sep 2024 - Present",
        points: [
            "",
            "",
            "",
            "",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/souradeepAsh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/souradeep-ash/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Semicon Verse',
        description: 'A Project Focus on “Semiconductor Industry”, where I try to showcase some machine work in VR that they can use for Training purpose, Implemented Realtime Physical Machine in Unity VR, Use different Language like Hindi and English for content creation.',
        videoId: "hQi__-ABlcA",
        link: '',
        linkLabel: "N/A",
        category: 'VR'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Godrej Property Architectural View',
        description: 'A simple Architectural view build for Godrej to showcase the property into 3D with Virtual Reality functionality using Unity3D and Used Cinemachine camera video capture, had used some Urban Plugin to generate the Human and car traffic.',
        videoId: "FxL5LjU7xRQ",
        link: 'N/A',
        linkLabel: "N/A",
        category: 'VR'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Virtual Reality Car Controller',
        description: 'Working on Arduino with Unity creating one car driving gear, Creating one Car controller for one of my Project, Using Blender to create model.',
        videoId: "eUfiwW29kBk",
        link: '',
        linkLabel: "N/A",
        category: 'VR'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Sword and VR Game',
        description: 'A Virtual reality Game that i had started in my 3-rd year for learning purpose but i had added extra sword, gun and different level after that.',
        videoId: "WXO2YPJlY-w",
        link: 'https://drive.google.com/file/d/1s1lBzpJiZSSVAxfgeQEuZ5yxdWxZdsx_/view?usp=drive_link',
        linkLabel: "Download Link",
        category: 'VR'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Virtual Reality School',
        description: 'A learning platform that help students to collaborate with each other in a school environment, i had used Photon Pun for Room creation and used voice and chat for communication.',
        videoId: "",
        link: '',
        linkLabel: "N/A",
        category: 'VR'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Aero Verse',
        description: 'An industry project that i had built when i work in my previous company a small part due to restriction i cant show full, i had worked on Inner Engine part functionality',
        videoId: "YgqCffO6B2Q",
        link: '',
        linkLabel: "N/A",
        category: 'VR'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Aero Verse',
        description: 'A POC of drill screw',
        videoId: "yigsGZ2p3-c",
        link: '',
        linkLabel: "N/A",
        category: 'VR'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AC-DC Motor',
        description: 'An interactive example of AC DC motor works, useful for K12 students, Used Vuforia-Air detection for this Particular work',
        videoId: "7JDiPzYlRts",
        link: 'https://drive.google.com/file/d/1Wv7kyUwJQ8wdftLZaHxHjxEIqu58AnEN/view?usp=drive_link',
        linkLabel: "Download Link",
        category: 'AR'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Hydraulic & Pneumatic AR',
        description: 'A small Client project that i had done when i am working at Pune. Multiple experiment is done with this Physical machine. Later on we used IOT-AR to maintain and training purpose.',
        videoId: "p8gj0sxK5WU",
        link: '',
        linkLabel: "N/A",
        category: 'AR'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AR Business Card',
        description: '',
        videoId: "",
        link: '',
        linkLabel: "N/A",
        category: 'AR'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AR Kids Story Book',
        description: 'A book for small Kids. Learning about basic alphabeted can be more easy with AR Application.',
        videoId: "JW7E5y-KSvk",
        link: '',
        linkLabel: "N/A",
        category: 'AR'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'MMS 4.0 - Industry 4.0 AR-IOT Project',
        description: '',
        videoId: "nweAPpPIic4",
        link: 'https://www.linkedin.com/posts/souradeep-ash_ar-iot-aws-activity-7172542984008269824-H8BY?utm_source=share&utm_medium=member_desktop',
        linkLabel: "N/A",
        category: 'AR'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AR Ecommerce Application',
        description: '',
        videoId: "",
        link: '',
        linkLabel: "Soon coming",
        category: 'Web AR'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Web AR Body tracking',
        description: 'An Web ar application focusing on Geenee AR SDK one of the best SDK that provides Virtual try on. I built this using Typescript from the scratch. They are using Tensor flow in there backend to track the body. It will be great game changer for ecommerce Website to integrate this.',
        videoId: "7mlwixqgqHA",
        link: 'https://souradeepash.github.io/Full-Body-tracking/',
        linkLabel: "Live Link",
        category: 'Web AR'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Knee Preop Planning',
        description: 'Focusing on Knee Preop planning for medical - an assignment given by a company.',
        videoId: "1K6OgFGPW9Y",
        link: 'https://souradeepash.github.io/Knee-Prop-Build/',
        linkLabel: "Live Link",
        category: 'Web AR'
    }
];