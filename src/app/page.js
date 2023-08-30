import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Federate This</h1>
      <h2 className="text-4xl font-bold">Your collection of fake APIs to use content federation in demos</h2>
    
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
      <section className="mt-24">
      <h2 className="text-4xl font-bold">Dev.to Route</h2>
      <p className="text-2xl text-blue-600"><Link href="/api/devto/articles/brob">/api/devto/articles/:username</Link></p>
      {/* <p className="text-2xl text-blue-600"><Link href="/api/devto/articles/123">/api/devto/articles/:id</Link></p> */}
      <h3 className="text-3xl font-bold">Potential SDL</h3>
      <pre className="text-md">
        <code>
          {`
          type Article {
            type_of: String
            id: Int
            title: String
            description: String
            cover_image: String
            readable_publish_date: String
            social_image: String
            tag_list: [String]
            tags: String
            slug: String
            path: String
            url: String
            canonical_url: String
            comments_count: Int
            positive_reactions_count: Int
            public_reactions_count: Int
            collection_id: Int
            created_at: String
            edited_at: String
            crossposted_at: String
            published_at: String
            last_comment_at: String
            published_timestamp: String
            body_html: String
            body_markdown: String
            user: User
          }

          type User {
            name: String
            username: String
            twitter_username: String
            github_username: String
            website_url: String
            profile_image: String
            profile_image_90: String
          }

          type Articles {
            data: [Article]
          }
          `}
        </code>
      </pre>

      </section>
      

    </main>
  )
}
