import React from 'react'
import Questions from '../components/Questions';
import ReloadBtn from '../components/ReloadBtn';

const QuestionPage = () => {
  const category = "Code";
  const tags = "HTML,PHP,Python,JavaScript";

  return (
    <div className="flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8">
      <Questions category={category} tags={tags} />
    </div>
  )
}

export default QuestionPage