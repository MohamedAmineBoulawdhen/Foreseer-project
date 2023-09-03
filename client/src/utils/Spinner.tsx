function Spinner() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="grid gap-2">
          <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-blue-900 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
