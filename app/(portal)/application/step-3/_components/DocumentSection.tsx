import DocumentItem from './DocumentItem';

function DocumentSection({ documents }: { documents: { title: string, image: string }[] }) {
  return (
    <div className="mt-11 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {documents.map((doc, index) => (
          <DocumentItem key={index} title={doc.title} image={doc.image} />
        ))}
      </div>
    </div>
  );
}

export default DocumentSection;