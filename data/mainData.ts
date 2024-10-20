export interface Project {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith: string[]
  hidden?: boolean
}

export interface Company {
  name: string
  location?: string
  imgSrc?: string
  startDate?: string
  endDate?: string
  url?: string
  active?: boolean
  hidden?: boolean
  description?: string
  descCard?: string
  items: Experience[]
}

export interface TechStackType {
  name: string
  href?: string
}
export interface Experience {
  title: string
  roleType: 'Fulltime' | 'Part-time' | 'Consultant' | 'Freelance'
  startDate: string
  endDate?: string
  description: string
  active?: boolean
  techStack?: TechStackType[]
  hidden?: boolean
}

export interface Skill {
  name: string
  id: string
  category: 'Languages' | 'Databases' | 'AI & Data Science' | 'Cloud/Infrastructure' | 'Other'
  field?: string
  subfield?: string
  description?: string
  imgSrc?: string
  level: 'advanced' | 'familiar' | 'learning'
  hidden?: boolean
  href?: string
  mostUsed?: boolean
}

export const projectsData: Project[] = [
  {
    type: 'work',
    title: 'FlowPandas',
    description:
      'FlowPandas is an AI BI analyst microservice that allows users to interact with their reports through a chat interface to generate BI insights. The microservice provides text explanations, tables of the data, and visualizations. It connects to an API that supplies JSON data for analysis.',
    imgSrc: '/static/images/projects/7.jpg',
    builtWith: ['Redis Stack', 'OpenAI GPT-3.5', 'FastAPI', 'Pandas', 'PandasAI', 'Langchain'],
  },
  {
    type: 'work',
    title: 'Quality AI',
    description:
      'A full-stack web application assists quality auditors by analyzing support agent calls. It uses the Whisper ASR model to transcribe calls, detects silence gaps, and performs text analysis to flag inappropriate language. The Mistral LLM summarizes calls and evaluates them against predefined criteria to generate a call score. The app integrates with ticketing systems like Zendesk and TeamSupport for real-time ticket updates and supports real-time processing and analysis with deployed ASR and LLM models.',
    imgSrc: '/static/images/projects/1.jpg',
    builtWith: [
      'Mistral LLM',
      'Whisper ASR',
      'VLLM',
      'Sveltekit',
      'FastAPI',
      'Docker',
      'Postgres',
      'AWS',
      'GitHub',
      'NGINX',
      'Prisma',
      'Tailwind',
    ],
  },
  {
    type: 'work',
    title: 'AI Support Helper',
    description:
      'AI Support Helper is a microservice integrated with the Teamsupport ticketing system to track new tickets created by clients. It generates possible fixes for tickets and provides outage notifications if a matching outage article is found. The microservice searches for ticket information in a vector database that is updated periodically to ensure its knowledge remains current.',
    imgSrc: '/static/images/projects/2.jpg',
    builtWith: [
      'OpenAI',
      'Teamsupport API',
      'MySQL',
      'Pinecone',
      'FastAPI',
      'Docker',
      'AWS',
      'Langchain',
    ],
  },
  {
    type: 'work',
    title: 'DocChat',
    description:
      'DocChat is a Retrieval-Augmented Generation (RAG) microservice that enables users to interact with documentation. It keeps track of all the content within PDF pages, including text, page numbers, images, categories, and subcategories. This microservice allows for efficient and accurate information retrieval during chats with documentation.',
    imgSrc: '/static/images/projects/3.jpg',
    builtWith: ['OpenAI', 'Pinecone', 'FastAPI', 'Docker', 'AWS S3', 'Langchain'],
  },
  {
    type: 'work',
    title: 'Backlog Classifier',
    description:
      'Backlog Classifier is a tool designed to organize backlog tickets by classifying them into clusters based on their embeddings. It then generates a title for each cluster using a Large Language Model (LLM), streamlining the management and prioritization of tickets.',
    imgSrc: '/static/images/projects/4.jpg',
    builtWith: ['OpenAI GPT-3.5', 'OpenAI Ada', 'FastAPI', 'PyTorch', 'Pandas'],
  },
  {
    type: 'work',
    title: 'Tendering App',
    description:
      "Tendering App is a full-stack application designed to facilitate the tendering process. It allows contractors, consultants, and suppliers to apply to clients' tenders, which can then be managed by software admins. The app includes an admin page to control all aspects of the application, ensuring efficient and streamlined tender management.",
    imgSrc: '/static/images/projects/5.jpg',
    builtWith: ['Next.js', 'Postgres', 'AWS S3', 'Prisma', 'Tailwind'],
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/projects/6.jpg',
    repo: 'andrewsam.xyz',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
]

export const experienceData: Company[] = [
  {
    name: 'Vix Technology',
    location: 'Hybrid - Perth, Australia',
    description: '',
    imgSrc: '',
    url: '',
    active: true,
    items: [
      {
        title: 'Software Engineer',
        roleType: 'Fulltime',
        startDate: '2024/04/15',
        description:
          'Implemented new features and fixed bugs, ensuring the continuous improvement and reliability of the software. Maintained server configurations, ensuring optimal performance and availability. Attended product meetings to ideate and discuss feature enhancements, contributing to the strategic growth and development of the software. Collaborated closely with cross-functional teams to ensure the alignment of development efforts with business goals and user needs. Developing prototypes for AI features to be integrated within the software.',
        techStack: [
          { name: 'Django', href: 'https://www.djangoproject.com/' },
          { name: 'Python', href: 'https://www.python.org/' },
          { name: 'AWS', href: 'https://aws.amazon.com/' },
          { name: 'Redis', href: 'https://redis.io/' },
          { name: 'Datadog', href: 'https://www.datadoghq.com/' },
          { name: 'GitHub', href: 'https://github.com/' },
          // { name: 'OpenSearch', href: 'https://opensearch.org/' },
          { name: 'Bash', href: 'https://www.gnu.org/software/bash/' },
          { name: 'Postgres', href: 'https://www.postgresql.org/' },
          // { name: 'DjangoRQ', href: 'https://github.com/rq/django-rq' },
          { name: 'NGINX', href: 'https://www.nginx.com/' },
          { name: 'Locust', href: 'https://locust.io/' },
        ],
        active: true,
      },
      {
        title: 'Associate Software Engineer',
        roleType: 'Fulltime',
        startDate: '2022/08/15',
        endDate: '2024/02/15',
        description:
          'Developed prototypes for AI features tailored to the hospitality department, enhancing support and operational efficiency. Created a RAG documentation chat for the support team, streamlining access to information and reducing response times. Implemented automated ticket first replies with suggested solutions, improving customer service efficiency and response accuracy. Designed AI-driven BI solutions to generate insights from databases and software APIs, facilitating data-driven decision-making. Developed tools for summarization and classification of backlog tickets, assisting the product team in prioritizing and addressing issues effectively.',
        techStack: [
          { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
          { name: 'OpenAI', href: 'https://openai.com/' },
          { name: 'Pinecone', href: 'https://www.pinecone.io/' },
          // { name: 'Serverless Functions', href: 'https://vercel.com/docs/serverless-functions' },
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Langchain', href: 'https://www.langchain.com/' },
          { name: 'Pandas', href: 'https://pandas.pydata.org/' },
          { name: 'Scikitlearn', href: 'https://scikit-learn.org/' },
          { name: 'Nextjs', href: 'https://nextjs.org/' },
          { name: 'Gradio', href: 'https://gradio.app/' },
          { name: 'Postgres', href: 'https://www.postgresql.org/' },
        ],
        active: false,
      },
    ],
  },
  {
    name: 'FlairsTech',
    location: 'Maadi - Egypt',
    description:
      'FlairsTech is a software development company that specializes in building custom software solutions for businesses. We help businesses automate their processes and improve their efficiency.',
    imgSrc:
      'https://media.licdn.com/dms/image/C4D0BAQFEqFIZYFhFpA/company-logo_200_200/0/1630540236589/flairstech_logo?e=1726704000&v=beta&t=AuvxQoMg94CqpL1A2-SOgZIChOIE14uscukufiaUDv0',
    url: 'https://flairstech.com/',
    active: false,
    items: [
      {
        title: 'AI Fullstack Developer (Consultant)',
        roleType: 'Consultant',
        startDate: '2023/02/14',
        description:
          'Developed AI solutions for the operations department, enhancing efficiency and performance across various tasks. Created an AI web application for the quality team, reducing call/ticket evaluation time by up to 80% and achieving a 90% utilization rate for overall call evaluations. Led the development and deployment of the web application, handling frontend, backend, AI microservices, server configurations, and deployment.',
        techStack: [
          { name: 'Mistral LLM', href: '#' },
          { name: 'Whisper ASR', href: '#' },
          { name: 'VLLM', href: '#' },
          { name: 'Sveltekit', href: 'https://kit.svelte.dev/' },
          { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Postgres', href: 'https://www.postgresql.org/' },
          { name: 'AWS', href: 'https://aws.amazon.com/' },
          { name: 'github', href: 'https://github.com/' },
          { name: 'nginx', href: 'https://www.nginx.com/' },
          { name: 'langchain', href: 'https://www.langchain.com/' },
        ],
        active: true,
      },
    ],
  },
]

export const skillsData: Skill[] = [
  {
    name: 'Typescript',
    id: 'typescript',
    category: 'Languages',
    level: 'advanced',
  },
  {
    name: 'Python',
    id: 'python',
    category: 'Languages',
    level: 'familiar',
  },
  {
    name: 'Java',
    id: 'java',
    category: 'Languages',
    level: 'familiar',
  },
  {
    name: 'C Lang',
    id: 'clang',
    category: 'Languages',
    level: 'familiar',
  },
  // {
  //   name: 'SQL',
  //   id: 'sql',
  //   category: 'Databases',
  //   level: 'advanced',
  //   hidden: true,
  // },
  {
    name: 'PostgreSQL',
    id: 'postgres',
    category: 'Databases',
    level: 'advanced',
  },
  {
    name: 'MySQL',
    id: 'mysql',
    category: 'Databases',
    level: 'advanced',
  },
  {
    name: 'Oracle',
    id: 'oracle',
    category: 'Databases',
    level: 'advanced',
  },
  // {
  //   name: 'Redis',
  //   id: 'redis',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   subfield: 'Databases',
  //   level: 'advanced',
  //
  // },
  {
    name: 'AWS',
    id: 'aws',
    category: 'Cloud/Infrastructure',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  {
    name: 'Terraform',
    id: 'terraform',
    category: 'Cloud/Infrastructure',
    level: 'advanced',
  },
  {
    name: 'Ansible',
    id: 'ansible',
    category: 'Cloud/Infrastructure',
    level: 'advanced',
  },
  {
    name: 'AWS CDK',
    id: 'awscdk',
    category: 'Cloud/Infrastructure',
    level: 'learning',
  },
  {
    name: 'TeamCity',
    id: 'teamcity',
    category: 'Cloud/Infrastructure',
    level: 'advanced',
  },
  {
    name: 'OpenAI',
    id: 'openai',
    category: 'AI & Data Science',
    field: 'AI',
    description: 'GPTs, Whisper',
    level: 'familiar',
  },
  {
    name: 'Docker',
    id: 'docker',
    category: 'Other',
    field: 'Containers',
    level: 'advanced',
  },
  {
    name: 'Git',
    id: 'git',
    category: 'Other',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Github',
    id: 'github',
    category: 'Other',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Bash',
    id: 'bash',
    category: 'Other',
    field: 'Shell',
    level: 'advanced',
  },
  {
    name: 'Linux',
    id: 'linux',
    category: 'Other',
    field: 'OS',
    level: 'advanced',
  },
  // {
  //   name: 'NoSQL',
  //   id: 'nosql',
  //   category: 'Databases',
  //   level: 'advanced',
  //   hidden: true,
  // },
  // {
  //   name: 'MongoDB',
  //   id: 'mongodb',
  //   category: 'Web Dev',
  //   field: 'Backend',
  //   subfield: 'Databases',
  //   level: 'learning',
  // },
  {
    name: 'Pandas',
    id: 'pandas',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Numpy',
    id: 'numpy',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Anaconda',
    id: 'anaconda',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Jupyter',
    id: 'jupyter',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Matplotlib',
    id: 'matplotlib',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Plotly',
    id: 'plotly',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Seaborn',
    id: 'seaborn',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Scikit-learn',
    id: 'scikitlearn',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'ML',
    level: 'advanced',
  },
  {
    name: 'Postman',
    id: 'postman',
    category: 'Other',
    field: 'Tools',
    level: 'advanced',
  },
  // {
  //   name: 'PowerBI',
  //   id: 'powerbi',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Visualization',
  //   level: 'advanced',
  // },
  // {
  //   name: 'OpenSource LLMs, Mistral, LLAMA, Vicuna',
  //   id: 'mistral',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   level: 'advanced',
  // },
  {
    name: 'Streamlit',
    id: 'streamlit',
    category: 'AI & Data Science',
    field: 'Prototyping',
    level: 'advanced',
  },
  // {
  //   name: 'Huggingface',
  //   id: 'huggingface',
  //   category: 'AI & Data Science',
  //   field: 'AI',
  //   level: 'advanced',
  // },
  {
    name: 'Jira',
    id: 'jira',
    category: 'Other',
    field: 'Other',
    subfield: 'Fullstack',
    level: 'advanced',
  },
  {
    name: 'Selenium',
    id: 'selenium',
    category: 'Other',
    field: 'Other',
    level: 'advanced',
  },
  {
    name: 'Tableau',
    id: 'tableau',
    category: 'AI & Data Science',
    field: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Github Actions',
    id: 'githubactions',
    category: 'Other',
    field: 'Deployment',
    level: 'advanced',
  },
  {
    name: 'VS Code',
    id: 'vscode',
    category: 'Other',
    field: 'Tools',
    level: 'advanced',
  },
]
