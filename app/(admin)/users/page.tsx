import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getUsers } from '@/data/user';
import Link from 'next/link';

const UsersPage = async () => {
  const users = await getUsers();

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center gap-8 flex-1 py-4">
      <div className='flex flex-col flex-1 w-full max-w-2xl'>
        <div className="w-full">
          <div className="flex items-center justify-center gap-8">
            <h1 className="text-2xl font-bold text-center mb-4">
              Users
            </h1>
            <span className="text-2xl font-bold text-center mb-4">
              ({users.length})
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {users.map((user) => (
              <Card
                key={user.id}
                className="flex items-center justify-between w-full"
              >
                <CardHeader className="">
                  <CardTitle>{user.name}
                    {' '}
                    <span>
                      - ({user.role})
                    </span>
                  </CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 h-auto"></CardContent>
                <CardFooter className="flex flex-col py-0 h-auto w-48 gap-1">
                  <Button
                    asChild
                  >
                    <Link href={`/applications/${user.id}`}>
                      View Application
                    </Link>
                  </Button>

                  {/*
                   <Button
                         variant="destructive"
                         disabled
                       >
                         No Application
                       </Button> 
                       */}

                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default UsersPage