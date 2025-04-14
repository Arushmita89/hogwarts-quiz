
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Flame, 
  Wind, 
  Leaf, 
  Droplets
} from "lucide-react";

interface IntroProps {
  onStartQuiz: () => void;
}

const HogwartsIntro: React.FC<IntroProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto p-6 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-magical font-bold text-hogwarts-dark mb-6">
        The Hogwarts Sorting Quiz
      </h1>
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-gryffindor-primary via-ravenclaw-primary to-slytherin-primary opacity-10 rounded-full"></div>
        <BookOpen className="w-16 h-16 text-hogwarts-accent animate-float" />
      </div>
      
      <p className="text-lg mb-8 text-hogwarts-dark">
        Welcome to Hogwarts School of Witchcraft and Wizardry! Before you begin your magical journey,
        you must be sorted into one of the four houses. Answer the following questions truthfully,
        and the Sorting Hat will determine where you belong.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full">
        <div className="flex flex-col items-center p-6 rounded-lg bg-gryffindor-primary bg-opacity-10 border border-gryffindor-primary border-opacity-20">
          <Flame className="w-10 h-10 text-gryffindor-primary mb-3" />
          <h3 className="text-xl font-bold text-gryffindor-primary mb-2">Gryffindor</h3>
          <p className="text-sm text-center">Brave, daring, and chivalrous. Known for their courage and determination.</p>
        </div>
        
        <div className="flex flex-col items-center p-6 rounded-lg bg-ravenclaw-primary bg-opacity-10 border border-ravenclaw-primary border-opacity-20">
          <Wind className="w-10 h-10 text-ravenclaw-primary mb-3" />
          <h3 className="text-xl font-bold text-ravenclaw-primary mb-2">Ravenclaw</h3>
          <p className="text-sm text-center">Intelligent, wise, and creative. Value knowledge and intellectual pursuits.</p>
        </div>
        
        <div className="flex flex-col items-center p-6 rounded-lg bg-hufflepuff-primary bg-opacity-10 border border-hufflepuff-primary border-opacity-20">
          <Leaf className="w-10 h-10 text-hufflepuff-primary mb-3" />
          <h3 className="text-xl font-bold text-hufflepuff-primary mb-2">Hufflepuff</h3>
          <p className="text-sm text-center">Loyal, patient, and fair. Known for their hard work and dedication to justice.</p>
        </div>
        
        <div className="flex flex-col items-center p-6 rounded-lg bg-slytherin-primary bg-opacity-10 border border-slytherin-primary border-opacity-20">
          <Droplets className="w-10 h-10 text-slytherin-primary mb-3" />
          <h3 className="text-xl font-bold text-slytherin-primary mb-2">Slytherin</h3>
          <p className="text-sm text-center">Ambitious, cunning, and resourceful. Natural leaders who strive for greatness.</p>
        </div>
      </div>
      
      <Button 
        onClick={onStartQuiz}
        className="bg-hogwarts-accent hover:bg-hogwarts-accent/80 text-white px-8 py-6 text-lg rounded-md font-magical transition-all transform hover:scale-105"
      >
        Begin Sorting
      </Button>
      
      <p className="mt-6 text-sm text-muted-foreground">
        "Oh, you may not think I'm pretty, but don't judge on what you see,<br />
        I'll eat myself if you can find a smarter hat than me."
      </p>
    </div>
  );
};

export default HogwartsIntro;
