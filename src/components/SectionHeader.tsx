export default function SectionHeader({
  title,
  describtion,
  eyebrow,
}: {
  title: string;
  describtion: string;
  eyebrow: string;
}) {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl mt-6 md:text-5xl text-center">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        {describtion}
      </p>
    </>
  );
}
