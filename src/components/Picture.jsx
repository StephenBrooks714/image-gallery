import images from "../helper/data.js";

export default function Picture() {
    return (
        <>
            {images.map((images) => {
                return (
                    <>
                        <div className={"col-lg-3 fadeInLeft col-md-6 mb-5"}>
                            <div className={"card hover-zoom p-3"}>
                                <img src={images.src} alt={images.alt} className={"imgSize"} width={images.width}
                                     height={images.height}/>
                                <p className={"card-footer"}>
                                    {images.title}
                                </p>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    )
}