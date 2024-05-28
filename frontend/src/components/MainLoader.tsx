import "./MainLoader.css"

function MainLoader() {
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
