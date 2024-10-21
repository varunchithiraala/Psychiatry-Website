import { assets } from "../assets/assets";

export const mockData = {
    hero: {
      image: assets.header_bg_image,
      title: "NEED A MENTAL HEALTH PROVIDER?",
      text: "No Look Further",
      content: "Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.",
      buttonText: "Learn More"
    },
    founder: {
      image: assets.founder_image,
      title: "Meet The Founder",
      name: "Lakeisha Appleton",
      credentials: "FNP-C, PMHNP-BC",
      message: "\"Mental health problems don't define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.\" — Matt Haig",
      buttonText: "Learn More"
    },
    treatmentFocusData: [
      {
        id: 1,
        title: "Mental Health",
        description: "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
        image: assets.health_image,
        buttonText: "Learn More"
      },
      {
        id: 2,
        title: "Addiction And Recovery",
        description: "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
        image: assets.recovery_image,
        buttonText: "Learn More"
      },
      {
        id: 3,
        title: "Supervised Medical Weight Loss",
        description: "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client’s needs.",
        image: assets.weight_loss_image,
        buttonText: "Learn More"
      }
    ],
    services: [
      { title: 'Psychiatric Evaluation', icon: assets.human_brain_icon },
      { title: 'Medication Management', icon: assets.hospital_icon },
      { title: 'Supportive Psychotherapy', icon: assets.intelligence_icon },
      { title: 'ADHD Screening', icon: assets.adhd_icon },
      { title: 'MAT Treatment', icon: assets.human_brain_icon },
      { title: 'Gene Sight Testing', icon: assets.hospital_icon }
    ],
    reasons: [
      {
        title: 'Convenient access',
        description:
          'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
      },
      {
        title: 'Concierge approach',
        description: 'Our Services Are Tailored To Meet Your Unique Needs With A Personal Touch.',
      },
      {
        title: 'High quality service',
        description: 'We Provide High-Quality Psychiatric Care From Experienced Professionals.',
      },
      {
        title: 'Trusted and empathic providers',
        description: 'Our Providers Are Trusted, Empathetic, And Dedicated To Your Well-Being.',
      }
    ],
    testimonials: Array(8).fill({
      name: 'Carl Rowan',
      company: 'Aglets Inc',
      feedback:
        'Psychiatry took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.',
      avatar: assets.carl_avatar
    }),
    steps: [
      {
        icon: assets.appointment_icon,
        number: '01',
        text: 'Schedule an appointment'
      },
      {
        icon: assets.hanshake_icon,
        number: '02',
        text: 'Connect with your provider'
      },
      {
        icon: assets.negotiation_icon,
        number: '03',
        text: 'Discuss your comprehensive assessment'
      },
      {
        icon: assets.clipboard_icon,
        number: '04',
        text: 'Receive your individualized treatment plan'
      }
    ],
    states: [
      {
        name: 'Arizona',
        image: assets.arizona_image,
        description: 'In-person and Virtual appointment',
      },
      {
        name: 'Washington',
        image: assets.washington_image,
        description: 'Virtual appointment',
      },
      {
        name: 'Oregon',
        image: assets.oregon_image,
        description: 'Virtual appointment',
      },
    ],
    questions: [
      {
        question: "Is Psychiatry confidential?",
        answer: "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
      },
      {
        question: "What is the best way to schedule an appointment?",
        answer: "You Can Schedule An Appointment Through Our Website Or Call Us Directly For A More Personalized Experience.",
      },
      {
        question: "Do you prescribe controlled substance medication?",
        answer: "Yes, Our Certified Professionals Can Prescribe Medications Based On Individual Needs.",
      },
      {
        question: "How long does the initial appointment take?",
        answer: "Typically, The Initial Appointment Takes 45-60 Minutes.",
      },
  ]
};
