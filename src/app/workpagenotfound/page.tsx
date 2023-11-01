import WorkSlider from "@/components/projects/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 pt-28 flex items-start">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vh] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2">My Projects</h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              earum fugiat temporibus optio adipisci sit minima sint culpa
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
