import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-teal-800 flex items-center justify-center px-6 text-center">
      <div>
        <div className="text-8xl font-extrabold text-white/10 mb-4">404</div>
        <div className="text-5xl mb-6">🌱</div>
        <h1 className="text-3xl font-extrabold text-white mb-3">Page Not Found</h1>
        <p className="text-emerald-200 mb-8 max-w-sm mx-auto">
          This page doesn't exist yet — but every great program starts somewhere. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-7 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-900 font-bold rounded-xl transition-all"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded-xl transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
