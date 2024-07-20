import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { getContactQueries } from "@/data/contactQuery";
import { Badge } from "@/components/ui/badge";
import QueryUpdateStatus from "../_components/QueryStatusUpdate";

const QueriesPage = async () => {
  const queries = await getContactQueries();

  return (
    <main className="flex flex-col items-center justify-center gap-8 flex-1 py-4">
      <h1 className="text-3xl font-bold">Contact Queries ({queries.length})</h1>
      <div className="grid gap-4 max-w-2xl w-full">
        {queries.map((query, id) => (
          <Card
            key={id}
            className="flex flex-col items-left justify-between w-full"
          >
            <CardHeader>
              <CardTitle className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant={
                    query.status === 'PENDING' ? 'destructive' :
                      query.status === 'RESOLVED' ? 'success' :
                        query.status === 'IN_PROGRESS' ? 'secondary' :
                          'default'
                  } className="w-max rounded-3xl">{query.status}</Badge>
                  <p className="text-2xl font-semibold">Subject: {query.subject}</p>
                </div>
                <QueryUpdateStatus id={query.id} />
              </CardTitle>
              <CardDescription className="text-black">
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Request ID: <span className="font-normal">{query.id}</span></p>
              <p className="font-medium">Name: <span className="font-normal">{query.name}</span></p>
              <p className="font-medium">Email: <span className="font-normal">{query.email}</span></p>
              <p className="font-medium">Query: <span className="font-normal">{query.message}</span></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main >
  )
}

export default QueriesPage