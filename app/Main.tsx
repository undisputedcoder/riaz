import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import RecentProjects from '@/components/RecentProjects'
import { Separator } from '@/components/Separator'
import SectionContainer from '@/components/SectionContainer'
import { Technologies } from '@/components/Technologies'
import Skills from '@/components/Skills'
import Hero from '@/components/Hero'
import Projects from './projects/page'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <SectionContainer>
        <Separator />
        <Technologies />
      </SectionContainer>
      {/* <Projects /> */}
    </>
  )
}
