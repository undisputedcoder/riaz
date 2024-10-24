interface Project {
  title: string
  tags: string[]
  description: string
  href?: string
  imgSrc?: string[]
  link?: string
}

const projectsData: Project[] = [
  {
    title: 'Hot Dog or Not Hot Dog',
    tags: ['Python', 'Tensorflow', 'Streamlit'],
    description: `Inspired from HBO's Silicon Valley tv show, this is a simple app that detects whether an image is a hot dog or not a hot dog using a model trained using Tensorflow.`,
    imgSrc: ['/static/images/project1.png', '/static/images/project1.png'],
    link: 'https://github.com/undisputedcoder/Hot-Dog-or-Not-Hot-Dog',
  },
  {
    title: 'Disney Sentiment Analyser',
    tags: ['Python', 'Tensorflow', 'Streamlit'],
    description: `An application that classifies whether the sentiment of disneyland review(s) is good or bad based on an NLP model trained using Tensorflow.`,
    imgSrc: ['/static/images/project2.jpg', '/static/images/project2.jpg'],
    link: 'https://github.com/undisputedcoder/Disney-Sentimentron',
  },
]

export default projectsData
