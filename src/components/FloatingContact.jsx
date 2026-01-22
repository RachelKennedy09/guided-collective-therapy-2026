import { Link } from "react-router-dom";

export default function FloatingContact() {
  return (
    <Link to="/contact" className="floating-contact" aria-label="Contact us">
      Contact us
    </Link>
  );
}
