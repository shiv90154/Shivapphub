export default function FAQ() {
  return (
    <section className="section bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="card">
            <h3 className="font-semibold mb-2">
              How long does a website take?
            </h3>
            <p className="text-gray-600">
              Typically 4–6 weeks depending on project complexity.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">
              Do you offer maintenance?
            </h3>
            <p className="text-gray-600">
              Yes, we provide monthly maintenance packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}