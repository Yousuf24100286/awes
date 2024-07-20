import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import QueryClose from "../_components/QueryClose";
import { Badge } from "@/components/ui/badge";
import { getNewsletterSubscribers } from "@/data/newsletter";

const NewsletterPage = async () => {
  const subscribers = await getNewsletterSubscribers();

  return (
    <main className="flex flex-col items-center justify-center gap-8 flex-1 py-4">
      <div className="flex-1 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center">Newsletter Subscribers ({subscribers.length})</h1>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        key="id"
                        scope="col"
                        className="py-3 text-sm font-medium text-center"
                      >
                        ID
                      </th>
                      <th
                        key="email"
                        scope="col"
                        className="py-3 text-sm font-medium text-center"
                      >
                        Email
                      </th>
                      <th
                        key="subscribedAt"
                        scope="col"
                        className="py-3 text-sm font-medium text-center"
                      >
                        Subscribed At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber.id}>
                        <td className="text-center py-4">
                          {subscriber.id}
                        </td>
                        <td className="text-center py-4">
                          {subscriber.email}
                        </td>
                        <td className="text-center py-4">
                          {subscriber.subscribedAt.toDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default NewsletterPage;