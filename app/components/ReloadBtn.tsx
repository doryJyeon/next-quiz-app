"use client"

const ReloadBtn = () => {
  const handleReload = () => window.location.reload();
  return <button className="bg-emerald-800 text-slate-100 p-2 mt-5 rounded-lg hover:bg-emerald-700 w-full" onClick={handleReload}>Reload</button>
}

export default ReloadBtn;
