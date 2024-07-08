
export default function Home() {
  return (
    <section className="max-w-7xl overflow-hidden rounded-xl p-4 lg:p-8 text-slate-700 flex items-center justify-center">
      <article className="bg-slate-100 rounded-xl shadow p-10 text-sm sm:text-lg">
        <p className="text-center mb-[-10px]">
          <span className="text-2xl sm:text-6xl sm:mr-2 text-emerald-400">Q.</span>
          무슨 사이트인가요
          <span className="text-3xl sm:text-7xl sm:ml-[-5px] text-emerald-400">?</span>
        </p>
        <p className="text-center mb-10 sm:mb-[60px]">
          <span className="text-2xl sm:text-6xl sm:mr-2 text-emerald-400">A.</span>
          프로그래밍 관련 퀴즈 사이트입니다.
        </p>

        <ul>
          <li className="mb-5">Programming -<br className="sm:hidden" /> [HTML, JS, PHP, Python] 랜덤 문제</li>
          <li className="mb-5">Category -<br className="sm:hidden" /> Linux, DevOps, Docker, SQL, Code(HTML, JS, PHP, Python 등) 중 택1</li>
          <li className="mb-5">
            Tags -<br className="sm:hidden" /> HTML, JavaScript, Python, PHP, Linux, DevOps, Docker, Kubernetes, MySql 중 택1
          </li>
        </ul>
      </article>
    </section>
  );
}
