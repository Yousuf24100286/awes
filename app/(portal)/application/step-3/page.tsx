import React from 'react';
import DocumentSection from './_components/DocumentSection';
import UploadSection from './_components/UploadSection';

function Step3Page() {
  const documents = [
    { title: "TOEFL Exam Result", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/295339f66e67c598f14f7aa3930dd5e9a340e7bdbbbecf15c1df45b1265c255a?apiKey=37e9b177900140c9be4212bdea99ec1b&" },
    { title: "US Nursing Evaluation", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/295339f66e67c598f14f7aa3930dd5e9a340e7bdbbbecf15c1df45b1265c255a?apiKey=37e9b177900140c9be4212bdea99ec1b&" },
    { title: "US CGFNS Certificate", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/295339f66e67c598f14f7aa3930dd5e9a340e7bdbbbecf15c1df45b1265c255a?apiKey=37e9b177900140c9be4212bdea99ec1b&" },
    { title: "US Visa Screen", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/295339f66e67c598f14f7aa3930dd5e9a340e7bdbbbecf15c1df45b1265c255a?apiKey=37e9b177900140c9be4212bdea99ec1b&" },
    { title: "US Job Offer", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/295339f66e67c598f14f7aa3930dd5e9a340e7bdbbbecf15c1df45b1265c255a?apiKey=37e9b177900140c9be4212bdea99ec1b&" }
  ];

  const uploadFields = [
    { label: "US Social Security Card", required: false },
    { label: "US Green Card", required: false },
    { label: "Birth Certificate", required: true }
  ];

  return (
    <main className="w-9/12 bg-red-300 grow">
      <div className="flex flex-col grow px-6 pt-5 w-full bg-yellow-100 max-md:px-5 max-md:max-w-full">
        <section className="flex flex-col pt-12 pr-20 pb-5 pl-10 rounded-xl bg-stone-50 max-md:px-5 max-md:max-w-full">
          <h1 className="text-xl font-bold leading-8 text-black max-md:mr-0.5 max-md:max-w-full">
            Application Homepage
          </h1>
          <p className="mt-5 text-sm leading-5 text-black max-md:mr-2.5 max-md:max-w-full">
            Fill out the basic information and upload necessary documents and we will reach out to you for detailed guidance for <br /> next steps.
          </p>
          <div className="flex gap-5 justify-between px-14 py-2.5 mt-5 text-xl font-bold leading-8 text-white bg-teal-800 rounded-lg shadow-2xl max-md:flex-wrap max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
            <div>Step 3:</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f3b9579e8a029e117866af0bfa26e37dc44c37bbe3132a6d57d180a2460433?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="shrink-0 self-start aspect-[0.96] w-[25px]" />
          </div>
          <DocumentSection documents={documents} />
          <div className="flex gap-5 justify-end px-14 py-2.5 mt-14 text-xl font-bold leading-8 text-white bg-teal-800 rounded-lg shadow-2xl max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
            <div>Step 4:</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f3b9579e8a029e117866af0bfa26e37dc44c37bbe3132a6d57d180a2460433?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="shrink-0 aspect-[0.96] w-[25px]" />
          </div>
          <UploadSection fields={uploadFields} />
          <div className="flex gap-5 self-start mt-6 font-medium text-teal-800">
            <button className="justify-center py-2 text-lg leading-6 whitespace-nowrap rounded-full border-2 border-teal-800 border-solid stroke-[1.5px]">
              +
            </button>
            <div className="flex-auto my-auto text-sm leading-6">
              Add Spouse details
            </div>
          </div>
          <hr className="shrink-0 mt-2.5 max-w-full h-px border border-solid bg-slate-950 bg-opacity-30 border-slate-950 border-opacity-30 w-[773px] max-md:mr-0.5" />
          <div className="flex gap-5 self-start mt-2.5 font-medium text-teal-800">
            <button className="justify-center py-2 text-lg leading-6 whitespace-nowrap rounded-full border-2 border-teal-800 border-solid stroke-[1.5px]">
              +
            </button>
            <div className="flex-auto my-auto text-sm leading-6">
              Add children details
            </div>
          </div>
          <div className="flex gap-4 self-end mt-8 max-w-full text-sm font-medium leading-6 whitespace-nowrap w-[368px] max-md:mr-0.5">
            <button className="justify-center px-4 py-2 text-black rounded-md border border-solid border-slate-950 border-opacity-30 max-md:px-5">
              Cancel
            </button>
            <button className="justify-center items-center px-4 py-2 text-white bg-pink-900 rounded-md max-md:px-5">
              Save
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Step3Page;