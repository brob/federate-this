import {reviews} from '../../../reviews/reviewData'
import { NextResponse } from 'next/server'
// make GET route for nextjs

export async function GET(
    request: Request,
    { params }: { params: { id: number } }
  ) {
    const id = params.id // 'a', 'b', or 'c'
    const product = reviews.filter((p) => p.product == id)

    // return products based on nextjs return
    return NextResponse.json({ data: product })

}
 


