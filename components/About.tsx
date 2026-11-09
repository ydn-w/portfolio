import { about } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading no="01" title="About" sub="私について" />

        <div className={`about__hero${about.photo ? "" : " about__hero--no-photo"}`}>
          <div>
            <p className="about__meta">{about.meta.join(" / ")}</p>
            <h3 className="about__catch">{about.catchcopy}</h3>
            <p className="about__intro">{about.intro}</p>
          </div>
          {about.photo && (
            <div className="about__photo">
              <img src={about.photo} alt="" />
            </div>
          )}
        </div>

        <h3 className="about__subhead">経歴</h3>
        <ol className="career">
          {about.career.map((c) => (
            <li key={c.period + c.title} className="career__item">
              <span className="career__period">{c.period}</span>
              <div>
                <p className="career__title">{c.title}</p>
                <p className="career__desc">{c.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
