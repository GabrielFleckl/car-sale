// import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ButtonOutlined from "../components/ButtonOutlined";
import AccentText from "../components/AccentText";

function Home() {
  return (
    <>
      <section className="h-screen bg-homeBackground bg-cover bg-no-repeat bg-center md:bg-fixed bg-scroll rounded-b-[32px]">
        <div className="text-white w-4/5 container flex flex-col gap-8 justify-center pt-52">
          <h1 className="font-medium md:text-6xl md:w-[790px] md:text-left md:p-0 text-center text-4xl px-2">
            From Service to Acquisition: <br /> Find{" "}
            <AccentText>Everything</AccentText> <br /> You Need{" "}
            <AccentText>in One Place</AccentText>!
          </h1>
          <div className="flex gap-5 flex-col items-center md:flex-row md:justify-start">
            <Button name="Sign up for service" />
            <ButtonOutlined name="Consultation" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
