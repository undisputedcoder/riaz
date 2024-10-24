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
    active: false,
    items: [
      {
        title: 'Software Engineer',
        roleType: 'Fulltime',
        startDate: '2024/04/15',
        description:
          'Deprecated legacy Java middleware code running on JBoss to WildFly for improved performance of bulk processing jobs. \n Developed an API from scratch with other teams in a tight deadline of 6 weeks to enable support for a requested feature by one of our clients.\n Collaborated closely with other cross-functional streams in an agile environment to meet project deadlines and ensure quality standards.',
        techStack: [
          { name: 'Java', href: '' },
          { name: 'TypeScript', href: '' },
          { name: 'AWS', href: '' },
          { name: 'TeamCity', href: '' },
          { name: 'BitBucket', href: '' },
          { name: '', href: '' },
          { name: '', href: '' },
        ],
      },
      {
        title: 'Associate Software Engineer',
        roleType: 'Fulltime',
        startDate: '2022/08/15',
        endDate: '2024/02/15',
        description:
          'Developed and maintained software for EMV contactless payment systems, implementing new features and resolving bugs using a test driven development approach.\n Migrated over 150 internal packages built on Ubuntu16 to be compatible on Ubuntu22 due to end of life support and as part of security improvements\n Created Infrastructure as Code templates using AWS CDK for several components based on design from principal engineers to automate infrastructure setup and deployments.\n Developed Ansible modules and playbooks for the cloud operations team to update all the nodes and ensure the environment is up to date.\n',
        techStack: [
          { name: 'Java', href: '' },
          { name: 'C++', href: '' },
          { name: 'TypeScript', href: '' },
          { name: 'AWS', href: '' },
          { name: 'TeamCity', href: '' },
          { name: 'BitBucket', href: '' },
          { name: 'Bash', href: '' },
          { name: 'Ansible', href: '' },
        ],
        active: false,
      },
    ],
  },
  {
    name: 'OBSI PTY LTD',
    active: false,
    items: [
      {
        title: 'Software Developer',
        roleType: 'Part-time',
        startDate: '2021/11/22',
        endDate: '2022/08/08',
        description:
          'Developing a solution to make REST API calls across different e‑commerce platforms so data can be passed between platforms\n Automating several manual tasks to improve efficiency, save time and be able to scale for handling over 22,000 different products.\n Previously developed the front‑end of a mobile app that interacts with a custom REST API built in Python/Flask and PostgreSQL.',
        techStack: [
          { name: 'Python', href: '' },
          { name: 'Flutter', href: '' },
          { name: 'Firebase', href: '' },
          { name: 'PostgreSQL', href: '' },
          { name: 'Wordpress', href: '' },
          { name: 'Flask', href: '' },
        ],
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
  {
    name: 'C++',
    id: 'cplusplus',
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
  // {
  //   name: 'Plotly',
  //   id: 'plotly',
  //   category: 'AI & Data Science',
  //   field: 'Data Science',
  //   subfield: 'Visualization',
  //   level: 'advanced',
  // },
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
    name: 'BitBucket',
    id: 'bitbucket',
    category: 'Other',
    field: 'Source Control',
    level: 'advanced',
  },
]
