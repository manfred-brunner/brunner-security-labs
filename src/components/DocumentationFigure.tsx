import Image from "next/image";

type DocumentationFigureProps = {
  figure?: string;src: string;
  alt: string;
  caption: string;
  priority?: boolean;
};

export default function DocumentationFigure({
  figure,
  src,
  alt,
  caption,
  priority = false,
}: DocumentationFigureProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-slate-100">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-contain"
        />
      </div>

     <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-500">
  {figure && (
    <span className="font-semibold text-slate-700">
      {figure}.{" "}
    </span>
  )}
  {caption}
</figcaption>
    </figure>
  );
}
