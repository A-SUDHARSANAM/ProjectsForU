import {
  FiBookOpen,
  FiBox,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiMonitor,
  FiPenTool,
  FiRadio,
  FiRepeat,
  FiSettings,
  FiShield,
  FiTool,
  FiZap,
} from 'react-icons/fi'

import type { Service, ServiceDetailContent } from '../types/site'

export const serviceDetails: ServiceDetailContent[] = [
  {
    title: 'Electronics Product Development',
    slug: 'electronics-product-development',
    subtitle: 'Circuit design, PCB planning, component strategy, and prototype validation for product-ready hardware.',
    seoTitle: 'Electronics Product Development | ProjectsforU',
    seoDescription:
      'Build circuit boards, electronic prototypes, PCB layouts, and validated hardware systems with ProjectsforU.',
    description:
      'Concept-to-prototype circuit design, PCB planning, component selection, testing, and product-ready validation.',
    longDescription: [
      'We help transform raw hardware ideas into structured electronic systems with clear architecture, practical component choices, and testable prototype milestones.',
      'The work covers circuit planning, PCB guidance, sensor and module selection, power considerations, bring-up support, validation notes, and handoff documentation for students, startups, and industry teams.',
    ],
    icon: FiCpu,
    cta: 'Learn More',
    href: '/services/electronics-product-development',
    gradient: 'from-secondary via-cyan-300 to-blue-500',
    image: '/service-visuals/electronic%20product%20development.jpg',
    features: [
      { title: 'Circuit Architecture', description: 'Block diagrams, signal flow, power paths, and component-level planning.', icon: FiCpu },
      { title: 'PCB Readiness', description: 'Layout guidance, connector strategy, footprints, and board bring-up support.', icon: FiGitBranch },
      { title: 'Prototype Testing', description: 'Measurement plans, debug checkpoints, and validation-ready documentation.', icon: FiCheckCircle },
    ],
    technologies: ['KiCad', 'Altium Concepts', 'Oscilloscope Testing', 'Sensors', 'Power Modules', 'ESP32', 'Arduino', 'STM32'],
    workflow: [
      { title: 'Requirement Mapping', description: 'Clarify the use case, operating conditions, interfaces, and success criteria.' },
      { title: 'Architecture Design', description: 'Define circuit blocks, modules, power requirements, and test strategy.' },
      { title: 'Prototype Build', description: 'Assemble, integrate, and debug the circuit with practical checkpoints.' },
      { title: 'Validation Handoff', description: 'Document tests, limitations, improvements, and next manufacturing steps.' },
    ],
    benefits: [
      'Clear electronics roadmap from idea to prototype',
      'Practical component choices based on availability and risk',
      'Debug-friendly design approach',
      'Documentation that helps you explain and maintain the build',
    ],
    relatedProjects: ['Smart Microplastic Detection System', 'NFC Audio Learning Device', 'Smart Tank Monitoring System'],
    faqs: [
      { question: 'Can you help if I only have a concept?', answer: 'Yes. We can convert a concept into requirements, circuit blocks, and a practical prototype plan.' },
      { question: 'Do you support PCB design?', answer: 'Yes. We support PCB planning, layout guidance, review, and bring-up workflows depending on the project scope.' },
      { question: 'Can you document the project for academic submission?', answer: 'Yes. We can include wiring notes, architecture diagrams, testing steps, and explanation-ready documentation.' },
    ],
  },
  {
    title: 'Robotics & Automation',
    slug: 'robotics-automation',
    subtitle: 'Robot control, automation workflows, motion logic, and practical machine integration.',
    seoTitle: 'Robotics & Automation Services | ProjectsforU',
    seoDescription:
      'Create robotics and automation projects with motion control, sensor feedback, workflow sequencing, and industrial logic.',
    description:
      'Smart robotic systems, automation workflows, control logic, motion systems, and practical machine integration.',
    longDescription: [
      'We build robotics and automation systems that connect mechanical movement, sensing, control logic, and operator-friendly workflows.',
      'From student robots to industrial process demos, each engagement focuses on repeatable behavior, understandable control flow, and safe demonstration-ready execution.',
    ],
    icon: FiRepeat,
    cta: 'Learn More',
    href: '/services/robotics-automation',
    gradient: 'from-accent via-amber-300 to-secondary',
    image: '/service-visuals/roboticsautomation.jpg',
    features: [
      { title: 'Motion Control', description: 'Motor selection, control loops, movement logic, and path behavior.', icon: FiRepeat },
      { title: 'Automation Logic', description: 'Task sequencing, state machines, I/O coordination, and process flow.', icon: FiSettings },
      { title: 'Machine Integration', description: 'Sensors, actuators, controllers, and demo-ready operator interaction.', icon: FiTool },
    ],
    technologies: ['Arduino', 'ESP32', 'ROS Concepts', 'KUKA Workflows', 'PLC I/O', 'Servo Motors', 'Stepper Motors', 'Sensors'],
    workflow: [
      { title: 'System Study', description: 'Define the robot task, motion requirements, environment, and safety needs.' },
      { title: 'Control Strategy', description: 'Plan actuators, sensors, logic states, and expected machine behavior.' },
      { title: 'Integration', description: 'Build the control flow, connect hardware, and tune motion responses.' },
      { title: 'Demo Validation', description: 'Test repeatability, failure cases, and handoff instructions.' },
    ],
    benefits: [
      'Clear automation logic that is easy to demonstrate',
      'Balanced hardware and software integration',
      'Repeatable robot behavior and workflow sequencing',
      'Support for student, startup, and industrial use cases',
    ],
    relatedProjects: ['KUKA Robot Automation Projects', 'Smart Tank Monitoring System', 'Smart Indoor Camera System'],
    faqs: [
      { question: 'Can you build industrial robot demos?', answer: 'Yes. We can support robot workflow planning, task routines, I/O coordination, and demonstration scenarios.' },
      { question: 'Do you handle both hardware and code?', answer: 'Yes. Robotics projects usually include mechanical planning, electronics, firmware, and control logic.' },
      { question: 'Can automation projects include dashboards?', answer: 'Yes. We can connect automation states or sensor values to dashboards when monitoring is required.' },
    ],
  },
  {
    title: 'IoT Solutions',
    slug: 'iot-solutions',
    subtitle: 'Connected devices, telemetry, dashboards, alerts, and reliable sensor-to-cloud workflows.',
    seoTitle: 'IoT Solutions | ProjectsforU',
    seoDescription:
      'Build IoT systems with sensors, wireless communication, dashboards, telemetry, alerts, and embedded device workflows.',
    description:
      'Connected devices, sensor networks, wireless communication, dashboards, and data pipelines for real-world systems.',
    longDescription: [
      'We design IoT solutions that move data from physical devices to useful interfaces, alerts, dashboards, and decision workflows.',
      'Projects can include sensor selection, firmware, communication protocols, cloud-ready APIs, dashboard structure, and field-oriented reliability planning.',
    ],
    icon: FiRadio,
    cta: 'Learn More',
    href: '/services/iot-solutions',
    gradient: 'from-emerald-400 via-secondary to-cyan-500',
    image: '/service-visuals/IOT%20solutions.jpg',
    features: [
      { title: 'Sensor Networks', description: 'Device planning, sensor calibration, and reliable field data capture.', icon: FiRadio },
      { title: 'Telemetry Pipeline', description: 'MQTT, HTTP, packet structure, data routing, and backend readiness.', icon: FiDatabase },
      { title: 'Dashboards & Alerts', description: 'Live status screens, thresholds, notifications, and review flows.', icon: FiMonitor },
    ],
    technologies: ['ESP32', 'MQTT', 'HTTP APIs', 'Firebase Concepts', 'Node APIs', 'React Dashboards', 'LoRa', 'Wi-Fi'],
    workflow: [
      { title: 'Device Scope', description: 'Identify measurements, update frequency, power needs, and environment.' },
      { title: 'Connectivity Plan', description: 'Choose communication flow, protocol, payload format, and backend path.' },
      { title: 'Dashboard Build', description: 'Create useful views for monitoring, alerts, and operational decisions.' },
      { title: 'Reliability Review', description: 'Test edge cases, connectivity gaps, and data accuracy assumptions.' },
    ],
    benefits: [
      'Practical device-to-dashboard architecture',
      'Real-time visibility for physical systems',
      'Alert logic shaped around actual operating needs',
      'Scalable foundation for pilots and demos',
    ],
    relatedProjects: ['Smart Tank Monitoring System', 'CubeSat Telemetry System', 'NFC Audio Learning Device'],
    faqs: [
      { question: 'Can you build both the device and dashboard?', answer: 'Yes. IoT work can include embedded firmware, backend APIs, and dashboard UI.' },
      { question: 'Which connectivity options do you support?', answer: 'Common options include Wi-Fi, MQTT, HTTP, LoRa concepts, Bluetooth workflows, and serial gateways.' },
      { question: 'Can IoT projects send alerts?', answer: 'Yes. We can implement threshold alerts, notification logic, and dashboard status indicators.' },
    ],
  },
  {
    title: 'Embedded Systems',
    slug: 'embedded-systems',
    subtitle: 'Firmware, microcontroller interfaces, power-aware behavior, and reliable hardware control.',
    seoTitle: 'Embedded Systems Development | ProjectsforU',
    seoDescription:
      'Develop embedded firmware, microcontroller projects, hardware interfaces, device logic, and prototype control systems.',
    description:
      'Firmware, microcontroller programming, hardware interfaces, power-aware design, and reliable device behavior.',
    longDescription: [
      'We build embedded systems where firmware, electronics, timing, interfaces, and device behavior need to work together predictably.',
      'Support includes microcontroller programming, sensor and actuator integration, communication protocols, state machines, debugging, and documentation.',
    ],
    icon: FiGitBranch,
    cta: 'Learn More',
    href: '/services/embedded-systems',
    gradient: 'from-violet-400 via-secondary to-blue-500',
    image: '/service-visuals/embedded%20systems.jpg',
    features: [
      { title: 'Firmware Logic', description: 'State machines, timing, interrupts, drivers, and robust device behavior.', icon: FiGitBranch },
      { title: 'Hardware Interfaces', description: 'Sensors, actuators, serial communication, displays, and modules.', icon: FiCpu },
      { title: 'Power & Reliability', description: 'Power-aware design choices, error handling, and debug workflows.', icon: FiShield },
    ],
    technologies: ['C/C++', 'Arduino', 'ESP-IDF Concepts', 'STM32', 'I2C', 'SPI', 'UART', 'FreeRTOS Concepts'],
    workflow: [
      { title: 'Behavior Definition', description: 'Map what the device must sense, decide, display, trigger, and report.' },
      { title: 'Interface Planning', description: 'Choose microcontroller, communication protocols, and module wiring.' },
      { title: 'Firmware Build', description: 'Implement device logic, test modules, and integrate the full loop.' },
      { title: 'Debug & Handoff', description: 'Validate behavior, document setup, and prepare demo explanations.' },
    ],
    benefits: [
      'Reliable firmware shaped around real device behavior',
      'Clear wiring and interface documentation',
      'Debuggable architecture for future changes',
      'Strong fit for academic and prototype hardware projects',
    ],
    relatedProjects: ['CubeSat Telemetry System', 'NFC Audio Learning Device', 'Smart Indoor Camera System'],
    faqs: [
      { question: 'Which microcontrollers can you work with?', answer: 'Common platforms include Arduino, ESP32, STM32 concepts, Raspberry Pi Pico, and similar boards.' },
      { question: 'Can you fix existing firmware?', answer: 'Yes. We can review existing code, identify failures, and refactor or rebuild the logic if needed.' },
      { question: 'Do you provide wiring documentation?', answer: 'Yes. Handoff can include wiring notes, pin maps, test instructions, and explanation material.' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    subtitle: 'Computer vision, intelligent prototypes, prediction workflows, and edge AI experiments.',
    seoTitle: 'AI & Machine Learning Projects | ProjectsforU',
    seoDescription:
      'Create AI and machine learning prototypes with computer vision, predictive models, edge AI, and automation workflows.',
    description:
      'Computer vision, predictive models, intelligent automation, edge AI experiments, and data-backed prototypes.',
    longDescription: [
      'We help teams build AI-enabled prototypes that are explainable, demo-ready, and connected to real inputs instead of abstract model experiments.',
      'Work can include computer vision pipelines, model integration, data preparation, inference flows, edge AI concepts, and dashboard-ready outputs.',
    ],
    icon: FiZap,
    cta: 'Learn More',
    href: '/services/ai-machine-learning',
    gradient: 'from-secondary via-indigo-400 to-accent',
    image: '/service-visuals/AIML.jpg',
    features: [
      { title: 'Computer Vision', description: 'Image capture, preprocessing, detection, classification, and review flows.', icon: FiMonitor },
      { title: 'Model Prototypes', description: 'Prediction workflows, model integration, and evaluation-ready outputs.', icon: FiZap },
      { title: 'Edge AI Concepts', description: 'Lightweight inference workflows for device-connected prototypes.', icon: FiCpu },
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow Concepts', 'PyTorch Concepts', 'Scikit-learn', 'Raspberry Pi', 'Edge AI', 'Data Prep'],
    workflow: [
      { title: 'Problem Framing', description: 'Define what the AI should detect, classify, predict, or automate.' },
      { title: 'Data Strategy', description: 'Plan sample data, preprocessing, labels, and practical evaluation criteria.' },
      { title: 'Prototype Model', description: 'Build or integrate model logic with a usable input and output flow.' },
      { title: 'Demo Integration', description: 'Connect results to a dashboard, device, report, or automation trigger.' },
    ],
    benefits: [
      'AI prototypes that are understandable and demonstrable',
      'Strong fit for computer vision and intelligent hardware',
      'Practical data workflow guidance',
      'Integration with embedded, IoT, and dashboard systems',
    ],
    relatedProjects: ['Smart Microplastic Detection System', 'Smart Indoor Camera System', 'Smart Tank Monitoring System'],
    faqs: [
      { question: 'Do I need a dataset before starting?', answer: 'Not always. We can help define the data requirement and build an early workflow with sample or collected data.' },
      { question: 'Can AI run on hardware?', answer: 'Yes, depending on the model and device. We can plan edge AI concepts or hybrid device-plus-cloud workflows.' },
      { question: 'Can you build computer vision projects?', answer: 'Yes. Computer vision is a strong fit for detection, classification, monitoring, and quality review prototypes.' },
    ],
  },
  {
    title: '3D CAD Design',
    slug: '3d-cad-design',
    subtitle: 'Product housings, mechanisms, assemblies, and manufacturable prototype CAD models.',
    seoTitle: '3D CAD Design Services | ProjectsforU',
    seoDescription:
      'Design 3D CAD models, enclosures, mechanisms, assemblies, and prototype-ready product housings.',
    description:
      'Precise enclosures, mechanisms, assemblies, product housings, and manufacturable CAD models for prototypes.',
    longDescription: [
      'We create CAD models that support real prototype development, from enclosure concepts to functional assemblies and mechanism planning.',
      'The focus is practical: fit, mounting, manufacturability, electronics integration, iteration speed, and handoff files that can support 3D printing or fabrication.',
    ],
    icon: FiLayers,
    cta: 'Learn More',
    href: '/services/3d-cad-design',
    gradient: 'from-sky-400 via-secondary to-emerald-300',
    image: '/service-visuals/3D%20CADD%20Design.jpg',
    features: [
      { title: 'Product Enclosures', description: 'Housings, mounting points, ports, clearances, and device packaging.', icon: FiBox },
      { title: 'Mechanism Design', description: 'Moving parts, assemblies, brackets, fixtures, and functional geometry.', icon: FiSettings },
      { title: 'Print-Ready Models', description: 'Model cleanup, export prep, and iteration for prototype production.', icon: FiPenTool },
    ],
    technologies: ['Fusion 360', 'SolidWorks Concepts', 'STL', 'STEP', 'Enclosure Design', 'DFM Concepts', 'Assembly Planning', '3D Printing Prep'],
    workflow: [
      { title: 'Form Study', description: 'Define dimensions, internal components, mounting needs, and interaction points.' },
      { title: 'Model Design', description: 'Create CAD geometry with clearances, structure, and manufacturability in mind.' },
      { title: 'Review Iteration', description: 'Refine based on fit, strength, assembly needs, and visual direction.' },
      { title: 'Export Handoff', description: 'Prepare files and notes for printing, fabrication, or further engineering.' },
    ],
    benefits: [
      'CAD models shaped around real prototype constraints',
      'Better fit between electronics and enclosure design',
      'Faster design iteration before fabrication',
      'Clean handoff for printing or manufacturing review',
    ],
    relatedProjects: ['NFC Audio Learning Device', 'Smart Indoor Camera System', 'Smart Tank Monitoring System'],
    faqs: [
      { question: 'Can you design an enclosure around my electronics?', answer: 'Yes. Share board dimensions, connector locations, screen/sensor positions, and mounting needs.' },
      { question: 'Can you provide STL or STEP files?', answer: 'Yes. Deliverables can include common prototype and fabrication file formats.' },
      { question: 'Can CAD work include 3D printing preparation?', answer: 'Yes. We can optimize the model for printing and coordinate with 3D printing workflows.' },
    ],
  },
  {
    title: '3D Printing',
    slug: '3d-printing',
    subtitle: 'Rapid prototypes, functional parts, fixtures, iterations, and print-ready optimization.',
    seoTitle: '3D Printing Services | ProjectsforU',
    seoDescription:
      'Create 3D printed prototypes, functional parts, test fixtures, product iterations, and print-ready designs.',
    description:
      'Rapid physical prototypes, functional parts, test fixtures, iterations, and print-ready design optimization.',
    longDescription: [
      'We support rapid physical prototyping with print-ready model preparation, iteration planning, and practical part refinement.',
      'The goal is to move quickly from digital design to usable physical parts for demos, fit checks, enclosures, mechanisms, fixtures, and educational prototypes.',
    ],
    icon: FiBox,
    cta: 'Learn More',
    href: '/services/3d-printing',
    gradient: 'from-accent via-rose-400 to-secondary',
    image: '/service-visuals/3d%20printinng.jpg',
    features: [
      { title: 'Rapid Prototypes', description: 'Fast physical models for demos, validation, and design decisions.', icon: FiBox },
      { title: 'Functional Parts', description: 'Brackets, fixtures, housings, adapters, and practical test components.', icon: FiTool },
      { title: 'Print Optimization', description: 'Orientation, tolerances, support reduction, and iteration guidance.', icon: FiSettings },
    ],
    technologies: ['FDM Printing', 'PLA', 'PETG', 'STL Prep', 'Slicer Settings', 'Tolerance Checks', 'Fixture Design', 'Prototype Iteration'],
    workflow: [
      { title: 'Part Review', description: 'Understand function, dimensions, tolerances, strength, and finish expectations.' },
      { title: 'Print Preparation', description: 'Prepare or adjust model files for printability and material behavior.' },
      { title: 'Prototype Print', description: 'Create the part and review fit, strength, surface, and usability.' },
      { title: 'Iteration', description: 'Refine geometry based on real-world feedback and next-use requirements.' },
    ],
    benefits: [
      'Fast movement from idea to physical prototype',
      'Better fit checks before expensive fabrication',
      'Useful for enclosures, demos, mechanisms, and fixtures',
      'Iteration guidance for stronger final parts',
    ],
    relatedProjects: ['NFC Audio Learning Device', 'Smart Indoor Camera System', 'Smart Microplastic Detection System'],
    faqs: [
      { question: 'Can you print from my existing STL?', answer: 'Yes. We can review the file for printability and suggest improvements if needed.' },
      { question: 'Can you design and print the part?', answer: 'Yes. CAD design and 3D printing can be combined into a single workflow.' },
      { question: 'What kind of parts are best for 3D printing?', answer: 'Enclosures, fixtures, brackets, fit-check models, mechanisms, and demo prototypes are strong candidates.' },
    ],
  },
  {
    title: 'Technical Training & Mentorship',
    slug: 'technical-training-mentorship',
    subtitle: 'Hands-on learning, guided builds, technical explanation, and project mentorship for students and teams.',
    seoTitle: 'Technical Training & Mentorship | ProjectsforU',
    seoDescription:
      'Learn electronics, robotics, IoT, embedded systems, AI, CAD, and prototyping through guided technical mentorship.',
    description:
      'Hands-on learning for students and teams across electronics, robotics, IoT, embedded systems, AI, and prototyping.',
    longDescription: [
      'We provide practical mentorship for learners and teams who want to understand the systems they are building, not just receive a finished project.',
      'Training can be structured around a project, topic, workshop, demo preparation, documentation, or guided problem-solving across hardware and software domains.',
    ],
    icon: FiBookOpen,
    cta: 'Learn More',
    href: '/services/technical-training-mentorship',
    gradient: 'from-primary via-blue-500 to-secondary',
    image: '/service-visuals/technical%20training%20and%20mentorship.jpg',
    features: [
      { title: 'Guided Project Builds', description: 'Step-by-step learning around real project architecture and implementation.', icon: FiBookOpen },
      { title: 'Concept Clarity', description: 'Explain hardware, firmware, data, and design decisions in plain language.', icon: FiMonitor },
      { title: 'Demo Preparation', description: 'Support presentations, documentation, troubleshooting, and confident delivery.', icon: FiCheckCircle },
    ],
    technologies: ['Arduino', 'ESP32', 'Python', 'Robotics', 'IoT', 'Embedded C', 'CAD Basics', 'AI Prototyping'],
    workflow: [
      { title: 'Skill Mapping', description: 'Understand the learner level, target outcome, project scope, and deadline.' },
      { title: 'Learning Plan', description: 'Break the topic into practical milestones with demos and exercises.' },
      { title: 'Guided Sessions', description: 'Work through concepts, implementation, debugging, and explanation.' },
      { title: 'Presentation Ready', description: 'Prepare documentation, demo flow, and answers to expected questions.' },
    ],
    benefits: [
      'Understand the project deeply instead of memorizing it',
      'Hands-on guidance across hardware and software',
      'Better confidence for reviews, demos, and interviews',
      'Flexible support for students, startups, and teams',
    ],
    relatedProjects: ['Smart Microplastic Detection System', 'CubeSat Telemetry System', 'KUKA Robot Automation Projects'],
    faqs: [
      { question: 'Is mentorship suitable for beginners?', answer: 'Yes. Sessions can start from fundamentals and build toward a working project or demo.' },
      { question: 'Can you train a small team?', answer: 'Yes. Training can be structured for individuals, student groups, startup teams, or industry teams.' },
      { question: 'Can mentorship include project documentation?', answer: 'Yes. We can help prepare explanation notes, diagrams, demo flow, and review-ready documentation.' },
    ],
  },
]

export const services: Service[] = serviceDetails.map(
  (service) => ({
    cta: service.cta,
    description: service.description,
    gradient: service.gradient,
    href: service.href,
    icon: service.icon,
    image: service.image,
    slug: service.slug,
    title: service.title,
  }),
)

export function getServiceBySlug(slug: string | undefined) {
  return serviceDetails.find((service) => service.slug === slug)
}

export function getAdjacentServices(slug: string | undefined) {
  const index = serviceDetails.findIndex((service) => service.slug === slug)
  if (index === -1) return { next: undefined, previous: undefined }

  return {
    previous: serviceDetails[(index - 1 + serviceDetails.length) % serviceDetails.length],
    next: serviceDetails[(index + 1) % serviceDetails.length],
  }
}
