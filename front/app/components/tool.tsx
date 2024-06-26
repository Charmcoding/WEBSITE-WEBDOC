
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Tool() {
  return (
    <div key="1" className="flex flex-col h-screen">

            <header className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="hover:text-gray-400" prefetch={false}>
            <ArrowLeftIcon className="h-6 w-6" />
            <span className="sr-only">Go Back</span>
          </Link>
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Diagnostic Patient Amel</h1>
          </div>
          <Link href="#" className="hover:text-gray-400" prefetch={false}>
            <LogOutIcon className="h-6 w-6" />
            <span className="sr-only">Logout</span>
          </Link>
        </div>
      </header>
      


      <main className="flex-1 py-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Upload Image</h2>
            <div className="flex justify-center items-center h-64 border-2 border-dashed border-gray-400 rounded-lg">
              <div className="text-center">
                <UploadIcon className="w-12 h-12 text-gray-500 mb-2" />
                <p className="text-gray-500">Drag and drop your image here or click to upload</p>
                <input className="hidden" type="file" />
                <Button className="mt-4">Upload</Button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Segmentation Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  alt="Original Image"
                  className="rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <p className="text-center mt-2">Original Image</p>
              </div>
              <div>
                <img
                  alt="Segmented Image"
                  className="rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <p className="text-center mt-2">Segmented Image</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <form>
              <div className="mb-4">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter a description of the image and segmentation results"
                  rows={4}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="results">Results</Label>
                <Textarea
                  id="results"
                  name="results"
                  placeholder="Enter the results of the image segmentation"
                  rows={4}
                />
              </div>
              <Button type="submit" variant="default">  
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