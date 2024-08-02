import { Button } from '@/components/ui/button';
import { getCompleteUser } from '@/data/auth/user';
import { Application, ChildrenDetail, SpouseDetail } from '@prisma/client';
import { z } from 'zod';
import { AdminDocumentsSchema, Step1Schema, Step2Schema, Step3Schema } from '@/schemas/application';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Feedback from './_components/Feedback';
import AdminDocumentsUpload from './_components/AdminDocumentsUpload';
import ApplicationUpdateStatus from '../../_components/ApplicationStatusUpdate';


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

const FormatApplicationData = (applicationData: Application & { spouseDetails: SpouseDetail[], childrenDetails: ChildrenDetail[] }) => {
  const application = nullToUndefined(applicationData);
  const step1 = {
    name: application.name,
    dateOfBirth: application.dateOfBirth,
    phoneNumber: application.phoneNumber,
    email: application.email,
    emergencyContactName: application.emergencyContactName,
    emergencyContactEmail: application.emergencyContactEmail,
    emergencyContactNumber: application.emergencyContactNumber,
    nationalIdCard: application.nationalIdCard,
    passport: application.passport,
    nursingLicense: application.nursingLicense,
    nursingDegree: application.nursingDegree,
    nursingSchoolTranscript: application.nursingSchoolTranscript,
    highSchoolDiploma: application.highSchoolDiploma,
    highSchoolGrades: application.highSchoolGrades,
    curriculumVitae: application.curriculumVitae,
  }

  const step2 = {
    nationalId: application.nationalId,
    passportPhoto: application.passportPhoto,
    passportId: application.passportId,
    nursingSchoolDiploma: application.nursingSchoolDiploma,
    nursingExperienceCertificate: application.nursingExperienceCertificate,
  }

  const step3 = {
    usSocialSecurityCard: application.usSocialSecurityCard,
    usGreenCard: application.usGreenCard,
    birthCertificate: application.birthCertificate,
    spouseDetails: application.spouseDetails,
    childrenDetails: application.childrenDetails,
  }

  const documents = {
    toeflExamResult: application.toeflExamResult,
    usNursingEvaluation: application.usNursingEvaluation,
    usCgfnsCertificate: application.usCgfnsCertificate,
    usVisaScreen: application.usVisaScreen,
    usJobOffer: application.usJobOffer,
  }

  return { step1, step2, step3, documents }
}

const FormattedField = ({ label, value, link }: { label: string, value?: string, link?: boolean }) => {
  return (
    value ?
      (
        <div className='flex items-center justify-between'>
          <strong className='font-semibold'>{label}: </strong>
          {link
            ?
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href={value}
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </Button>
            : value
          }
        </div>
      ) : null
  )
}

const Step1 = ({ data }: { data: z.infer<typeof Step1Schema> }) => {
  return (
    Object.values(data).every((value) => !value) ? (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Step 1</h2>
        <p className='text-center'>Not filled as of yet!</p>
      </div>
    ) : (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Step 1</h2 >
        <div className="grid gap-2">
          <FormattedField label="Name" value={data.name} />
          <FormattedField label="Date of Birth" value={JSON.stringify(data.dateOfBirth)} />
          <FormattedField label="Phone Number" value={data.phoneNumber} />
          <FormattedField label="Email" value={data.email} />
          <FormattedField label="Emergency Contact Name" value={data.emergencyContactName} />
          <FormattedField label="Emergency Contact Email" value={data.emergencyContactEmail} />
          <FormattedField label="Emergency Contact Number" value={data.emergencyContactNumber} />
          <FormattedField label="National ID Card" value={data.nationalIdCard} link />
          <FormattedField label="Passport" value={data.passport} link />
          <FormattedField label="Nursing License" value={data.nursingLicense} link />
          <FormattedField label="Nursing Degree" value={data.nursingDegree} link />
          <FormattedField label="Nursing School Transcript" value={data.nursingSchoolTranscript} link />
          <FormattedField label="High School Diploma" value={data.highSchoolDiploma} link />
          <FormattedField label="High School Grades" value={data.highSchoolGrades} link />
          <FormattedField label="Curriculum Vitae" value={data.curriculumVitae} link />
        </div>
      </div>
    )

  )
}

const Step2 = ({ data }: { data: z.infer<typeof Step2Schema> }) => {
  return (
    Object.values(data).every((value) => !value) ? (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Step 2</h2>
        <p className='text-center'>Not filled as of yet!</p>
      </div>
    ) : (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Step 2</h2>
        <div className="grid gap-2">
          <FormattedField label="National ID" value={data.nationalId} link />
          <FormattedField label="Passport Photo" value={data.passportPhoto} link />
          <FormattedField label="Passport ID" value={data.passportId} link />
          <FormattedField label="Nursing School Diploma" value={data.nursingSchoolDiploma} link />
          <FormattedField label="Nursing Experience Certificate" value={data.nursingExperienceCertificate} link />
        </div>
      </div>
    )
  )
}

const Step3 = ({ data }: { data: z.infer<typeof Step3Schema> }) => {
  const isEmpty = (obj: any) => {
    if (obj === null || obj === undefined) return true;
    if (Array.isArray(obj)) return obj.length === 0;
    if (typeof obj === 'object') return Object.keys(obj).length === 0;
    return false;
  };

  return (
    Object.values(data).every(isEmpty) ? (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Step 3</h2>
        <p className='text-center'>Not filled as of yet!</p>
      </div>
    ) : (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Step 3</h2>
        <div className='grid gap-4'>
          <div className="grid gap-2">
            <FormattedField label="US Social Security Card" value={data.usSocialSecurityCard} link />
            <FormattedField label="US Green Card" value={data.usGreenCard} link />
            <FormattedField label="Birth Certificate" value={data.birthCertificate} link />
          </div>
          {
            data.spouseDetails && data.spouseDetails.length > 0 &&
            <div className='grid gap-4'>
              <h3 className="text-xl font-bold underline">Spouse Details</h3>
              {
                data.spouseDetails.map((spouse, index) => (
                  <div key={index} className="grid gap-2">
                    <FormattedField label="Spouse Demographics" value={spouse.spouseDemographics} link />
                    <FormattedField label="Spouse Birth Certificate" value={spouse.spouseBirthCertificate} link />
                    <FormattedField label="Spouse Passport" value={spouse.spousePassport} link />
                    <FormattedField label="Spouse Passport Photo" value={spouse.spousePassportPhoto} link />
                    <FormattedField label="Marriage Certificate" value={spouse.marriageCertificate} link />
                  </div>
                ))
              }
            </div>
          }
          {
            data.childrenDetails && data.childrenDetails.length > 0 &&
            <div className='grid gap-4'>
              <h3 className="text-xl font-bold underline">Children Details</h3>
              {
                data.childrenDetails.map((child, index) => (
                  <div key={index} className="grid gap-2">
                    <FormattedField label="Birth Certificate" value={child.birthCertificate} link />
                    <FormattedField label="Passport Photo" value={child.passportPhoto} link />
                    <FormattedField label="Immunization Record" value={child.immunizationRecord} link />
                  </div>
                ))
              }
            </div>
          }
        </div>
      </div>
    )
  )
}

const AdminDocuments = ({ data }: { data: z.infer<typeof AdminDocumentsSchema> }) => {
  return (
    Object.values(data).every((value) => !value) ? (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Documents</h2>
        <p className='text-center'>You have not uploaded any document!</p>
      </div>
    ) : (
      <div className="grid gap-4">
        <h2 className='text-2xl font-bold text-center'>Documents</h2>
        <div className="grid gap-2">
          <FormattedField label="TOEFL Exam Result" value={data.toeflExamResult} link />
          <FormattedField label="US Nursing Evaluation" value={data.usNursingEvaluation} link />
          <FormattedField label="US CGFNS Certificate" value={data.usCgfnsCertificate} link />
          <FormattedField label="US Visa Screen" value={data.usVisaScreen} link />
          <FormattedField label="US Job Offer" value={data.usJobOffer} link />
        </div>
      </div>
    )
  )
}

const ApplicationPage = async ({ params }: { params: { id: string } }) => {
  const user = await getCompleteUser(params.id);

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

  const { step1, step2, step3, documents } = FormatApplicationData(user.application);

  return (
    <main className="flex flex-col items-center justify-center gap-8 flex-1 py-4">
      <Card className="grid flex-1 max-w-2xl w-full">
        <CardHeader className='grid gap-2'>
          <div className="flex flex-row justify-between items-center">
            <div>
              <CardTitle><span className='font-normal text-base'>Name: </span>{user.name}</CardTitle>
              <CardTitle><span className='font-normal text-base'>Application ID: </span>
                {user.application.applicationId.toString().padStart(6, '0')}</CardTitle>
              <CardTitle><span className='font-normal text-base'>Steps allowed: </span>{user.application.applicationStep}</CardTitle>
            </div>
            <div className='grid gap-1'>
              <ApplicationUpdateStatus id={user.application.id} step={user.application.applicationStep} />
              <Feedback applicationId={user.application.id} />
              <AdminDocumentsUpload applicationId={user.application.id} />
            </div>
          </div>
          <CardDescription>
            {user.application.feedback ? (
              <div>
                <span className='font-normal'>Feedback given: </span>{user.application.feedback}
              </div>
            )
              :
              <span className='font-normal'>Not feedback given!</span>
            }
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className='grid gap-6 py-6'>
          <Step1 data={step1} />
          <Separator />
          <Step2 data={step2} />
          <Separator />
          <Step3 data={step3} />
          <Separator />
          <AdminDocuments data={documents} />
        </CardContent>
      </Card>
    </main>
  )
}

export default ApplicationPage