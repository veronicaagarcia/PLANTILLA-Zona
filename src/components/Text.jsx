const Text = ({ text, textColor}) => {
	return (
        <p className={`text-star font-extralight mt-4 md:mt-8 xl:mt-12 mb-4 md:mb-8 xl:mb-12 text-${textColor} md:max-w-[70vw] md:text-center`}>{text}</p>
    )
}
export default Text;