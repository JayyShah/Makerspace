import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="MakerSpace" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            {/* <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Work Hard, Achieve More!
            </h2> */}
            <p className='font-medium capitalize mt-4 text-base'>
            Welcome to MakerSpace, your hub for startup insights, fundraising, and venture capital. We offer expertise to entrepreneurs and business enthusiasts. Beyond blogs, we curate in-depth articles on startup dynamics, fundraising strategies, and venture capital. Our commitment includes exclusive features like Customer Experience strategy, incubation support, mentorship, and access to a vibrant community. Whether a pro or budding entrepreneur, MakerSpace is your go-to for success in the startup landscape. Join us, unlock premium features, and position yourself for success in the dynamic world of entrepreneurship. Explore MakerSpace, where innovation meets opportunity.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection;