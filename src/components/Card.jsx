const Card = ({
  classValues,
  img,
  author,
  verified,
  textColor,
  borderColor = "border-white",
  children,
}) => {
  return (
    <div className={`${classValues} card rounded-lg p-6 md:p-8`}>
      <div className="flex items-center">
        <img
          src={img}
          className={`w-10 rounded-full border-[3px] ${borderColor}`}
          alt=""
        />
        <div className="card-posted-by ml-4">
          <h2
            className={`card-author-name ${textColor} font-medium leading-normal text-sm`}
          >
            {author}
          </h2>
          <p
            className={`card-author-verify ${textColor} opacity-50 leading-normal font-medium text-xs`}
          >
            {verified && "Verified Graduate"}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Card;
