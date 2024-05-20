type Props = {
  title: {
    firstText?: string;
    lastText: string;
  };
  className?: string;
};
export default function Heading({ title, className }: Props) {
  return (
    <h2
      className={`text-[#303030] lg:text-center text-5xl md:text-6xl pt-8 pb-16 uppercase font-light ${className}`}
    >
      {title?.firstText ? title?.firstText : "My"}{" "}
      <strong className="font-medium">{title.lastText}</strong>
    </h2>
  );
}
