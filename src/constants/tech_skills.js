import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    sentencesPerParagraph: {
      max: 4,
      min: 3,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  },
});

const skills = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: lorem.generateParagraphs(2),
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: lorem.generateParagraphs(2),
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: lorem.generateParagraphs(2),
  },
];

export default skills;
