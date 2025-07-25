import Button from "../Button/Button";

export default function LearningCard({
  image,
  title,
  description,
  buttonText,
}) {
  return (
    <div className="flex flex-col items-center text-center h-full">
      <div
        className="bg-gradient-to-br from-primary-800 to-primary-500 text-primary-100 rounded-xl shadow-md w-full h-80 flex flex-col justify-center"
        style={{ padding: "20px" }}
      >
        <img
          src={image}
          alt={title}
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-4 mx-auto"
        />
        <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 md:mb-4">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="learning-card-button w-full mt-4">
        <Button
          label={buttonText}
          customClasses="bg-white shadow text-primary-800 border-2 border-primary-800 btn-hover-primary w-full"
          padding="12px 16px "
        />
      </div>
    </div>
  );
}
