
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { QuizQuestion as QuestionType } from '@/data/quizQuestions';

interface QuizQuestionProps {
  question: QuestionType;
  selectedAnswer: string | null;
  onSelectAnswer: (option: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer
}) => {
  return (
    <div className="mb-8 animate-fade-in">
      <h3 className="text-xl font-magical font-semibold mb-4 text-hogwarts-dark">
        {question.question}
      </h3>
      
      <RadioGroup 
        value={selectedAnswer || ""} 
        onValueChange={onSelectAnswer}
        className="space-y-3"
      >
        {Object.entries(question.options).map(([key, value]) => (
          <Card 
            key={key}
            className={`p-4 cursor-pointer transition-all duration-200 hover:bg-hogwarts-parchment hover:shadow-md ${
              selectedAnswer === key 
                ? 'border-2 border-hogwarts-accent bg-hogwarts-parchment shadow-md' 
                : 'border border-gray-200'
            }`}
            onClick={() => onSelectAnswer(key)}
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value={key} id={`option-${question.id}-${key}`} />
              <Label 
                htmlFor={`option-${question.id}-${key}`}
                className="flex-1 cursor-pointer"
              >
                {value}
              </Label>
            </div>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuizQuestion;
