import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Мартин Константинов",
    image: "/images/team/team-01.png"
  },
  {
    id: 2,
    name: "Преслав Димитров",
    image: "/images/team/team-02.png"
  },
  {
    id: 3,
    name: "Димитър Илиев",
    image: "/images/team/team-03.png"
  },
  {
    id: 4,
    name: "Георги Антонов",
    image: "/images/team/team-04.png"
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[100px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Нашият Екип"
            title="Запознайте се с Oтбора"
            paragraph="Екипът е съставен от опитни професионалисти, готови да ви предоставят най-доброто обслужване и експертни съвети."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
