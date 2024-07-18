import { Button } from '@/components/ui/button';
import { Application } from '@prisma/client';
import { z } from 'zod';
import { AdminDocumentsSchema } from '@/schemas/application';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getUserApplication } from '@/data/application';
import Image from 'next/image';


const nullToUndefined = (obj: any) => {
  const newObj: any = {};
  for (const key in obj) {
    if (obj[key] === null) {
      newObj[key] = undefined;
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = nullToUndefined(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

const FormatApplicationData = (applicationData: Application) => {
  const application = nullToUndefined(applicationData);
  const documents = {
    toeflExamResult: application.toeflExamResult,
    usNursingEvaluation: application.usNursingEvaluation,
    usCgfnsCertificate: application.usCgfnsCertificate,
    usVisaScreen: application.usVisaScreen,
    usJobOffer: application.usJobOffer,
  }
  return { documents }
}

const FormattedField = ({ label, value }: { label: string, value?: string }) => {
  return (
    value ?
      (
        <div className='grid gap-1 w-max'>
          <Image src='/pdf-icon.png' width={148} height={127} alt='pdf-icon' />
          <span>{label}</span>
          <Button
            variant="secondary"
            size="sm"
            asChild
          >
            <a
              href={value}
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </Button>
        </div>
      ) : null
  )
}


const AdminDocuments = ({ data }: { data: z.infer<typeof AdminDocumentsSchema> }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-2xl bg-[#19615C] px-14 py-3 h-14">
        <h2 className="text-white font-bold text-xl">
          Documents:
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.00604 8.4375C6.00604 4.81314 8.98269 1.875 12.6545 1.875C15.7512 1.875 18.3556 3.96553 19.0936 6.79618C19.2244 7.2976 19.7422 7.59947 20.2502 7.47042C20.7583 7.34135 21.064 6.83025 20.9333 6.32883C19.9844 2.68988 16.639 0 12.6545 0C7.93358 0 4.10647 3.7776 4.10647 8.4375V11.0058C2.69477 11.1099 1.77545 11.3725 1.10347 12.0359C-0.00927734 13.1343 -0.00927734 14.902 -0.00927734 18.4375C-0.00927734 21.973 -0.00927734 23.7408 1.10347 24.8391C2.21621 25.9375 4.00714 25.9375 7.58902 25.9375H17.7201C21.3019 25.9375 23.0928 25.9375 24.2056 24.8391C25.3184 23.7408 25.3184 21.973 25.3184 18.4375C25.3184 14.902 25.3184 13.1343 24.2056 12.0359C23.0928 10.9375 21.3019 10.9375 17.7201 10.9375H7.58902C7.01723 10.9375 6.49108 10.9375 6.00604 10.942V8.4375ZM15.1873 18.4375C15.1873 19.8183 14.0534 20.9375 12.6545 20.9375C11.2557 20.9375 10.1218 19.8183 10.1218 18.4375C10.1218 17.0568 11.2557 15.9375 12.6545 15.9375C14.0534 15.9375 15.1873 17.0568 15.1873 18.4375Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex gap-9 flex-row items-center justify-center">
        {Object.values(data).every((value) => !value) ? (
          <div className="grid gap-1 w-max">
            <span>No documents provided yet!</span>
          </div>
        ) : (
          <>
            <FormattedField label="TOEFL Exam Result" value={data.toeflExamResult} />
            <FormattedField label="US Nursing Evaluation" value={data.usNursingEvaluation} />
            <FormattedField label="US CGFNS Certificate" value={data.usCgfnsCertificate} />
            <FormattedField label="US Visa Screen" value={data.usVisaScreen} />
            <FormattedField label="US Job Offer" value={data.usJobOffer} />
          </>
        )}
      </div>
    </div>
  )
}

const DocumentsPage = async () => {
  const user = await getUserApplication();

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
      </div>
    )
  }

  if (!user.application) {
    return (
      <div>
        <h1>No application found</h1>
      </div>
    )
  }

  const { documents } = FormatApplicationData(user.application);

  return (
    <main className="flex flex-col items-center justify-center gap-8 flex-1 py-4">
      <Card className="grid flex-1 w-full">
        <CardContent className='grid gap-6 py-6'>
          <AdminDocuments data={documents} />
        </CardContent>
      </Card>
    </main>
  )
}

export default DocumentsPage