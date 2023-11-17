import sampleImage from '../../../public/lan-en.png';
import Image from "next/image";
export function Skills() {
    return (
        <div className=' mt-32'>
            <h2 className="mt-3 text-center mb-5 text-2xl font-medium tracking-tight text-slate-200 sm:text-4xl">Skills</h2>

            <div className='grid grid-cols-12 mb-5'>
                <h4 className='col-span-2'>Languages</h4>
                {
                    [1,2].map((element) => (
                        <Image key={element} src={sampleImage} width={30} height={30} alt='sample image' />
                    ))
                }
            </div>

            <div className='grid grid-cols-12 mb-5'>
                <h4 className='col-span-2'>Frameworks</h4>
                {
                    [1,2,3,4,5,6,4,5,6,].map((element) => (
                      <Image key={element} src={sampleImage} width={30} height={30} alt='sample image' />
                    ))
                }
            </div>
            <div className='grid grid-cols-12 mb-5'>
                <h4 className='col-span-2'>Tools</h4>
                {
                    [1,2,3,4].map((element) => (
                      <Image key={element} src={sampleImage} width={30} height={30} alt='sample image' />
                    ))
                }
            </div>
            <div className='grid grid-cols-12'>
                <h4 className='col-span-2'>Design</h4>
                {
                    [1,2,3,4,5,6].map((element) => (
                      <Image key={element} src={sampleImage} width={30} height={30} alt='sample image' />
                    ))
                }
            </div>

            {/*<div className="w-full inline-flex flex-nowrap">*/}
            {/*    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">*/}
            {/*        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">*/}
            {/*            {*/}
            {/*                [1,2,3,4,5,6,7,8,9].map((element) => (*/}
            {/*                    <li key={element}>*/}
            {/*                        <Image src={sampleImage} width={100} height={100} alt='sample image' />*/}
            {/*                    </li>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">*/}
            {/*            {*/}
            {/*                [1,2,3,4,5,6,7,8,9].map((element) => (*/}
            {/*                    <li key={element}>*/}
            {/*                        <Image src={sampleImage} width={100} height={100} alt='sample image' />*/}
            {/*                    </li>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="w-full inline-flex flex-nowrap">*/}
            {/*    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">*/}
            {/*        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-d2">*/}
            {/*            {*/}
            {/*                [1,2,3,4,5,6,7,8,9].map((element) => (*/}
            {/*                    <li key={element}>*/}
            {/*                        <Image src={sampleImage} width={100} height={100} alt='sample image' />*/}
            {/*                    </li>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-d2" aria-hidden="true">*/}
            {/*            {*/}
            {/*                [1,2,3,4,5,6,7,8,9].map((element) => (*/}
            {/*                    <li key={element}>*/}
            {/*                        <Image src={sampleImage} width={100} height={100} alt='sample image' />*/}
            {/*                    </li>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="w-full inline-flex flex-nowrap">*/}
            {/*    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">*/}
            {/*        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-d4">*/}
            {/*            {*/}
            {/*                [1,2,3,4,5,6,7,8,9].map((element) => (*/}
            {/*                    <li key={element}>*/}
            {/*                        <Image src={sampleImage} width={100} height={100} alt='sample image' />*/}
            {/*                    </li>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-d4" aria-hidden="true">*/}
            {/*            {*/}
            {/*                [1,2,3,4,5,6,7,8,9].map((element) => (*/}
            {/*                    <li key={element}>*/}
            {/*                        <Image src={sampleImage} width={100} height={100} alt='sample image' />*/}
            {/*                    </li>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
