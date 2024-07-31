import QuizSelectForm from '@/app/components/QuizSelectForm'
import React, { Suspense } from 'react'

const QuizPage = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8">
      <Suspense>
        <QuizSelectForm isCategory={false} />
      </Suspense>
    </div>
  )
}

export default QuizPage