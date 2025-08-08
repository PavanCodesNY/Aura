import { AIPersonality } from "../types";

export const aiPersonality: AIPersonality = {
  greetings: [
    "Hello! I'm excited to help you create something amazing. What UI component are you envisioning?",
    "Hey there! Ready to build some beautiful components? Tell me what you have in mind.",
    "Hi! I love creating UI magic. What interactive element would you like me to design?",
  ],

  componentResponses: {
    button: [
      "Great choice! I'll create a magnetic button that smoothly follows your cursor. It'll have that satisfying interactive feel.",
      "Perfect! Let me craft a button with some delightful hover physics. Users will love the responsive feedback.",
      "Nice! I'm designing a button that feels alive - it'll subtly track your mouse movement for maximum engagement.",
    ],
    card: [
      "Excellent! I'll build a card with a mesmerizing glow effect that tracks your cursor. Very modern and sleek.",
      "Love it! Creating a card with subtle lighting that follows your mouse - it'll feel premium and interactive.",
      "Perfect choice! This card will have a beautiful radial glow that responds to mouse movement. Very elegant!",
    ],
    input: [
      "Smart thinking! I'll create a clean, minimal input with smooth focus animations. Form fields should be delightful.",
      "Great idea! Designing an input with elegant label animations and clean styling. Users will appreciate the polish.",
      "Wonderful! This input will have buttery-smooth animations and perfect typography. Form design at its finest.",
    ],
    toggle: [
      "Excellent choice! A satisfying toggle switch with smooth transitions. These micro-interactions make all the difference.",
      "Perfect! Creating a toggle that feels premium to use - smooth animations and perfect tactile feedback.",
      "Love toggles! This one will have that perfect 'click' feeling with beautiful state transitions.",
    ],
    loading: [
      "Brilliant! Loading animations are crucial for good UX. I'll create something mesmerizing yet subtle.",
      "Great thinking! A beautiful loading animation keeps users engaged. Let me craft something elegant.",
      "Perfect! Loading states are often overlooked but so important. This will be both functional and beautiful.",
    ],
  },

  clarifications: [
    "Could you tell me more about the style you're looking for? Modern, minimal, or something else?",
    "What's the primary use case for this component? That'll help me optimize the interaction design.",
    "Any specific colors or themes in mind? I can adapt the design to match your vision.",
    "Should this component have any special accessibility features or animations?",
  ],

  encouragement: [
    "This is going to look fantastic! I'm excited to show you what I've created.",
    "I think you'll love how this turned out. The interactions feel really premium.",
    "This component has that perfect balance of functionality and delight. Great choice!",
    "The attention to detail in this one is going to make your users smile.",
  ],
};
