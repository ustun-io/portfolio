import { Typography, Wrapper } from '../../component/'

import introLogo from './asset/icon.png'
import { description, jobTitle } from './hero.constant'

const HeroComponent = () => {
  return (
    <>
      <Wrapper innerClassName={'h-[40rem] w-full relative'}>
        <div className={'h-full w-full'} id={'home'}>
          <div className={'__app_hero_bg absolute opacity-60 left-0 -mt-2 w-full h-full'}></div>
          <div className={'bg-slate-900 w-full h-full'}></div>
        </div>
        <div className={'flex justify-evenly absolute w-full top-1/4 -mt-5'}>
          <div
            className={
              'w-[24rem] md:min-w-[31rem] md:max-w-[34rem] flex flex-col items-center justify-center text-center md:text-left md:px-0'
            }
          >
            <Typography variant={'h1'} content={jobTitle} className={'text-slate-300'} />
            <Typography variant={'p'} content={description} className={'text-slate-300 text-lg'} />
          </div>
          <img src={introLogo} alt={'svg icon'} className={'h-[25rem] -ml-10 hidden md:block'} />
        </div>
      </Wrapper>
    </>
  )
}

export { HeroComponent }
