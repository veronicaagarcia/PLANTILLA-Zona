import Button from "./Button";

const Card = ({ key, name, text, img, id, url, bgColor, bgNameColor, textColor, textButton, description , fullWidth = false}) => {

    const cardWidth = fullWidth 
        ? 'w-9/12' 
        : 'w-[290px] md:w-[300px] xl:w-[370px] max-w-[370px]';

    return (
        <section key={key} className={`rounded-md p-4 md:p-6 ${cardWidth} h-fit shadow-lg shadow-COLOR1 bg-${bgColor} hover:scale-105 transition-all duration-200`}>
            <h3 className={`text-${textColor} text-sm text-center animate-slideUp md:text-base xl:text-lg w-fit mx-auto rounded-md px-1 md:px-2 xl:px-3 mb-2 md:mb-4 xl:mb-6 uppercase`}>{name}</h3>
            <div className={`relative h-auto overflow-hidden`}>
                <p className={`text-${textColor} leading-tight font-light text-star animate-slideUp mb-2 md:mb-4 xl:mb-6`}>
                    {text}
                </p>
                {description && (
                    <ul className={`text-${textColor} list-disc font-extralight list-inside mt-4 text-xs md:text-sm xl:text-base leading-snug`}>
                        {description.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>
                )}
                
            </div>
           
            {img && 
            <div className="w-full relative">
                {!fullWidth && 
                <a className={`text-${textColor} hover:text-${bgNameColor} bg-black/60 absolute bottom-0 left-2 items-center self-center text-center rounded-md px-2 py-1 md:px-4 md:py-2 xl:py-3 mb-2 md:mb-4 xl:mb-6 z-50`} href={`${url}#${id}`}>
                    Ver ➜
                </a>
                }
                <figure className="overflow-hidden h-[240px] md:h-[280px] rounded-md z-10">
                    <img className="transition duration-300 ease-in-out bg-center object-cover w-full h-full" src={img} alt={`Imagen del servicio ${name}`} />
                </figure>
            </div>
            }
            {textButton && 
                <Button text={textButton} url={url} client:visible />
            }
        </section>
    );
};

export default Card;