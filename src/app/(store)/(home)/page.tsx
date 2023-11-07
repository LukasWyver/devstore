export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
