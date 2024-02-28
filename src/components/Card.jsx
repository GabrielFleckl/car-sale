function Card({ secondary, title, price, img }) {
  return (
    <>
      <div
        className={`${
          secondary ? "bg-[#FF001D]" : "bg-transparent"
        } text-white pt-5 pl-5 pb-5 rounded-3xl flex w-full h-[243px] justify-between relative hover:bg-[#FF001D] transition-all overflow-hidden ease duration-200 cursor-pointer`}
      >
        <div className="flex flex-col justify-between w-72">
          <h1 className="text-3xl font-regular">{title}</h1>
          <p className="text-4xl font-semibold z-10 bg-[#292929] w-32 text-center p-1 rounded-xl">
            $ {price}
          </p>
        </div>

        <img
          className="w-[230px] absolute bottom-0 right-0"
          src={img}
          alt="car"
        />
      </div>
    </>
  );
}

export default Card;
