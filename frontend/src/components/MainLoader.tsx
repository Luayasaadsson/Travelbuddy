export default function MainLoader() {
    return (
        <div className="relative flex w-full items-center justify-center bg-background px-4">
            <div className="relative right-[5px] size-32 rounded-full bg-primary"></div>

            <div className="absolute bottom-[0px] flex h-44 w-36 items-center justify-center rounded-t-full bg-primary  pt-16">
                <span className="circle2 animation-delay-1 animation2 mb-2 rounded-full bg-black" />
                <span className="circle2 animation-delay-2 animation2 mb-2 rounded-full bg-black" />
                <span className="circle2 animation-delay-3 animation2 mb-2 rounded-full bg-black" />
            </div>
            <div className="relative left-[5px] size-32 rounded-full bg-primary"></div>
           {/*  <span className="absolute right-[90px] top-[140px] size-14 rounded-full bg-primary/85" />
            <span className="absolute right-[70px] top-[200px] size-8 rounded-full bg-primary/70" /> */}
        </div>
    )
}


/*---------------------------------------*/

    /* <span className="circle2 animation-delay-1 animation2 mb-2 rounded-full bg-black" />
            <span className="circle2 animation-delay-2 animation2 mb-2 rounded-full bg-black" />
            <span className="circle2 animation-delay-3 animation2 mb-2 rounded-full bg-white" />
            <span className="absolute right-[165px] top-[220px] size-14 rounded-full bg-primary/85" />
            <span className="absolute right-[198px] top-[280px] size-8 rounded-full bg-primary/70" /> */

/*---------------------------------------*/

/* export default function MainLoader() {
    return (
        <div className="loading-main relative">
            <span className="circle2 animation-delay-1 animation2 mb-2 rounded-full bg-background" />
            <span className="circle2 animation-delay-2 animation2 mb-2 rounded-full bg-background" />
            <span className="circle2 animation-delay-3 animation2 mb-2 rounded-full bg-background" />
            <span className="absolute size-14 rounded-full bg-primary/85 top-[220px] right-[165px]" />
            <span className="absolute size-8 rounded-full bg-primary/70 top-[280px] right-[198px]" />
        </div>
    )
}

export default MainLoader
 */
