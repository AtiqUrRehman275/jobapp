const ApplyButton = ({ ButtonText, children }) => {
  return (
    <>
      <button className="flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-black hover:scale-105 hover:shadow-md">
        <span>{ButtonText}</span>
        {children}
      </button>
    </>
  );
};

const ViewButton = ({ ButtonText, children }) => {
  return (
    <>
      <button className="flex items-center gap-1 bg-white text-gray-700 text-sm px-4 py-2 rounded-lg border border-gray-300 transition-all duration-500 ease-in-out hover:bg-amber-400 hover:border-gray-400 hover:text-black hover:scale-105 hover:shadow-md hover:font-semibold">
        <span>{ButtonText}</span>
        {children}
        {/* <HiOutlineDocumentSearch className="text-lg" /> */}
      </button>
    </>
  );
};

export default ApplyButton;
export { ViewButton };
