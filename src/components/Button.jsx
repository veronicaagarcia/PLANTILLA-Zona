const Button = ({ text, url }) => {
	return (
		
        <a href={url} >
			<button className="mx-auto mt-2 text-CBACKGROUND hover:cursor-pointer bg-COLOR1 hover:bg-COLOR2 w-[200px] md:w-[220px] xl:w-[240px] h-[40px] md:h-[45px] xl:h-[50px] text-center items-center rounded-md">
               {text}
            </button>
        </a> 
		
	);
};

export default Button;