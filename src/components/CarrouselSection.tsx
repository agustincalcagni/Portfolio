export const CarrouselSection = () => {
  return (
    <div className="pt-8 justify-center mx-auto flex">
      <div className="flex flex-wrap gap-3">
        {["SQL", "Python", "Power BI", "Tableau", "BigQuery", "Snowflake"].map(
          (tech) => (
            <span
              key={tech}
              className="bg-slate-800/50 border border-slate-600 text-slate-300 px-3 py-1 rounded-full text-sm font-medium hover:border-blue-400 hover:text-blue-300 transition-colors"
            >
              {tech}
            </span>
          )
        )}
      </div>
    </div>
  );
};
