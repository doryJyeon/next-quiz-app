import QuizSelectForm from '@/app/components/QuizSelectForm'
import React from 'react'

const QuizPage = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8">
      <QuizSelectForm isCategory={false} />
    </div>
  )
}

export default QuizPage