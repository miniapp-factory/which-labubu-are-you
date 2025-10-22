'use client';

import { useState } from 'react';
import { Button } from './ui/button';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: 'Which Labubu are you?',
    options: ['Labubu A', 'Labubu B', 'Labubu C'],
    answer: 'Labubu B',
  },
  {
    question: 'What is your favorite color?',
    options: ['Red', 'Blue', 'Green'],
    answer: 'Blue',
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Your result</h2>
        <p className="mb-4">
          You scored {score} out of {questions.length}
        </p>
        <Button onClick={() => window.location.reload()}>Restart</Button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-medium mb-4">{q.question}</h3>
      <ul className="space-y-2">
        {q.options.map((opt) => (
          <li key={opt}>
            <Button
              variant={selected === opt ? 'secondary' : 'outline'}
              onClick={() => handleOptionClick(opt)}
              className="w-full justify-start"
            >
              {opt}
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <Button
          onClick={handleNext}
          disabled={!selected}
          className="ml-2"
        >
          {current + 1 < questions.length ? 'Next' : 'Finish'}
        </Button>
      </div>
    </div>
  );
}
