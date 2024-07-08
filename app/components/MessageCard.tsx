interface Props {
  message: string
}

const MessageCard = ({ message }: Props) => {

  return (
    <div className={`bg-slate-100 rounded-xl shadow px-4 py-10 text-slate-600 text-xl text-center my-5`}>
      {message}
    </div>
  )
}

export default MessageCard