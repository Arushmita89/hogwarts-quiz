
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  Wind, 
  Leaf, 
  Droplets,
  Award,
  Star
} from "lucide-react";
import { houseDescriptions } from '@/data/quizQuestions';

interface ResultsProps {
  results: {
    A: number;
    B: number;
    C: number;
    D: number;
  };
  onRetakeQuiz: () => void;
}

const QuizResults: React.FC<ResultsProps> = ({ results, onRetakeQuiz }) => {
  // Determine the house with the highest score
  const scores = [
    { house: 'gryffindor', score: results.A, letter: 'A' },
    { house: 'ravenclaw', score: results.B, letter: 'B' },
    { house: 'hufflepuff', score: results.C, letter: 'C' },
    { house: 'slytherin', score: results.D, letter: 'D' }
  ];
  
  // Sort by score (highest first)
  scores.sort((a, b) => b.score - a.score);
  
  // Get the winning house
  const winningHouse = scores[0].house as keyof typeof houseDescriptions;
  const house = houseDescriptions[winningHouse];
  
  // Check if there's a tie
  const isTie = scores[0].score === scores[1].score;
  
  // Get the house icon
  const getHouseIcon = (house: string) => {
    switch (house) {
      case 'gryffindor':
        return <Flame className="w-12 h-12" />;
      case 'ravenclaw':
        return <Wind className="w-12 h-12" />;
      case 'hufflepuff':
        return <Leaf className="w-12 h-12" />;
      case 'slytherin':
        return <Droplets className="w-12 h-12" />;
      default:
        return null;
    }
  };
  
  // Calculate percentages
  const totalAnswers = Object.values(results).reduce((sum, val) => sum + val, 0);
  
  return (
    <div className="max-w-3xl mx-auto p-6 animate-fade-in">
      <div className={`text-center p-8 rounded-lg ${house.colors.primary} bg-opacity-10 border-2 ${house.colors.borderPrimary} border-opacity-30`}>
        <div className="flex justify-center mb-4">
          <div className={`p-6 rounded-full ${house.colors.primary} bg-opacity-20`}>
            {getHouseIcon(winningHouse)}
          </div>
        </div>
        
        <h2 className="text-4xl font-magical font-bold mb-3">
          <span className={house.colors.textPrimary}>
            {isTie ? "It's a tie!" : "You belong in"}
          </span>
        </h2>
        
        <h1 className={`text-5xl font-magical font-bold mb-6 ${house.colors.textPrimary}`}>
          {house.name}!
        </h1>
        
        {isTie && (
          <p className="mb-6 text-lg">
            The Sorting Hat had a hard time deciding between {house.name} and {houseDescriptions[scores[1].house as keyof typeof houseDescriptions].name}, but ultimately chose {house.name} for you!
          </p>
        )}
        
        <p className="text-lg mb-8">
          {house.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {house.traits.map((trait, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${house.colors.primary} text-white flex items-center gap-1`}
            >
              <Star className="w-3 h-3" />
              {trait}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-xl font-bold text-gryffindor-primary">
              {Math.round((results.A / totalAnswers) * 100)}%
            </div>
            <div className="text-sm">Gryffindor</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-ravenclaw-primary">
              {Math.round((results.B / totalAnswers) * 100)}%
            </div>
            <div className="text-sm">Ravenclaw</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-hufflepuff-primary">
              {Math.round((results.C / totalAnswers) * 100)}%
            </div>
            <div className="text-sm">Hufflepuff</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-slytherin-primary">
              {Math.round((results.D / totalAnswers) * 100)}%
            </div>
            <div className="text-sm">Slytherin</div>
          </div>
        </div>
        
        <Button
          onClick={onRetakeQuiz}
          className="font-magical bg-hogwarts-accent hover:bg-hogwarts-accent/80 text-white"
        >
          Retake Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
