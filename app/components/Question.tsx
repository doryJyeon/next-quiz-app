'use client'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useTransition, animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react'
import { QuizTypes } from '../utils/types';

interface Props {
  question: QuizTypes;
}

const Question = ({ question }: Props) => {
  const [answer, setAnswer] = useState("");               // 유저 정답
  const [isTrue, setIsTrue] = useState(false);            // 정답 여부
  const [isAnswered, setIsAnswered] = useState(false);    // 정답 확인

  // correct_answer에 값이 없는 경우도 있어서 correct_answers에서 정답 찾아옴
  const questionAnswer = Object.keys(question.correct_answers)
    .find(key => question.correct_answers[key] === "true")
    ?.replace("_correct", "");

  const transitions = useTransition(isAnswered, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 60 },
    leave: { opacity: 0, height: 0 },
    config: {
      duration: 200,
    },
  })

  useEffect(() => {

  }, []);

  return (
    <div
      className={`bg-slate-100 rounded-xl shadow mt-5 sm:mt-8 p-4 border-4 border-t-8 ${isAnswered
        ? isTrue
          ? "border-green-400"
          : "border-red-400"
        : "border-transparent"
        }`}
      key={"question" + question.id}
    >
      <div className="mb-4 text-slate-700 text-base sm:text-lg flex justify-between">
        No{question.id}. {question.question}
      </div>

      {Object.entries(question.answers).map(([answerK, value]) => (
        value ? (
          <label
            key={answerK}
            onClick={() => {
              if (!isAnswered) {
                setAnswer(answerK);
                setIsTrue(answerK === questionAnswer);
              }
            }}
            htmlFor={`option_${question.id}_${answerK}`}
            className={`${!isAnswered && "hover:border-blue-400"} 
            flex justify-start items-center space-x-4 text-gray-600 bg-white 
            shadow-sm rounded-lg my-2 px-4 py-2 border-2 duration-200 
            border-transparent cursor-pointer text-sm sm:text-md`}
          >
            {isAnswered &&
              (isTrue ? (
                // 정답이면 정답만 표시
                answerK === questionAnswer && (
                  <CheckCircleIcon className="w-6 h-6 stroke-green-500" />
                )
              ) : answerK === questionAnswer ? (
                <CheckCircleIcon className="w-6 h-6 stroke-green-500" />
              ) : (
                <XCircleIcon className="w-6 h-6 stroke-red-500" />
              ))}

            <input
              id={`option_${question.id}_${answerK}`}
              type={"radio"}
              name={`question_${question.id}`}
              disabled={isAnswered}
            />
            &ensp;{value}
          </label>
        ) : (
          <></>
        )
      ))}

      {answer !== "" && transitions(
        (styles, item) =>
          !item && (
            <animated.div style={{ overflow: "hidden", ...styles }}>
              <div
                onClick={() => {
                  setIsAnswered(true);
                }}
                className="bg-blue-500 p-2 text-slate-50 rounded text-center shadow hover:bg-blue-400 duration-200 cursor-pointer mt-5"
              >
                Check answer
              </div>
            </animated.div>
          )
      )}

      <p className="text-slate-400 text-sm mt-4">
        {Object.values(question.tags).map(tag => (
          tag.name + " "
        ))}
        &ensp;level-{question.difficulty}
      </p>
    </div>
  )
}

export default Question