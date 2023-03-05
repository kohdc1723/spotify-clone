import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
    <h1 className="font-bold text-white mt-2">{title || "loading..."}</h1>
  </div>
);

export default Loader;
