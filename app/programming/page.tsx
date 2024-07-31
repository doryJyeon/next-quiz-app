import React, { Suspense } from 'react'
import Questions from '../components/Questions';

const QuestionPage = () => {
  const category = "Code";
  const tags = "HTML,PHP,Python,JavaScript";

  return (
    <div className="flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8">
      <Suspense>
        <Questions category={category} tags={tags} />
      </Suspense>
    </div>
  )
}

export default QuestionPage