export default function Testimonials() {
  return (
    <section className="section bg-green-50">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold">
          What Our Clients Say
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card">
              <p className="italic text-gray-600">
                ShivAppHub transformed our online presence and helped us grow significantly.
              </p>
              <p className="mt-4 font-semibold">
                – Local Business {i}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}