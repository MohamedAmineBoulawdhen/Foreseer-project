const SentimentBarChart = ({ profile }: { profile: any }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
      <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 sm:p-8">
        <h2 className="text-xl font-bold mb-10">Feelings</h2>
        <span className="text-sm font-semibold text-gray-500"></span>
        <div className="flex items-end flex-grow w-full mt-16 space-x-2 sm:space-x-3">
          {profile.sentimentAnalysis.feelings.map(
            (feeling: any, index: any) => (
              <div
                key={index}
                className="relative flex flex-col items-center flex-grow pb-5 group"
              >
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  {feeling.value}
                </span>
                <div
                  className={`relative flex justify-center w-full  bg-indigo-400`}
                  style={{
                    height: feeling.value * 10,
                  }}
                ></div>
                <span className="absolute bottom-0 text-xs font-bold">
                  {feeling.feeling.charAt(0).toUpperCase() +
                    feeling.feeling.slice(1)}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SentimentBarChart;
