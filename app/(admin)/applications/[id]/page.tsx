import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { getCompleteUser } from '@/data/user';
import { Textarea } from '@/components/ui/textarea';
import { Application, ChildrenDetail, SpouseDetail } from '@prisma/client';
import { z } from 'zod';
import { AdminDocumentsSchema, Step1Schema, Step2Schema, Step3Schema } from '@/schemas/application';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AddFeedback = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Feedback</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-start h-[250px] w-[400px] justify-between">
        <DialogHeader>
          <DialogTitle>
            Provide Feedback
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label>Feedback</Label>
          <Textarea
            className="w-full h-20"
            placeholder="Type your feedback here..."
          />
        </div>
        <DialogFooter>
          <Button type="submit">
            Add
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

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
    highSchoolDiploma: application.highSchoolDiploma,
    highSchoolGrades: application.highSchoolGrades,
    curriculumVitae: application.curriculumVitae,
  }

  const step2 = {
    nationalId: application.nationalId,
    passportPhoto: application.passportPhoto,
    passportId: application.passportId,
    nursingSchoolDiploma: application.nursingSchoolDiploma,
    nursingSchoolTranscript: application.nursingSchoolTranscript,
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
          <strong>{label}: </strong>
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
    <div className="grid gap-4">
      <h2 className='text-2xl font-bold text-center'>Step 1</h2>
      <div className="grid gap-2">
        <FormattedField label="Name" value={data.name} />
        <FormattedField label="Date of Birth" value={data.dateOfBirth} />
        <FormattedField label="Phone Number" value={data.phoneNumber} />
        <FormattedField label="Email" value={data.email} />
        <FormattedField label="Emergency Contact Name" value={data.emergencyContactName} />
        <FormattedField label="Emergency Contact Email" value={data.emergencyContactEmail} />
        <FormattedField label="Emergency Contact Number" value={data.emergencyContactNumber} />
        <FormattedField label="National ID Card" value={data.nationalIdCard} link />
        <FormattedField label="Passport" value={data.passport} link />
        <FormattedField label="Nursing License" value={data.nursingLicense} link />
        <FormattedField label="Nursing Degree" value={data.nursingDegree} link />
        <FormattedField label="High School Diploma" value={data.highSchoolDiploma} link />
        <FormattedField label="High School Grades" value={data.highSchoolGrades} link />
        <FormattedField label="Curriculum Vitae" value={data.curriculumVitae} link />
      </div>
    </div>
  )
}

const Step2 = ({ data }: { data: z.infer<typeof Step2Schema> }) => {
  return (
    <div className="grid gap-4">
      <h2 className='text-2xl font-bold text-center'>Step 2</h2>
      <div className="grid gap-2">
        <FormattedField label="National ID" value={data.nationalId} link />
        <FormattedField label="Passport Photo" value={data.passportPhoto} link />
        <FormattedField label="Passport ID" value={data.passportId} link />
        <FormattedField label="Nursing School Diploma" value={data.nursingSchoolDiploma} link />
        <FormattedField label="Nursing School Transcript" value={data.nursingSchoolTranscript} link />
        <FormattedField label="Nursing Experience Certificate" value={data.nursingExperienceCertificate} link />
      </div>
    </div>
  )
}

const Step3 = ({ data }: { data: z.infer<typeof Step3Schema> }) => {
  return (
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
}

const AdminDocuments = ({ data }: { data: z.infer<typeof AdminDocumentsSchema> }) => {
  return (
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
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>Name: {user.name}</CardTitle>
            <CardDescription>Application ID: {user.application.id}</CardDescription>
          </div>
          <AddFeedback />
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