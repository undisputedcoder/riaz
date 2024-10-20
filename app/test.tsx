'use client'

import projectsData from '@/data/projectsData'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import Card from '@/components/ProjectCard'
import Carousel from 'react-multi-carousel'
import Image from '@/components/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Badge } from '@/components/Badge'
import Link from '@/components/Link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const CustomNextArrow = (props: any) => {
//   const { onClick } = props
//   return (
//     <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
//       <button type="button" onClick={onClick} className="bg-white rounded-full p-2 hover:bg-gray-100">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
//           <path
//             fillRule="evenodd"
//             d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//     </div>
//   )
// }

// const CustomPrevArrow = (props: any) => {
//   const { onClick } = props
//   return (
//     <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
//       <button type="button" onClick={onClick} className="bg-white rounded-full p-2 hover:bg-gray-100">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
//           <path
//             fillRule="evenodd"
//             d="M12.707 5.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 01-1.414 0l-4 4a1 1 0 01-1.414-1.414L6.586 10 2.293 5.707a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//     </div>
//   )
// }

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   nextArrow: <CustomNextArrow />,
//   // prevArrow: <CustomPrevArrow />,
// }

export default function Test() {
  return (
    <>
      <div className="my-10 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Projects I have done
          </h3>
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Projects &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <div className="-m-4 flex flex-col">
            {projectsData.map((d) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  tags={d.tags}
                />
              </div>
            ))}
          </div>
          {/* <Card className="border-none shadow-sm outline-none ring-0">            
            <CardContent>
              <Slider {...settings}>
                <div>
                  <Image
                    alt="title"
                    src="/static/images/google.png"
                    className="object-cover object-center md:h-36 lg:h-48"
                    style={{ width: 733, height: 'auto' }}
                    width={733}
                    height={351}
                  />
                </div>
                <div>
                  <Image
                    alt="title"
                    src="/static/images/time-machine.jpg"
                    className="object-cover object-center md:h-36 lg:h-48"
                    style={{ width: 733, height: 'auto' }}
                    width={733}
                    height={351}
                  />
                </div>
              </Slider>
              <div className='py-6'/>
              <div className="mb-3 flex flex-wrap">
                <Badge className="mb-2 mr-2 text-lg" variant={'outline'}>
                  {'blah'}
                </Badge>
              </div>
            </CardContent>
          </Card>
          <div className='py-6'/>
          <Card className="border-none shadow-sm outline-none ring-0">
            <CardHeader>
              <CardTitle>
                <p className="px-0 text-2xl">{'blah'}</p>
              </CardTitle>
              <CardDescription>{'blah'}</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider {...settings}>
                <div>
                  <Image
                    alt="title"
                    src="/static/images/google.png"
                    className="object-cover object-center md:h-36 lg:h-48"
                    style={{ width: 733, height: 'auto' }}
                    width={733}
                    height={351}
                  />
                </div>
                <div>
                  <Image
                    alt="title"
                    src="/static/images/time-machine.jpg"
                    className="object-cover object-center md:h-36 lg:h-48"
                    style={{ width: 733, height: 'auto' }}
                    width={733}
                    height={351}
                  />
                </div>
              </Slider>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </>
  )
}
