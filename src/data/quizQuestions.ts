
export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    A: string; // Gryffindor
    B: string; // Ravenclaw
    C: string; // Hufflepuff
    D: string; // Slytherin
  };
}

export interface QuizSection {
  id: number;
  title: string;
  questions: QuizQuestion[];
}

export const quizSections: QuizSection[] = [
  {
    id: 1,
    title: "Values and Priorities",
    questions: [
      {
        id: 1,
        question: "Which quality do you value most in yourself?",
        options: {
          A: "Courage and bravery",
          B: "Intelligence and wit",
          C: "Loyalty and kindness",
          D: "Ambition and determination"
        }
      },
      {
        id: 2,
        question: "When faced with a difficult task, you usually:",
        options: {
          A: "Charge ahead with confidence",
          B: "Analyze all possible approaches first",
          C: "Seek help from friends or colleagues",
          D: "Find the most efficient path to success"
        }
      },
      {
        id: 3,
        question: "Your friends would describe you as:",
        options: {
          A: "Bold and passionate",
          B: "Clever and creative",
          C: "Dependable and supportive",
          D: "Resourceful and driven"
        }
      },
      {
        id: 4,
        question: "In a group project, you typically:",
        options: {
          A: "Take the lead and inspire others",
          B: "Come up with innovative solutions",
          C: "Ensure everyone's voice is heard",
          D: "Focus on achieving the best possible outcome"
        }
      },
      {
        id: 5,
        question: "What motivates you most?",
        options: {
          A: "Standing up for what's right",
          B: "Expanding your knowledge",
          C: "Helping others succeed",
          D: "Achieving your personal goals"
        }
      }
    ]
  },
  {
    id: 2,
    title: "Reactions and Instincts",
    questions: [
      {
        id: 6,
        question: "When you see someone being bullied, you:",
        options: {
          A: "Immediately step in to defend them",
          B: "Think of clever ways to resolve the situation",
          C: "Comfort them afterward and offer support",
          D: "Remember who was responsible for future reference"
        }
      },
      {
        id: 7,
        question: "In an emergency, you're most likely to:",
        options: {
          A: "React quickly without hesitation",
          B: "Assess the situation before acting",
          C: "Check if anyone needs assistance",
          D: "Take charge and give clear directions"
        }
      },
      {
        id: 8,
        question: "When you fail at something important, you typically:",
        options: {
          A: "Get back up and try again with more determination",
          B: "Analyze what went wrong intellectually",
          C: "Seek encouragement from friends and family",
          D: "Resolve to succeed next time at any cost"
        }
      },
      {
        id: 9,
        question: "When facing a personal challenge, you:",
        options: {
          A: "Face it head-on with courage",
          B: "Research and plan your approach carefully",
          C: "Discuss it with trusted friends",
          D: "Look for strategic advantages"
        }
      },
      {
        id: 10,
        question: "Your gut reaction when someone disagrees with you is to:",
        options: {
          A: "Defend your position passionately",
          B: "Engage in intellectual debate",
          C: "Try to understand their perspective",
          D: "Carefully consider if they might be useful allies"
        }
      }
    ]
  },
  {
    id: 3,
    title: "Interests and Activities",
    questions: [
      {
        id: 11,
        question: "Your ideal weekend would include:",
        options: {
          A: "An exciting adventure or physical challenge",
          B: "Learning something new or solving puzzles",
          C: "Spending quality time with friends and loved ones",
          D: "Working on personal projects that advance your goals"
        }
      },
      {
        id: 12,
        question: "In school, you were most interested in:",
        options: {
          A: "Physical activities and sports",
          B: "Subjects that challenged your mind",
          C: "Classes with group work and collaboration",
          D: "Courses that would be useful for future success"
        }
      },
      {
        id: 13,
        question: "You're most proud of your:",
        options: {
          A: "Acts of bravery or standing up for others",
          B: "Intellectual achievements and creativity",
          C: "Relationships and ability to help others",
          D: "Accomplishments and personal successes"
        }
      },
      {
        id: 14,
        question: "For fun, you prefer to:",
        options: {
          A: "Try thrilling or daring activities",
          B: "Engage in mind-stimulating hobbies",
          C: "Participate in community or group events",
          D: "Master new skills that enhance your abilities"
        }
      },
      {
        id: 15,
        question: "If you could have any job, you'd choose one that:",
        options: {
          A: "Involves excitement and heroism",
          B: "Challenges your intellect and creativity",
          C: "Allows you to make a positive difference",
          D: "Offers prestige and advancement opportunities"
        }
      }
    ]
  },
  {
    id: 4,
    title: "Character and Decisions",
    questions: [
      {
        id: 16,
        question: "When making an important decision, you usually:",
        options: {
          A: "Follow your heart and instincts",
          B: "Consider all options logically",
          C: "Think about how it affects others",
          D: "Choose what will bring the best long-term outcome"
        }
      },
      {
        id: 17,
        question: "You feel most fulfilled when you've:",
        options: {
          A: "Overcome a significant challenge",
          B: "Solved a complex problem",
          C: "Helped someone in need",
          D: "Achieved an important goal"
        }
      },
      {
        id: 18,
        question: "Your biggest fear is:",
        options: {
          A: "Being powerless to act",
          B: "Being intellectually stagnant",
          C: "Losing those you care about",
          D: "Failing to achieve your potential"
        }
      },
      {
        id: 19,
        question: "If you found a wallet with money, you would:",
        options: {
          A: "Immediately try to find the owner",
          B: "Think of the most efficient way to return it",
          C: "Take it to lost and found or police",
          D: "Return it if possible, but consider the circumstances"
        }
      },
      {
        id: 20,
        question: "People come to you when they need someone who is:",
        options: {
          A: "Brave and will stand up for them",
          B: "Smart and can solve problems",
          C: "Understanding and good at listening",
          D: "Strategic and effective at getting results"
        }
      }
    ]
  }
];

export const houseDescriptions = {
  gryffindor: {
    name: "Gryffindor",
    animal: "Lion",
    element: "Fire",
    traits: ["Bravery", "Daring", "Nerve", "Chivalry"],
    founder: "Godric Gryffindor",
    description: "You belong in noble Gryffindor, where dwell the brave at heart. Gryffindors are known for their courage, bravery, and determination. You'll do what's right, even in the face of adversity. Famous Gryffindors include Harry Potter, Hermione Granger, and Albus Dumbledore.",
    colors: {
      primary: "bg-gryffindor-primary",
      secondary: "bg-gryffindor-secondary",
      textPrimary: "text-gryffindor-primary",
      textSecondary: "text-gryffindor-secondary",
      borderPrimary: "border-gryffindor-primary",
      borderSecondary: "border-gryffindor-secondary",
      hoverPrimary: "hover:bg-gryffindor-light",
      hoverTextPrimary: "hover:text-gryffindor-primary"
    }
  },
  ravenclaw: {
    name: "Ravenclaw",
    animal: "Eagle",
    element: "Air",
    traits: ["Intelligence", "Creativity", "Learning", "Wit"],
    founder: "Rowena Ravenclaw",
    description: "You belong in wise old Ravenclaw, if you've a ready mind. Ravenclaws value intelligence, creativity, learning, and wit. You have a sharp mind and enjoy intellectual challenges. Famous Ravenclaws include Luna Lovegood, Filius Flitwick, and Garrick Ollivander.",
    colors: {
      primary: "bg-ravenclaw-primary",
      secondary: "bg-ravenclaw-secondary",
      textPrimary: "text-ravenclaw-primary",
      textSecondary: "text-ravenclaw-secondary",
      borderPrimary: "border-ravenclaw-primary",
      borderSecondary: "border-ravenclaw-secondary",
      hoverPrimary: "hover:bg-ravenclaw-light",
      hoverTextPrimary: "hover:text-ravenclaw-primary"
    }
  },
  hufflepuff: {
    name: "Hufflepuff",
    animal: "Badger",
    element: "Earth",
    traits: ["Hard work", "Patience", "Loyalty", "Fairness"],
    founder: "Helga Hufflepuff",
    description: "You belong in Hufflepuff, where they are just and loyal. Hufflepuffs value hard work, dedication, patience, loyalty, and fair play. You're a trustworthy friend who values harmony. Famous Hufflepuffs include Newt Scamander, Cedric Diggory, and Nymphadora Tonks.",
    colors: {
      primary: "bg-hufflepuff-primary",
      secondary: "bg-hufflepuff-secondary",
      textPrimary: "text-hufflepuff-primary",
      textSecondary: "text-hufflepuff-secondary",
      borderPrimary: "border-hufflepuff-primary",
      borderSecondary: "border-hufflepuff-secondary",
      hoverPrimary: "hover:bg-hufflepuff-light",
      hoverTextPrimary: "hover:text-hufflepuff-primary"
    }
  },
  slytherin: {
    name: "Slytherin",
    animal: "Serpent",
    element: "Water",
    traits: ["Ambition", "Cunning", "Leadership", "Resourcefulness"],
    founder: "Salazar Slytherin",
    description: "You belong in Slytherin, where you'll make your real friends. Slytherins are ambitious, shrewd, cunning, strong leaders, and achievement-oriented. You know what you want and have the resourcefulness to get it. Famous Slytherins include Merlin, Severus Snape, and Horace Slughorn.",
    colors: {
      primary: "bg-slytherin-primary",
      secondary: "bg-slytherin-secondary",
      textPrimary: "text-slytherin-primary",
      textSecondary: "text-slytherin-secondary",
      borderPrimary: "border-slytherin-primary",
      borderSecondary: "border-slytherin-secondary",
      hoverPrimary: "hover:bg-slytherin-light",
      hoverTextPrimary: "hover:text-slytherin-primary"
    }
  }
};
