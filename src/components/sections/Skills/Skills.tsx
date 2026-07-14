import Shape from "../../../assets/images/Logo.svg";
import SectionTitle from "../../common/SectionTitle";
import SkillCard from "../../ui/SkillCard";
import { skills } from "../../../constants/skills";
import Dot from "../../common/Dot";
function Skills() {
    return (
        <section
            id="skills"
            className="skillsTheme py-24"
        >
            <SectionTitle title="skills" />

            <div className="mt-12 flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">

                {/* LEFT */}
                <div className="relative h-[320px] w-full max-w-[420px]">

                    <Dot className="absolute left-0 top-6" />

                    <div className="absolute left-[150px] top-0 h-24 w-24 border border-[#ABB2BF]" />

                    <Dot className="absolute left-[170px] top-[125px]" />

                    <img
                        src={Shape}
                        alt=""
                        className="absolute bottom-0 left-4 w-[95px]"
                    />

                    <div className="absolute bottom-6 right-6 h-14 w-14 border border-[#ABB2BF]" />

                </div>

                {/* RIGHT */}
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.title}
                            title={skill.title}
                            items={skill.items}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;