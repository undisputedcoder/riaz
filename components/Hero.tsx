import { RoughNotation } from 'react-rough-notation'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall } from 'react-icons/io5'

function SocialLink({ icon: Icon, ...props }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link href={''} className="-m-1 p-1 " {...props}>
      <Icon className="h-10 w-10 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    </Link>
  )
}

export default function Hero() {
  return (
    <div className="mb-5 max-w-3xl">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        G'day, I'm{' '}
        <RoughNotation type={'underline'} show color="#f5cb42">
          Riaz
        </RoughNotation>
      </h1>
      <p className="mb-4 mt-6 text-base text-gray-600 dark:text-gray-400">
        I'm a software engineer with a big interest in{' '}
        <RoughNotation type={'highlight'} show color="#f5cb42">
          Machine Learning/Artificial Intelligence
        </RoughNotation>{' '}
        and data engineering - basically, anything that brings data to life! I'm on a journey to
        build my career in these fields. Feel free to take a look around and reach out if you want
        to chat!
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://github.com/undisputedcoder"
          aria-label="Check out my Github"
          icon={IoLogoGithub}
        />
        <SocialLink
          href="https://www.linkedin.com/in/riazamin/"
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoLinkedin}
        />
        <SocialLink href="" aria-label="Send me an email" icon={IoMail} />
      </div>
    </div>
  )
}
