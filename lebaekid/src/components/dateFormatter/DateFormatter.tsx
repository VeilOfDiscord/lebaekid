function DateFormatter({ dateString }: { dateString: string }) {
  const date = new Date(dateString);

  const formattedDay = date.toLocaleDateString("en-US", {
    day: "numeric",
  });
  const formattedMonth = date.toLocaleDateString("en-US", {
    month: "long",
    year: "2-digit"
  });

  return (
    <section className="grid justify-items-center md:pr-30 md:text-nowrap text-balance">
      <span className="md:text-base lg:text-2xl text-xl">{formattedMonth}</span>
      <span className="text-3xl">{formattedDay}</span>
    </section>
  );
}

export default DateFormatter;
