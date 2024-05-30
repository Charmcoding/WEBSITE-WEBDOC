import React from 'react'

export function Home2() {
  return (
    <section className="w-full md:h-screen flex flex-col items-center justify-center bg-[url(/dementia-brain-disease-memory-loss-and-poor-speech-pronunciation.svg)] bg-cover bg-center">
      <div className="max-w-4xl px-4 md:px-6 text-center space-y-4">
        <h1 className="text-4xl md:text-4xl font-bold text-dark">Trouvez les lésions cérébrales de la SP</h1>
        <p className="text-lg md:text-xl text-gray-500">Découvrez la plateforme ultime pour trouver des lésions dans le cerveau.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300">
            Se connecter
          </button>
          <button className="inline-flex items-center justify-center rounded-md border border-gray-200 border-transparent bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:border-gray-800">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home2