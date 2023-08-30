
import { NextResponse } from 'next/server'
// make GET route for nextjs

export async function GET(request, {params}) {
    const data = await fetch(`https://dev.to/api/articles/${params.id}`)
    const body = await data.json()
    console.log(body)
    // return products based on nextjs return
    return NextResponse.json({ data: body })

}
 


