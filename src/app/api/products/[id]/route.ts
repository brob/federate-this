import {products} from '../productData.js'
import { NextResponse } from 'next/server'
// make GET route for nextjs

export async function GET(
    request: Request,
    { params }: { params: { id: number } }
  ) {
    const id = params.id // 'a', 'b', or 'c'
    const product = products.find((p) => p.id == id)

    // return products based on nextjs return
    return NextResponse.json({ data: product })

}
 


