import React from 'react'

const Section = () => {
  return (
    <>
      <section className="py-10 px-3 text-white text-center bg-black md:text-left">
            <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
                <div className="left flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold leading-6 min-[540px]:text-4xl md:text-5xl">Enjoy on your TV.</h1>
                    <h2 className="text-lg font-normal leading-5 md:text-2xl">Watch on smart TVs, PlayStation, Xbox,
                        Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>
                <div className="right relative overflow-hidden">
                    <img className="w-full relative z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="tv"/>
                    <div
                        className="h-full left-1/2 max-h-[54%] max-w-[73%] absolute top-[76%] translate-x-[-51%] translate-y-[-103%] w-full">
                            {/* <iframe src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" className='w-full h-full' allow='autoplay; encrypted-media' allowfullscreen frameborder="0"></iframe> */}
                        <video className="w-full h-full" loop autoPlay>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"/>
                        </video>
                    </div>
                </div>
            </div>
    </section>

    <div className="w-full h-2 bg-[#222222]"></div>

    <section className="py-10 px-3 text-white text-center bg-black md:text-left">
            <div className="flex flex-col gap-5 md:flex-row-reverse md:justify-between md:items-center">
                <div className="left flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold leading-6 min-[540px]:text-4xl md:text-5xl">Download your shows to
                        watch offline.</h1>
                    <h2 className="text-lg font-normal leading-5 md:text-2xl">Save your favourites easily and always have
                        something to watch.</h2>
                </div>
                <div className="right">
                    <img className="relative" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="mobile-0819"/>
                    <div
                        className="flex flex-row gap-3 items-center w-3/5 bg-black border-2 border-solid border-[#ffffff40] mx-auto rounded-md shadow py-2 px-1">
                        <div><img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="img"/></div>
                        <div>
                            <div className="text-[0.8em]">Stranger Things</div>
                            <div className="text-[0.6em] text-blue-500">Downloading...</div>
                        </div>
                        <div className="block w-[14em] h-[3em] bg">
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <div className="w-full h-2 bg-[#222222]"></div>

    <section className="py-10 px-3 text-white text-center bg-black md:text-left">
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-center">
                <div className="left flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold leading-6 min-[540px]:text-4xl md:text-5xl">Watch everywhere.</h1>
                    <h2 className="text-lg font-normal leading-5 md:text-2xl">Stream unlimited movies and TV shows on your
                        phone, tablet, laptop, and TV.</h2>
                </div>
                <div className="right relative overflow-hidden">
                    <img className="w-full relative z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="devices"/>
                    <div
                        className="h-full left-1/2 max-h-[54%] max-w-[65%] absolute top-[76%] translate-x-[-51%] translate-y-[-131%] w-full">
                        <video className="w-full h-full" loop autoPlay>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"/>
                        </video>
                    </div>
                </div>
            </div>
    </section>

    <div className="w-full h-2 bg-[#222222]"></div>

    <section className="py-10 px-3 text-white text-center bg-black md:text-left">
            <div className="flex flex-col gap-5 md:flex-row-reverse md:justify-between md:items-center">
                <div className="left flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold leading-6 min-[540px]:text-4xl md:text-5xl">Create profiles for
                        children.</h1>
                    <h2 className="text-lg font-normal leading-5 md:text-2xl">Send children on adventures with their
                        favourite characters in a space made just for them—free with your membership.</h2>
                </div>
                <div className="right">
                    <img className="relative" src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="children"/>
                </div>
            </div>
    </section>

    <div className="w-full h-2 bg-[#222222]"></div>

    <footer className="py-10 px-3 text-[#5f5c5c] text-left bg-black">
            <div className="mb-7">
                <p>Questions? Call<span><a href="tel:000-800-040-1843"> 000-800-040-1843</a></span></p>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col gap-3">
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p>Media Centre</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <p className="mt-8">Netflix India</p>
    </footer>
    </>
  )
}

export default Section
