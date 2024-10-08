/* eslint-disable prettier/prettier */
import skillsList from '@/data/skillsData'

export default function Skills() {
  return (
    <>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Skills
      </h1>
      <div className="container py-5">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {skillsList.map(({ title, items }, index) => (
            <div key={index} className="rounded-md border-2 bg-white p-5">
              <p className="text-lg font-bold leading-7">{title}</p>
              <ul className="list-inside list-none">
                {items.map((item) => (
                  <li className="text-gray-500" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
