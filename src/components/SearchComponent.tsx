import FilledButton from "./FilledButton";
interface FilhoProps {
  sendTargetValue: (valor: string) => void;
  sendEventClick: () => void;

}

const SearchComponent = ({ sendTargetValue, sendEventClick }: FilhoProps) => {
  return (
    <form className="flex justify-center gap-4 my-8 px-4">
      <input
        type="text"
        className="w-[500px] h-8 border focus:outline-none focus:border-purple-400 border-gray-600 p-4 rounded-2xl"
        onChange={(e) => sendTargetValue(e.target.value)}
        autoFocus
      />
      <FilledButton
        text="pesquisar"
        bgColor="#6700D4"
        eventClick={sendEventClick}
      />
    </form>
  );
};

export default SearchComponent;
