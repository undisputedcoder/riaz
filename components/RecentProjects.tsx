'use client'

import ProjectCard from './ProjectCard'
import projectsData from '@/data/projectsData'

import Link from '@/components/Link'
import AnimatedDiv from './AnimatedDiv'
import { FadeContainer } from '../lib/FramerMotionVariants'

const RecentProjects = ({ MAX_PROJECTS }) => {
  const projectsList = projectsData.slice(0, MAX_PROJECTS)

  return (
    <>
      <div className="divide-y divide-gray-700">
        <div className="my-4">
          <span className="font-poppins title-font text-3xl font-bold">Recent Projects</span>
        </div>
        <div className="py-12">
          <AnimatedDiv
            variants={FadeContainer}
            className="mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]"
            infinity={true}
            style={{}}
          >
            {projectsList.map((d) => (
              <ProjectCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </AnimatedDiv>
        </div>
        <div className="mt-5 flex justify-end text-base font-medium leading-6">
          <Link href="/projects" className="mt-5 hover:text-primary-400" aria-label="all posts">
            All Projects &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}

export default RecentProjects
