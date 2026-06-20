export function WorkshopDetails() {
  const details = [
    {
      title: "Age Group",
      value: "8 - 14 Years",
    },
    {
      title: "Duration",
      value: "4 Weeks",
    },
    {
      title: "Mode",
      value: "Online",
    },
    {
      title: "Fee",
      value: "₹2,999",
    },
    {
      title: "Start Date",
      value: "15 July 2026",
    },
  ];

  return (
    <section className="py-20 bg-[#eff6ff]">
      <div className="kid-container">
        <h2 className="text-4xl font-bold text-center">
          Workshop Details
        </h2>

        <div className="grid md:grid-cols-5 gap-6 mt-12">
          {details.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow"
            >
              <h3 className="font-semibold text-gray-500">
                {item.title}
              </h3>

              <p className="text-xl font-bold mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}