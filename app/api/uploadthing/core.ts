import { currentUser } from '@/lib/auth';
import {
  createUploadthing,
  type FileRouter,
} from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: '4MB' },
    pdf: { maxFileSize: '4MB' },
  })
    .middleware(async () => {
      const user = await currentUser();

      if (!user) throw new UploadThingError('Unauthorized');

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log(
        'Upload complete for userId:',
        metadata.userId
      );

      console.log('file url', file.url);

      return { userId: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
