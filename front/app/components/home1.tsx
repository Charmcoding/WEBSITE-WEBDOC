import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function Home1() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                Brain MRI Lesion Segmentation
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unlock the Power of AI for Accurate Diagnosis
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Our cutting-edge AI model helps radiologists and doctors accurately identify and segment brain MRI
                lesions, leading to faster and more reliable diagnoses.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Sign Up
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revolutionize Brain MRI Analysis</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our AI-powered brain MRI lesion segmentation tool provides unparalleled accuracy and efficiency,
                empowering radiologists and doctors to make more informed decisions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Accurate Lesion Detection</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our advanced AI model precisely identifies and segments brain MRI lesions, reducing the risk of missed
                or misdiagnosed conditions.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Streamlined Workflow</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Integrate our tool seamlessly into your existing radiology workflow, saving time and improving overall
                efficiency.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Collaborative Platform</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connect radiologists and doctors to share insights, discuss cases, and work together towards better
                patient outcomes.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Comprehensive Reporting</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Generate detailed reports with visualizations and annotations to support clinical decision-making.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Secure Data Management</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ensure the privacy and security of patient data with our state-of-the-art data protection measures.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Continuous Improvement</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI model is constantly learning and improving, providing you with the latest advancements in brain
                MRI analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Accuracy"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                Unparalleled Accuracy
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Precise Lesion Identification
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our AI model has been trained on a vast dataset of brain MRI scans, achieving industry-leading accuracy
                in detecting and segmenting lesions. This translates to faster and more reliable diagnoses for your
                patients.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Case Studies</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Real-World Success Stories</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover how our brain MRI lesion segmentation AI has transformed the clinical practices of leading
                healthcare providers.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Improved Diagnostic Accuracy</CardTitle>
                <CardDescription>
                  A leading hospital saw a 25% increase in accurate brain lesion detection after implementing our AI
                  solution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Case Study 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reduced Turnaround Time</CardTitle>
                <CardDescription>
                  A radiology practice was able to process 30% more brain MRI scans per day using our AI-powered
                  analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Case Study 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Improved Patient Outcomes</CardTitle>
                <CardDescription>
                  A neurology clinic reported a 15% reduction in missed or misdiagnosed brain lesions after adopting our
                  solution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Case Study 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from the healthcare professionals who have transformed their practices with our brain MRI lesion
                segmentation AI.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “The accuracy of the lesion detection has been a game-changer for our practice. We can now provide
                  more reliable diagnoses to our patients.”
                </blockquote>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.svg" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Dr. Emily Rosenberg</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Radiologist, ABC Hospital</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “The streamlined workflow and comprehensive reporting have made our lives so much easier. We can now
                  focus more on patient care.”
                </blockquote>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Dr. John Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Neurologist, XYZ Clinic</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
