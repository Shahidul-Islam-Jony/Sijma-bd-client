import desktopBanner from "../../../assets/images/Banner.png";
// import mobileBanner from "../../../assets/images/Banner-mobile.png";
// import village from "../../../assets/images/Sijma Village.mp4"

const Banner = () => {
    return (
        // <div className="mt-2 absolute">
        //     <picture>
        //         {/* Source for larger screens */}
        //         <source srcSet={desktopBanner} media="(min-width: 768px)" />
        //         {/* Default source (mobile-first approach) */}
        //         <img src={mobileBanner} className="rounded-md w-full" alt="sijma-banner" />
        //     </picture>
        // </div>
        <div>
            <img src={desktopBanner} alt="" />
        </div>
        // <div>
        //     <video src={village} controls autoPlay></video>
        // </div>
    );
};

export default Banner;
