'use client'
import { BaseModal } from "./BaseModal";
import { newsData } from "./newsData";


export function NewsCard () {

    return (
        <div className="news-cards grid grid-cols-3 gap-10">
            {newsData.map((newsItem) => {
                return(
                    <div key={newsItem.newsTitle}>
                        <div className="news-card">
                            <div className={`news-card-image-i rounded-3xl h-[250px] place-content-end`}
                            style={{backgroundImage: `url(${newsItem.bgImg.src})`, backgroundSize: 'cover'}}>
                                <div 
                                className="news-date text-white rounded-br-3xl w-1/6 float-right bg-[#7b3db6] p-1">
                                    <h1 className="text-white text-center text-lg">
                                        {newsItem.newsDate} <br/> {newsItem.newsMonth.slice(0,3)}
                                    </h1>
                                </div>
                            </div>
                            <div className='news-card-texts mt-6'>
                                <h1 className='text-xl font-semibold text-gray-700'>
                                    {newsItem.newsTitle}
                                </h1>
                                <p className="mt-4 text-gray-500">
                                    {newsItem.newsDetails.slice(0, 80)}....
                                </p>
                                <div className="news-btn mt-8 ">
                                    <BaseModal 
                                        newsDate={newsItem.newsDate}
                                        newsMonth={newsItem.newsMonth}
                                        newsYear={newsItem.newsYear}
                                        title={newsItem.newsTitle}
                                        newsDetails={newsItem.newsDetails}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
           
        </div>
    )
}