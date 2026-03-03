"use client";

import { useState, useEffect } from "react";

export default function CallPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000); // 3 sec baad popup dikhega

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full relative">

        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-2 text-gray-900">
          Need Help?
        </h3>

        <p className="text-gray-600 mb-4">
          Call us anytime. We are available 24×7.
        </p>

        <a
          href="tel:+919015484696"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold block"
        >
          📞 +91 9015484696
        </a>
      </div>
    </div>
  );
}