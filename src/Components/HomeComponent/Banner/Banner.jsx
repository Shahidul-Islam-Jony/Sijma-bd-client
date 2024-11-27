import desktopBanner from "../../../assets/images/Banner.png";
import mobileBanner from "../../../assets/images/Banner-mobile.png";

const Banner = () => {
    return (
        <div className="mt-2">
            <picture>
                {/* Source for larger screens */}
                <source srcSet={desktopBanner} media="(min-width: 768px)" />
                {/* Default source (mobile-first approach) */}
                <img src={mobileBanner} className="rounded-md w-full" alt="sijma-banner" />
            </picture>
        </div>
    );
};

export default Banner;
