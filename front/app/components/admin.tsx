
import { Button } from "@/components/ui/button"

export default function Admin() {
  return (
    <main className="bg-white container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Patients</h2>
            <Button size="sm" className="bg-white">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Patient
            </Button>
          </div>
          <div className="divide-y divide-gray-200 ">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div className="font-medium">ID</div>
              <div className="font-medium">Name</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div>1234</div>
              <div>John Doe</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div>5678</div>
              <div>Jane Smith</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Doctors</h2>
            <Button size="sm" className="bg-white">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Doctor
            </Button>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div className="font-medium">ID</div>
              <div className="font-medium">Name</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div>1</div>
              <div>Dr.John</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div>2</div>
              <div>Dr.ahmed</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Radiologists</h2>
            <Button size="sm" className="bg-white">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Radiologist
            </Button>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div className="font-medium">ID</div>
              <div className="font-medium">Name</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div>9012</div>
              <div>Dr. Alex Johnson</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
              <div>3456</div>
              <div>Dr. Emily Davis</div>
              <div className="flex gap-2">
                <Button size="icon" className="bg-white">
                  <DeleteIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" className="bg-white">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function DeleteIcon(props : any) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function PlusIcon(props : any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props : any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}