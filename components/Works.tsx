import { works } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";

export default function Works() {
  return (
    <section id="works" className="section">
      <div className="container">
        <SectionHeading no="02" title="Works" sub="制作実績" />
        <div className="works">
          {works.map((w, i) => (
            <WorkCard key={w.title} work={w} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
