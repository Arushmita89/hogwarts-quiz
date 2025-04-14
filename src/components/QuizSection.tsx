
import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuizQuestion from './QuizQuestion';
import { QuizSection as SectionType, QuizQuestion as QuestionType } from '@/data/quizQuestions';

interface QuizSectionProps {
  section: SectionType;
  answers: Record<number, string>;
  onSelectAnswer: (questionId: number, option: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  currentSectionIndex: number;
  totalSections: number;
}

const QuizSection: React.FC<QuizSectionProps> = ({
  section,
  answers,
  onSelectAnswer,
  onNext,
  onPrevious,
  currentSectionIndex,
  totalSections
}) => {
  const allQuestionsAnswered = section.questions.every(q => answers[q.id] !== undefined);
  const progress = ((currentSectionIndex + 1) / totalSections) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-magical font-bold text-hogwarts-dark">
          {section.title}
        </h2>
        <span className="text-sm text-muted-foreground">
          Section {currentSectionIndex + 1} of {totalSections}
        </span>
      </div>
      
      <Progress value={progress} className="h-2 mb-8" />
      
      {section.questions.map((question: QuestionType) => (
        <QuizQuestion
          key={question.id}
          question={question}
          selectedAnswer={answers[question.id] || null}
          onSelectAnswer={(option) => onSelectAnswer(question.id, option)}
        />
      ))}
      
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentSectionIndex === 0}
          className="font-magical"
        >
          Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!allQuestionsAnswered}
          className={`font-magical ${
            allQuestionsAnswered 
              ? 'bg-hogwarts-accent hover:bg-hogwarts-accent/80' 
              : 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed'
          }`}
        >
          {currentSectionIndex === totalSections - 1 ? 'See Results' : 'Next Section'}
        </Button>
      </div>
      
      {!allQuestionsAnswered && (
        <p className="text-sm text-red-500 mt-4 text-center">
          Please answer all questions before proceeding.
        </p>
      )}
    </div>
  );
};

export default QuizSection;
