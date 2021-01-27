import { HeaderSmall } from '@shared-components';
import Image from 'next/image';
import WorkLogos from './work-logos';

export default function Landing(): JSX.Element {
  return (
    <>
      <div className="relative py-10 lg:py-20 h-90vh" id="skills">
        <img
          src="/images/vectors/cylinder.svg"
          alt="Cylinder Vector"
          className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright"
        />
        <img
          src="/images/vectors/circle-spin.svg"
          alt="Vector"
          className="fixed -left-10 -bottom-14 lg:-left-44 lg:-bottom-44 w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none animate-spin"
        />
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4  h-full place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <HeaderSmall text="Where he has worked?" />
              <h1 className="w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal">
                Worked with several organizations ranging from campus clubs to startups.
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Work <span className="text-pink">Experience.</span>
              </h1>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 grid grid-cols-3 gap-4 lg:gap-14 my-10 sm:mt-0">
            <Image
              src="/images/companies/coding_blocks.svg"
              alt="Coding Blocks"
              width={80}
              height={80}
              layout="responsive"
            />
            <Image
              src="/images/companies/workmailcommunity.svg"
              alt="Work Mail Community"
              width={80}
              height={80}
              layout="responsive"
            />
            <Image
              src="/images/companies/hashbinary.svg"
              alt="Hashbinary LLP"
              width={80}
              height={80}
              layout="responsive"
            />
            <Image src="/images/companies/zoob_labs.svg" alt="Zoob Labs" width={80} height={80} />
            <Image
              src="/images/companies/inception_wave.svg"
              alt="Inception Wave"
              width={80}
              height={80}
              layout="responsive"
            />
            <Image src="/images/companies/aaruush.svg" alt="Aaruush'18" width={80} height={80} />
            <Image
              src="/images/companies/iec.svg"
              alt="SRM Indian Energy Conference"
              width={80}
              height={80}
              layout="responsive"
            />
            <Image
              src="/images/companies/social_dukan.svg"
              alt="Social Dukan"
              width={80}
              height={80}
              layout="responsive"
            />
            <Image
              src="/images/companies/dezigndia.png"
              alt="Social Dukan"
              width={80}
              height={80}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
}
