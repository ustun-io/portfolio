import { Wrapper } from '../../components/'

import introLogo from './assets/implementacion-de-lms-moodle-768x768.png'

const Home = () => {
  const jobTitle = 'Fullstack Developer'
  const description = `Hello, my name is Eren Üstün. I'm in my early 20s and from Switzerland. I work as a freelance Fullstack developer and create robust as well as user-friendly web apps.`

  return (
    <Wrapper innerClassName={'h-[40rem] w-full relative'}>
      <div className={'h-full w-full'} id={'home'}>
        <div className={'__app_home_bg absolute opacity-60 left-0 -mt-2 w-full h-full'}></div>
        <div className={'bg-slate-900 w-full h-full'}></div>
      </div>
      <div className={'flex justify-evenly absolute w-full top-1/4 -mt-5'}>
        <div className={'w-[27rem] flex flex-col items-center justify-center'}>
          <h1 className={'text-6xl font-bold font-poppins font-bold tracking-wide'}>{jobTitle}</h1>
          <p className={'tracking-wide leading-6 mt-8 text-lg font-inter'}>{description}</p>
        </div>
        <img src={introLogo} alt={'svg icon'} className={'h-[25rem] -ml-10'} />
      </div>
    </Wrapper>
  )
}

export { Home }
