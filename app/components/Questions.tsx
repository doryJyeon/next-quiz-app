"use client"

import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import Question from "./Question";
import ReloadBtn from "./ReloadBtn";

interface Props {
  category: string
  tags: string
  isCategory?: boolean
}

const Questions: React.FC<Props> = ({ category, tags, isCategory }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const categoryEncode = isCategory === false ? "" : encodeURIComponent(category);
  // tag는 값 없으면 오류남
  const tagsEncode = isCategory === false ? `&tags=${encodeURIComponent(tags)}` : "";

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/quiz?category=${categoryEncode + tagsEncode}`);
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [category, tags]);

  return (
    <ul>
      {loading ? (
        <MessageCard message={"Loading..."} />
      ) : loading || questions.length < 1 ? (
        <MessageCard message={"emtpy question!"} />
      ) : (
        <>
          {questions.map((question, index) => (
            <Question question={question} key={index} />
          ))}

          <ReloadBtn />
        </>
      )}
    </ul>
  );
}

export default Questions;