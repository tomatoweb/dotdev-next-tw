import prisma from "@/lib/db";
import { NextResponse } from "next/server"

export async function GET() {

    const result = await prisma.geomarker.findMany()

    return NextResponse.json({
        message: 'ok',
        status: 200,
        data: result
    })
}


export async function POST(req: Request) {

    const body = await req.json()
    console.log('body', body)
    var jsonPosition = JSON.parse(body.position)
    let pos = [jsonPosition.lat, jsonPosition.lng]
    console.log('position', pos)
    //const {title, content} = body

    const result = await prisma.geomarker.create({
      data: {
        position: JSON.stringify([jsonPosition.lat, jsonPosition.lng]),
        icon: "iconPurple",
        text: "purple location"
      }
    })

    /* if(!result) return NextResponse.json({
      message: 'error',
      status: 500
    }) */

    return NextResponse.json({
        message: 'ok',
        status: 200,
        data: "result"
    })
}

