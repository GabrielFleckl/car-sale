

function Button({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex bg-[#FF001D] px-10 py-4 w-[250px] justify-center items-center rounded-xl font-semibold hover:bg-[#ff001eaf] transition-all"
    >
      {name}
    </button>
  );
}

export default Button;
