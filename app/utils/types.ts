interface Correct_answers {
  [key: string]: string
}

interface Tags {
  name: string;
}

export interface QuizTypes {
  id: number;
  question: string;
  description: string | null;
  answers: string[];
  multiple_correct_answers: string;
  correct_answers: Correct_answers;
  correct_answer: string;
  explanation: string | null;
  tip: string | null;
  tags: Tags[];
  category: string;
  difficulty: string;
}