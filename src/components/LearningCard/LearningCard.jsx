import Button from "../Button/Button";

export default function LearningCard({
  image,
  title,
  description,
  buttonText,
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="bg-gradient-to-br from-secondary-700 to-secondary-400 text-white rounded-xl shadow-md w-full h-80 flex flex-col justify-center"
        style={{ padding: "20px" }}
      >
        <img src={image} alt={title} className="h-20 w-20 mb-4 mx-auto" />
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
      <div className="learning-card-button w-full">
        <Button
          label={buttonText}
          customClasses="bg-white text-primary-800 border-2 border-primary-800 btn-hover-primary w-full"
          padding="16px 24px"
        />
      </div>
    </div>
  );
}
