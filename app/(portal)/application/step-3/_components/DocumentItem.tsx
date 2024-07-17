function DocumentItem({ title, image }: { title: string, image: string }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center max-md:mt-6">
        <img loading="lazy" src={image} alt={title} className="aspect-[1.3] w-[166px]" />
        <div className="self-stretch mt-6 text-base leading-6 text-black">
          {title}
        </div>
        <button className="justify-center px-4 py-2 mt-4 text-sm font-medium leading-6 whitespace-nowrap rounded-md bg-slate-100 text-slate-900">
          Download
        </button>
      </div>
    </div>
  );
}

export default DocumentItem;