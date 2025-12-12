import { useNavigate } from "react-router-dom";

export default function FloatingBack() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="floating-back"
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      ← Back
    </button>
  );
}
