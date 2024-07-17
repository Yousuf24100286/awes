import React from 'react';

function UploadField({ label, required }: { label: string, required: boolean }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="mb-7">
      <label htmlFor={id} className={`text-sm font-medium leading-6 ${required ? 'text-red-600' : 'text-slate-900'}`}>
        {label}{required && <span className="text-red-600">*</span>}
      </label>
      <div className="justify-center items-center px-4 py-2 mt-3.5 max-w-full text-sm font-medium leading-6 bg-white rounded-md border border-solid border-slate-300 text-slate-900 w-[423px] max-md:px-5">
        <input type="file" id={id} className="sr-only" />
        <span>Choose file</span>
      </div>
      <p className="mt-3 text-sm leading-5 text-slate-500">
        PDF, JPG, JPEG up to 5 MB
      </p>
    </div>
  );
}

function UploadSection({ fields }: { fields: { label: string, required: boolean }[] }) {
  return (
    <div>
      {fields.map((field, index) => (
        <UploadField key={index} label={field.label} required={field.required} />
      ))}
    </div>
  );
}

export default UploadSection;