import { TypewriterEffectSmooth } from "../ui/TypewriterEffect";


const Experiment = () => {
    const words = [
        {
          text: "Build",
        },
        {
          text: "awesome",
        },
        {
          text: "apps",
        },
        {
          text: "with",
        },
        {
          text: "Aceternity.",
          className: "font-title text-blue-500 dark:text-blue-500",
        },
      ];
    return (
        <div>
            This is my Experiemnt
            <TypewriterEffectSmooth words={words} />
        </div>
    );
};

export default Experiment;