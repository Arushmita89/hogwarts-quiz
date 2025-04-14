
import React, { useState } from 'react';
import HogwartsIntro from './HogwartsIntro';
import QuizSection from './QuizSection';
import QuizResults from './QuizResults';
import { quizSections } from '@/data/quizQuestions';

enum QuizState {
  INTRO,
  QUESTIONS,
  RESULTS
}

const HogwartsSortingQuiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.INTRO);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  // Start the quiz
  const startQuiz = () => {
    setQuizState(QuizState.QUESTIONS);
  };
  
  // Handle answer selection
  const handleSelectAnswer = (questionId: number, option: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };
  
  // Navigate to next section
  const handleNextSection = () => {
    if (currentSectionIndex < quizSections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Complete the quiz and show results
      setQuizState(QuizState.RESULTS);
      window.scrollTo(0, 0);
    }
  };
  
  // Navigate to previous section
  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Retake the quiz
  const handleRetakeQuiz = () => {
    setAnswers({});
    setCurrentSectionIndex(0);
    setQuizState(QuizState.INTRO);
    window.scrollTo(0, 0);
  };
  
  // Calculate results
  const calculateResults = () => {
    const results = {
      A: 0, // Gryffindor
      B: 0, // Ravenclaw
      C: 0, // Hufflepuff
      D: 0  // Slytherin
    };
    
    Object.values(answers).forEach(answer => {
      if (answer in results) {
        results[answer as keyof typeof results]++;
      }
    });
    
    return results;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-hogwarts-parchment">
      <div className="container mx-auto py-10">
        {quizState === QuizState.INTRO && (
          <HogwartsIntro onStartQuiz={startQuiz} />
        )}
        
        {quizState === QuizState.QUESTIONS && (
          <QuizSection
            section={quizSections[currentSectionIndex]}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            onNext={handleNextSection}
            onPrevious={handlePreviousSection}
            currentSectionIndex={currentSectionIndex}
            totalSections={quizSections.length}
          />
        )}
        
        {quizState === QuizState.RESULTS && (
          <QuizResults 
            results={calculateResults()} 
            onRetakeQuiz={handleRetakeQuiz} 
          />
        )}
      </div>
    </div>
  );
};

export default HogwartsSortingQuiz;
