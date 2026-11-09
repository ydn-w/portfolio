import { contact } from "@/data/profile";
import { ArrowUpRight, AtIcon, CodeIcon, MailIcon } from "./icons";
import SectionHeading from "./SectionHeading";

const ICONS = { github: CodeIcon, mail: MailIcon, sns: AtIcon };

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading no="04" title="Contact" sub="連絡先" />
        <ul className="contact__list">
          {contact.links.map((l) => {
            const Icon = ICONS[l.type];
            const external = l.href.startsWith("http");
            return (
              <li key={l.type}>
                <a
                  href={l.href}
                  className="card contact__link"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon />
                  <span className="contact__label">{l.label}</span>
                  <span className="contact__text">{l.text}</span>
                  <span className="contact__arrow"><ArrowUpRight /></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
