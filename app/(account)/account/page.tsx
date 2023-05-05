export default function Account() {
  return (
    <main className='flex flex-col-reverse md:flex-row w-screen gap-4 h-screen justify-center relative items-center bg-white p-4'>
      <section className='relative flex h-screen justify-center items-center px-10 w-full md:w-1/2 rounded-md'>
        <div className='text-black text-2xl flex flex-col gap-4 font-sans w-full'>
          <h1 className='text-7xl font-extrabold text-blue-800 font-sans mb-10 hover:underline underline-offset-8 hover:animate-pulse'>
            Davi Spindola
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ut rerum voluptas asperiores aperiam
            perferendis aliquid, labore laboriosam incidunt quo quae?
            Nesciunt omnis assumenda, similique atque recusandae impedit
            repellat molestias veniam natus blanditiis porro suscipit
            nobis neque numquam repudiandae non! Dicta quaerat blanditiis
            totam excepturi in assumenda libero maiores doloribus.
          </p>
        </div>
      </section>
    </main>
  )
}
