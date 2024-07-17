// // @ts-nocheck
// /* eslint-disable */
// require('dotenv/config');
// const {
//   PrismaClient,
//   ApplicationStep,
// } = require('@prisma/client');
// const bcrypt = require('bcryptjs');
// const {
//   Step1Schema,
//   Step2Schema,
//   Step3Schema,
//   AdminDocumentsSchema,
// } = require('@/schemas/application');
// const { z } = require('zod');

// var prisma = new PrismaClient();

// const urls = [
//   'https://example.com/document1.pdf',
//   'https://example.com/document2.pdf',
//   'https://example.com/document3.pdf',
//   'https://example.com/document4.pdf',
//   'https://example.com/document5.pdf',
//   'https://example.com/document6.pdf',
//   'https://example.com/document7.pdf',
//   'https://example.com/document8.pdf',
//   'https://example.com/document9.pdf',
//   'https://example.com/document10.pdf',
//   'https://example.com/document11.pdf',
//   'https://example.com/document12.pdf',
// ];

// function getRandomUrl() {
//   return urls[Math.floor(Math.random() * urls.length)];
// }

// function getStep1Data() {
//   return {
//     name: 'Muhammad Hammad',
//     dateOfBirth: '2003-01-30',
//     phoneNumber: '1234567890',
//     email: 'hammadtariq838@gmail.com',
//     emergencyContactName: 'Jane Doe',
//     emergencyContactEmail: 'jane.doe@example.com',
//     emergencyContactNumber: '0987654321',
//     nationalIdCard: getRandomUrl(),
//     passport: getRandomUrl(),
//     nursingLicense: getRandomUrl(),
//     nursingDegree: getRandomUrl(),
//     highSchoolDiploma: getRandomUrl(),
//     highSchoolGrades: getRandomUrl(),
//     curriculumVitae: getRandomUrl(),
//   };
// }

// function getStep2Data() {
//   return {
//     nationalId: getRandomUrl(),
//     passportPhoto: getRandomUrl(),
//     passportId: getRandomUrl(),
//     nursingSchoolDiploma: getRandomUrl(),
//     nursingSchoolTranscript: getRandomUrl(),
//     nursingExperienceCertificate: getRandomUrl(),
//   };
// }

// function getStep3Data() {
//   return {
//     usSocialSecurityCard: getRandomUrl(),
//     usGreenCard: getRandomUrl(),
//     birthCertificate: getRandomUrl(),
//     spouseDetails: [
//       {
//         spouseDemographics: getRandomUrl(),
//         spouseBirthCertificate: getRandomUrl(),
//         spousePassport: getRandomUrl(),
//         spousePassportPhoto: getRandomUrl(),
//         marriageCertificate: getRandomUrl(),
//       },
//     ],
//     childrenDetails: [
//       {
//         birthCertificate: getRandomUrl(),
//         passportPhoto: getRandomUrl(),
//         immunizationRecord: getRandomUrl(),
//       },
//     ],
//   };
// }

// function getAdminDocumentsData() {
//   return {
//     toeflExamResult: getRandomUrl(),
//     usNursingEvaluation: getRandomUrl(),
//     usCgfnsCertificate: getRandomUrl(),
//     usVisaScreen: getRandomUrl(),
//     usJobOffer: getRandomUrl(),
//   };
// }

// async function getOrCreateApplication(userId: string) {
//   console.log(
//     `getOrCreateApplication: Looking for application for userId=${userId}`
//   );
//   // Query the Application model directly using userId
//   let application = await prisma.application.findUnique({
//     where: { userId: userId },
//   });

//   if (!application) {
//     console.log(
//       `No application found for userId=${userId}. Creating new application.`
//     );
//     application = await prisma.application.create({
//       data: {
//         userId: userId,
//       },
//     });

//     console.log(
//       `Application created with id: ${application.id}`
//     );

//     // console.log(
//     //   `Updating user with applicationId=${application.id}`
//     // );
//     // await prisma.user.update({
//     //   where: { id: userId },
//     //   data: { applicationId: application.id },
//     // });
//   }

//   return application;
// }

// async function handleStep1(
//   applicationId: string,
//   step1Data: z.infer<typeof Step1Schema>
// ) {
//   return await prisma.application.update({
//     where: { id: applicationId },
//     data: step1Data,
//   });
// }

// async function handleStep2(
//   applicationId: string,
//   step2Data: z.infer<typeof Step2Schema>
// ) {
//   return await prisma.application.update({
//     where: { id: applicationId },
//     data: step2Data,
//   });
// }

// async function handleStep3(
//   applicationId: string,
//   step3Data: z.infer<typeof Step3Schema>
// ) {
//   return await prisma.application.update({
//     where: { id: applicationId },
//     data: {
//       ...step3Data,
//       childrenDetails: {
//         create: step3Data.childrenDetails,
//       },
//       spouseDetails: {
//         create: step3Data.spouseDetails,
//       },
//     },
//   });
// }

// async function handleAdminDocuments(
//   applicationId: string,
//   adminDocumentsData: z.infer<typeof AdminDocumentsSchema>
// ) {
//   return await prisma.application.update({
//     where: { id: applicationId },
//     data: adminDocumentsData,
//   });
// }

// async function addFeedback(
//   applicationId: string,
//   feedback: string
// ) {
//   const feedbackData = {
//     feedback,
//   };
//   return await prisma.application.update({
//     where: { id: applicationId },
//     data: feedbackData,
//   });
// }

// async function updateApplicationStep(
//   applicationId: string
// ) {
//   const application = await prisma.application.findUnique({
//     where: { id: applicationId },
//   });

//   let nextStep = application.applicationStep;
//   switch (application.applicationStep) {
//     case ApplicationStep.STEP_1:
//       nextStep = ApplicationStep.STEP_2;
//       break;
//     case ApplicationStep.STEP_2:
//       nextStep = ApplicationStep.STEP_3;
//       break;
//     default:
//       break;
//   }

//   return await prisma.application.update({
//     where: { id: application.id },
//     data: {
//       applicationStep: nextStep,
//     },
//   });
// }

// async function main() {
//   console.log('seeding database');

//   const email = 'hammadtariq838@gmail.com';
//   const password = process.env.PASSWORD_HASH!;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   console.log('password', password);
//   console.log('hashedPassword', hashedPassword);

//   /**
//    * 1. Create user account
//    * 2. Get application associated with user (create if doesn't exist)
//    * 3. Step 1
//    * 4. Step 2
//    * 5. Step 3
//    * 6. Admin application documents
//    * 7. Add feedback
//    * 8. Update application step to next
//    */

//   // Delete applications first to handle foreign key constraint
//   await prisma.application.deleteMany({
//     where: {
//       user: {
//         email,
//       },
//     },
//   });

//   console.log(`Deleting user if exists: ${email}`);
//   await prisma.user.deleteMany({
//     where: {
//       email,
//     },
//   });

//   console.log(`Creating user: ${email}`);
//   const user = await prisma.user.create({
//     data: {
//       name: 'Muhammad Hammad',
//       email,
//       password: hashedPassword,
//       emailVerified: new Date(),
//     },
//   });

//   // Ensure the user was created before proceeding
//   if (!user) {
//     throw new Error('User creation failed');
//   }

//   // Ensure the user is committed to the database before proceeding
//   await prisma.$disconnect();
//   prisma = new PrismaClient();

//   console.log(`User created with id: ${user.id}`);

//   const application = await getOrCreateApplication(user.id);

//   console.log(
//     `handleStep1: Updating applicationId=${application.id} with step1Data`
//   );
//   await handleStep1(application.id, getStep1Data());

//   console.log(
//     `handleStep2: Updating applicationId=${application.id} with step2Data`
//   );
//   await handleStep2(application.id, getStep2Data());

//   console.log(
//     `handleStep3: Updating applicationId=${application.id} with step3Data`
//   );
//   await handleStep3(application.id, getStep3Data());

//   console.log(
//     `handleAdminDocuments: Updating applicationId=${application.id} with adminDocumentsData`
//   );
//   await handleAdminDocuments(
//     application.id,
//     getAdminDocumentsData()
//   );

//   console.log(
//     `addFeedback: Adding feedback to applicationId=${application.id}`
//   );
//   await addFeedback(
//     application.id,
//     'Application looks good!'
//   );

//   console.log(
//     `updateApplicationStep: Updating applicationId=${application.id} to the next step from ${application.applicationStep}`
//   );
//   await updateApplicationStep(application.id);

//   const updatedUser = await prisma.user.findUnique({
//     where: { id: user.id },
//     include: {
//       application: true,
//     },
//   });

//   console.log('updatedUser', updatedUser);
//   console.log('seeding finished');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {});
