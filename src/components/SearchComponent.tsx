import FilledButton from "./FilledButton";


const SearchComponent = () => {
  return (
    <div className="flex justify-center gap-4 mt-16 mb-8 px-4">
      <input type="text" className="w-[500px] h-8 border border-gray-600 p-4 rounded-2xl" />
      <FilledButton text="pesquisar" bgColor="#6700D4"/>
    </div>
  );
};

export default SearchComponent;
