import AnimatedBtn from "../HomePage/AnimatedBtnForAbout";

export function Content () {
    return (
        <div className="news-content-main mt-32">
            <div className = 'news-header w-2/3 m-auto'>
                <h1 className="text-center text-3xl font-semibold">
                    Our Latest News
                </h1>
                <p className="mt-3 text-center text-gray-600 text-lg"> 
                    Here, you’ll find news on our recent and upcoming 
                    activities, cultural celebrations, member achievements, 
                    and community outreach programs.
                </p>
            </div>
            <div className="mt-8 px-20 py-10 news-block">
                <div className="news-cards grid grid-cols-3">
                    <div className="news-card">
                        <div className="news-card-image-i rounded-3xl h-[250px] place-content-end">
                            <div 
                            className="news-date text-white rounded-br-3xl w-1/4 float-right bg-[#7b3db6] p-1">
                                <h1 className="text-white text-center text-lg">2 <br/> Nov</h1>
                            </div>
                        </div>
                        <div className='news-card-texts mt-6'>
                            <h1 className='text-xl font-semibold text-gray-700'>
                                Bobamayegun Scholarship Program Now Open for Applications
                            </h1>
                            <p className="mt-4 text-gray-500">
                                Bobamayegun okunrin Akile Ijebu is proud to support educational
                                advancement within our community. The 2024 
                                Bobamayegun Scholarship Program is now.....
                            </p>
                            <div className="news-btn mt-8 ">
                                <AnimatedBtn 
                                    style={'bg-black hover:bg-gray-800 px-4 py-2 text-purple-200 w-[45%]'}
                                    text={'Read more →'} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}