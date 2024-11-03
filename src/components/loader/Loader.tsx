import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#4e60af"
        color="#070707"
      />
    </div>
  );
};

export default Loader;
