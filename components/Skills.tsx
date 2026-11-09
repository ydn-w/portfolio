import { skills } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading no="03" title="Skills" sub="技術・スキル">
          <ul className="skills__legend">
            <li><span className="legend-box legend-box--main" />主力</li>
            <li><span className="legend-box" />実務・制作経験あり</li>
          </ul>
        </SectionHeading>

        <div className="skills">
          {skills.map((group) => (
            <div key={group.category} className="skills__row">
              <div>
                <h3 className="skills__category">{group.category}</h3>
                {group.note && <p className="skills__note">{group.note}</p>}
              </div>
              <ul className="skills__items">
                {[...group.items].sort((a, b) => Number(!!b.main) - Number(!!a.main)).map((s) => (
                  <li key={s.name} className={`skill-chip${s.main ? " skill-chip--main" : ""}`}>
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
