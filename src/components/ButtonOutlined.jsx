

function ButtonOutlined({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex bg-transparent outline outline-[#323232] px-10 py-4 w-[250px] justify-center items-center rounded-xl font-semibold hover:bg-[#3232328a] transition-all"
    >
      {name}
    </button>
  );
}

export default ButtonOutlined;
