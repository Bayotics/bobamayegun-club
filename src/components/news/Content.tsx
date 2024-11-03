import { NewsCard } from "./Cards";

export function Content () {
    return (
        <div className="news-content-main mt-32 mb-20">
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
                <NewsCard />
            </div>
        </div>
    )
}