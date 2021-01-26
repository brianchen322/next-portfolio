import { HeaderSmall } from '@shared-components';
import Link from 'next/link';
import TextCards from 'shared/components/text-cards';
import ProjectsCards from './projects-cards';

export default function Projects(): JSX.Element {
  return (
    <>
      <div>
        <div className="relative h-auto sm:h-auto md:h-90vh">
          <img
            src="/images/vectors/circle-spin.svg"
            alt="Circle Vector"
            className="absolute -right-50p md:-right-96 bottom-52 md:-bottom-0 pointer-events-none animate-spin"
          />
          <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 lg:h-90vh place-items-center items-center">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center w-3/4 relative">
                <img
                  src="/images/vectors/boxes.svg"
                  alt="Box Vector"
                  className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
                />
                <HeaderSmall text="Let’s walk the talk!" />
                <h1 className="w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal">
                  Some awesome <span className="text-pink font-bold">products</span> for the awesome
                  poeple
                </h1>
                <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  Something he has <span className="text-pink font-bold">built.</span>
                </h1>
                <div className="sm:ml-52 xl:ml-96 transform rotate-90">
                  <Link href="/work">
                    <img
                      src="/images/vectors/arrows-right.svg"
                      alt="Next"
                      className="hidden lg:block w-14 cursor-pointer lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translateright "
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCards
                  heading="Websites"
                  text=" He adds certain special hidden recipes and making his websites look enticing."
                  color="violet"
                />
              </div>
              <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCards
                  heading="Apps"
                  text="The art of creating some awesome smartphone applications using React Native."
                  color="pink"
                />
              </div>
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCards
                  heading="UI/UX"
                  text="He uses his outstanding engineering abilities to provide users an awesome interface and experience"
                  color="violet"
                />
              </div>
            </div>
          </div>
        </div>
        <ProjectsCards />
      </div>
    </>
  );
}
