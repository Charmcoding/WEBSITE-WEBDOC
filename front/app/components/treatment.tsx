import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Treatment() {
  return (
    <div className="flex flex-col h-screen ">
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="hover:text-gray-400" href="#">
            <ArrowLeftIcon className="h-6 w-6" />
            <span className="sr-only">Go Back</span>
          </Link>
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Treatment Patient Amel</h1>
          </div>
          <Link className="hover:text-gray-400" href="#">
            <LogOutIcon className="h-6 w-6" />
            <span className="sr-only">Logout</span>
          </Link>
        </div>
      </header>
    
      <main className="flex-1 bg-transparent py-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Resultat Radiologue</h2>
            <Link href="#" className="text-blue-600 underline">
              View Results
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <form>

              <div className="mb-5">
                <Label htmlFor="treatment">
                  Treatment Description
                  </Label>
                <Textarea
                  className="w-full border border-gray-600 border-gray-600 rounded-lg p-1 dark:border-gray-800"
                  id="treatment"
                  name="treatment"
                  placeholder="Enter the treatment description"
                  rows={4}
                />
              </div>
              <Button className="w-full" type="submit">
                Save
              </Button>
            </form>
          </div>

        </div>
      </main>

    </div>
  )
}

function ArrowLeftIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function LogOutIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function UploadIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
