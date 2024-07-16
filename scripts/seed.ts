require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const urls = [
  'https://example.com/document1.pdf',
  'https://example.com/document2.pdf',
  'https://example.com/document3.pdf',
  'https://example.com/document4.pdf',
  'https://example.com/document5.pdf',
  'https://example.com/document6.pdf',
  'https://example.com/document7.pdf',
  'https://example.com/document8.pdf',
  'https://example.com/document9.pdf',
  'https://example.com/document10.pdf',
  'https://example.com/document11.pdf',
  'https://example.com/document12.pdf',
];

function getRandomUrl() {
  return urls[Math.floor(Math.random() * urls.length)];
}

async function main() {
  const prisma = new PrismaClient();
  console.log('seeding database');

  const password = process.env.PASSWORD_HASH!;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('password', password);
  console.log('hashedPassword', hashedPassword);
  const user = await prisma.user.create({
    data: {
      name: 'Muhammad Hammad',
      email: 'hammadtariq838@gmail.com',
      password: hashedPassword,
      emailVerified: new Date(),
    },
  });

  const application = await prisma.application.create({
    data: {
      applicationStep: 'STEP_1',
      name: 'Muhammad Hammad',
      dateOfBirth: '2003-01-30',
      phoneNumber: '1234567890',
      email: 'hammadtariq838@gmail.com',
      emergencyContactName: 'Jane Doe',
      emergencyContactEmail: 'jane.doe@example.com',
      emergencyContactNumber: '0987654321',
      nationalIdCard: getRandomUrl(),
      passport: getRandomUrl(),
      nursingLicense: getRandomUrl(),
      nursingDegree: getRandomUrl(),
      highSchoolDiploma: getRandomUrl(),
      highSchoolGrades: getRandomUrl(),
      curriculumVitae: getRandomUrl(),
      nationalId: getRandomUrl(),
      passportPhoto: getRandomUrl(),
      passportId: getRandomUrl(),
      nursingSchoolDiploma: getRandomUrl(),
      nursingSchoolTranscript: getRandomUrl(),
      nursingExperienceCertificate: getRandomUrl(),
      usSocialSecurityCard: getRandomUrl(),
      usGreenCard: getRandomUrl(),
      birthCertificate: getRandomUrl(),
      toeflExamResult: getRandomUrl(),
      usNursingEvaluation: getRandomUrl(),
      usCgfnsCertificate: getRandomUrl(),
      usVisaScreen: getRandomUrl(),
      usJobOffer: getRandomUrl(),
      User: {
        connect: {
          id: user.id,
        },
      },
      spouseDetails: {
        create: [
          {
            spouseDemographics: getRandomUrl(),
            spouseBirthCertificate: getRandomUrl(),
            spousePassport: getRandomUrl(),
            spousePassportPhoto: getRandomUrl(),
            marriageCertificate: getRandomUrl(),
          },
        ],
      },
      childrenDetails: {
        create: [
          {
            birthCertificate: getRandomUrl(),
            passportPhoto: getRandomUrl(),
            immunizationRecord: getRandomUrl(),
          },
        ],
      },
    },
  });

  console.log({ user, application });
  console.log('seeding finished');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {});
