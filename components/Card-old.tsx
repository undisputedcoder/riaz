import Image from './Image'
import { Badge } from '@/components/Badge'

const Card = ({ title, description, imgSrc, href, tags, link }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && (
        <Image
          alt={title}
          src={imgSrc}
          className="mx-auto object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={286}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <div className="mb-3 flex flex-wrap">
          {tags.map((tag, index) => (
            <Badge key={tag} className="mb-2 mr-2" variant={'outline'}>
              {tag}
            </Badge>
          ))}
        </div>
        <p className="prose prose-sm mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="cursor-not-allowed rounded border border-gray-400 bg-blue-500 px-4 py-2 font-semibold text-white opacity-50 shadow hover:bg-blue-700">
            Demo
          </button>
          <a href={link} target="_blank">
            <button className="rounded border border-gray-400 bg-blue-500 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Card
