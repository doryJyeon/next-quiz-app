import React from 'react'
import QuizSelectForm from '../components/QuizSelectForm';

const StatePage = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8">
      <QuizSelectForm isCategory={true} />
    </div>
  )
}

export default StatePage