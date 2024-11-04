
export function Banner ({bannerBgName, textHeader, subText}) {
    return(
        <div className= {`${bannerBgName} py-40 px-32`}>
            <h1 className="text-6xl font-semibold text-white">
                {textHeader}
            </h1>
            <p className="mt-8 font-normal text-lg text-white">
                {subText}
            </p>
        </div>
    )
} 