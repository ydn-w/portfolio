type Props = { no: string; title: string; sub: string; children?: React.ReactNode };

export default function SectionHeading({ no, title, sub, children }: Props) {
  return (
    <div className="section-heading">
      <h2>
        <span className="section-heading__no">{no}</span>
        <span className="section-heading__title">{title}</span>
        <span className="section-heading__sub">{sub}</span>
      </h2>
      {children}
    </div>
  );
}
