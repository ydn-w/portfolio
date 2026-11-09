import { site } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <small>© {site.year} {site.name}</small>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
