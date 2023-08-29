const EmotionPieChart = ({ profile }: { profile: any }) => {
  const total =
    profile.sentimentAnalysis.emotions[0].value +
    profile.sentimentAnalysis.emotions[1].value;
  let postiveEmotionPercentage =
    (profile.sentimentAnalysis.emotions[1].value * 100) / total;
  postiveEmotionPercentage = Math.ceil(postiveEmotionPercentage * 100) / 100;
  let NegativeEmotionPercentage =
    (profile.sentimentAnalysis.emotions[0].value * 100) / total;
  NegativeEmotionPercentage = Math.ceil(NegativeEmotionPercentage * 100) / 100;
  const conicGradientStyle = `conic-gradient(from -90deg, #ff3737 0% ${NegativeEmotionPercentage}%, #6b6bf7 0% ${postiveEmotionPercentage}%)`;
  return (
    <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8 mr-4">
      <div className="text-center w-auto h-52 mx-auto">
        <h2 className="text-xl font-bold mb-10 pt-6">Emotions</h2>
        <div
          className="w-48 h-48 mx-auto mb-4 rounded-full 2xl:w-32 2xl:h-32  xl:w-32: xl:h-32 lg:w-32 lg:h-32  md:w-20 md:h-20 sm:w-20 sm:h-20 mobile:h-12 mobile:w-12"
          style={{ background: conicGradientStyle }}
        ></div>
        <div className="flex items-center self-center justify-evenly">
          <div className="flex items-center">
            <div className="w-5 h-5 inline-block mr-2 bg-red-600"></div>
            <div className="text-lg font-semibold">
              Negative emotion: {NegativeEmotionPercentage}%
            </div>
          </div>
          <div className="flex items-center ml-3">
            <div className="w-5 h-5 inline-block mr-2 bg-blue-600 "></div>
            <div className="text-lg font-semibold">
              Positive emotion: {postiveEmotionPercentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionPieChart;
