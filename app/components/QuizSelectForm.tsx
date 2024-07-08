"use client"

import React, { useEffect, useState } from 'react'
import Questions from '../components/Questions';
import ReloadBtn from './ReloadBtn';

// category || tags
interface Props {
  isCategory: boolean
}

const QuizSelectForm = ({ isCategory }: Props) => {
  const [select, setSelect] = useState("");

  // 0:category, 1:tags
  const selecters = [
    [
      "Linux", "DevOps", "Docker",
      "SQL", "Code"
    ],
    [
      "HTML", "JavaScript", "Python",
      "PHP",
      "Linux", "DevOps", "Docker",
      "Kubernetes", "MySql"
    ]
  ]

  useEffect(() => {

  }, [select]);

  return (
    <div className="text-sm sm:text-lg text-gray-900">
      <p className="mb-1 sm:mb-2">원하는 분야를 선택해주세요.</p>
      <div className="flex w-full gap-x-5 sm:gap-x-8 gap-y-2 flex-wrap bg-slate-100 rounded-xl shadow p-4">
        {isCategory ? (
          // category로 검색
          selecters[0].map((item, index) => (
            <label key={`category${index}`} onClick={() => setSelect(item)}>
              <input
                type="radio"
                name="selectCategory"
                id={`${item}`}
                value={item}
              />
              &nbsp;{item}
            </label>
          ))
        ) : (
          // tags로 검색
          selecters[1].map((item, index) => (
            <label key={`category${index}`} onClick={() => setSelect(item)}>
              <input
                type="radio"
                name="selectCategory"
                id={`${item}`}
                value={item}
              />
              &nbsp;{item}
            </label>
          ))
        )}
      </div>

      {select !== "" && (
        <Questions category={select} tags={select} isCategory={isCategory} />
      )}

    </div>
  )
}

export default QuizSelectForm