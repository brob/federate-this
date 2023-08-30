import {products} from './productData.js'
import { NextResponse } from 'next/server'
// make GET route for nextjs

export async function GET(request) {

    // return products based on nextjs return
    return NextResponse.json({ data: products })

}
 


