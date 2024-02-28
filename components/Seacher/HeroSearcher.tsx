import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill, BsPeopleFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FilterToDatesLocationPeople } from "../Filters/FilterToDatesLocationPeople";

export const HeroSearcher = () => {
  return (
    <section className="w-full text-white px-[66px] py-[70px] pb-32 pt-20">
      <h1 className="lg:text-[45px] text-center md:text-start text-[30px] md:text-[38px] font-semibold">
        ¿A Donde Te Apetece Ir?
      </h1>

      <FilterToDatesLocationPeople />
    </section>
  );
};
