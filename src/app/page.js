import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Federate This: Your collection of fake APIs to use content federation</h1>
    
      <section className="mt-24">
      <h2 className="text-4xl font-bold">Products Route</h2>
      <p className="text-2xl text-blue-600"><Link href="/api/products/">/api/products</Link></p>
      <p className="text-2xl text-blue-600"><Link href="/api/products/1">/api/products/:id</Link></p>
      <h3 className="text-3xl font-bold">Potential SDL</h3>
      <pre className="text-md">
        <code>
          {`
            type Product {
              id: Int
              name: String
              price: Int
              description: String
              image: String
              category: String
              rating: Float
              numReviews: Int
              countInStock: Int
            }
            
            type Products {
              data: [Product]
            }
          `}
        </code>
      </pre>


      </section>
      <section className="mt-24">
      <h2 className="text-4xl font-bold">Reviews Route</h2>
      <p className="text-2xl text-blue-600"><Link href="/api/reviews/">/api/reviews</Link></p>
      <p className="text-2xl text-blue-600"><Link href="/api/products/1/reviews">/api/products/:id/reviews</Link></p>
      <h3 className="text-3xl font-bold">Potential SDL</h3>
      <pre className="text-md">
        <code>
          {`
          type Review {
            id: Int
            product: Int
            name: String
            rating: Float
            comment: String
          }
          
          type Reviews {
            data: [Review]
          }
          `}
        </code>
      </pre>

      </section>
    </main>
  )
}
