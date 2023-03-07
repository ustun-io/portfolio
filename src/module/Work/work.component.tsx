import { Typography, Wrapper } from '../../component/'

const ProjectView = () => {
  return (
    <Wrapper>
      <div className={'w-full py-24'} id={'projects'}>
        <Typography variant={'h1'} className={'text-center sm:text-left'}>
          <span className={'text-blue-300'}>My</span> Work
        </Typography>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0'}>
          <div className={'w-full md:w-11/12 relative'}>
            <div className="relative max-w-full overflow-hidden bg-cover bg-no-repeat">
              <img
                src="/image/showcase-shop.jpg"
                className="max-w-full rounded-md"
                alt="thumbnail for ecommerce application"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full flex flex-col justify-center items-center overflow-hidden bg-slate-900 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 cursor-pointer">
                <div className={'absolute flex flex-col items-center'}>
                  <h3 className={'text-center --Typography-h3'}>
                    Advantex:
                    <br />
                    E-Commerce Store
                  </h3>
                  <div className={'flex flex-row items-center justify-center flex-wrap gap-x-3'}>
                    <span className={'bg-blue-600 border border-blue-500 px-2 rounded'}>Frontend</span>
                    <span className={'bg-blue-600 border border-blue-500 px-2 rounded'}>NextJS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'w-full md:w-11/12 relative'}>
            <div className="relative max-w-full overflow-hidden bg-cover bg-no-repeat">
              <img
                src="/image/showcase-shop.jpg"
                className="max-w-full rounded-md"
                alt="thumbnail for ecommerce application"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full flex flex-col justify-center items-center overflow-hidden bg-slate-900 bg-fixed opacity-70 transition duration-300 ease-in-out hover:opacity-70 cursor-pointer">
                <div className={'absolute flex flex-col items-center'}>
                  <h3 className={'text-center --Typography-h3'}>Advantex - E-Commerce Frontend</h3>
                  <div className={'flex flex-row items-center justify-center flex-wrap gap-x-3'}>
                    <span className={'bg-blue-600 border border-blue-500 px-2 rounded'}>Frontend</span>
                    <span className={'bg-blue-600 border border-blue-500 px-2 rounded'}>NextJS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className={'space-y-12 mt-5'}>
            <div className={'flex flex-col'}>
              <Typography variant={'h2'} content={'Advantex - E-Commerce App'} />
              <Typography variant={'p'}>
                With Next.js, this e-commerce application is fast and optimized for performance, ensuring that users can
                quickly and easily navigate through the various pages and features of this app. Authentication is
                integrated into the application, meaning that users can create accounts, log in, and log out securely
                using an email address.
                <br />
                <br /> Data fetching in Next.js allows you to render your content in different ways, for this
                application's use case Server-side rendering (`SSR`) and Static-site generation (`SSG`) are implemented
                to pre-render pages. <br />
                <br />
                Data is queried by and mutated on a Node.JS Backend, I built on top of NestJS. Learn more.
              </Typography>
            </div>
            <div className={'flex flex-col'}>
              <Typography variant={'h3'} content={'Highlights'} />
              <Typography variant={'p'}>
                <ul className={'list-disc'}>
                  <li>Authentication & Authorization</li>
                  <li>Filtering products based on search phrase, brand, category and specifications (RAM, etc)</li>
                  <li>Implemented react-query with NextJS' `SSR`</li>
                  <li>Manage products via shopping cart and wishlist</li>
                  <li>Internationalization (English, German and French)</li>
                </ul>
              </Typography>
            </div>
            <div className={'flex flex-col'}>
              <Typography variant={'h3'} content={'Deploy'} />
              <Typography
                variant={'p'}
                content={
                  "I run a demo of this project on a NGINX web server on a VPS. Reverse proxy functionality is being used to forward the NextJS instance to the domain. SSL: [Let's Encrypt](https://letsencrypt.org/)"
                }
              />
            </div>
          </div>*/}
        </div>
      </div>
    </Wrapper>
  )
}

export { ProjectView }
