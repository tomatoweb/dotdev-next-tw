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

    if (body.option === "delete") {
        const result = await prisma.geomarker.deleteMany({
            where: {
                id: { gt: 4 }
            }
        })

        return NextResponse.json({
            message: 'ok',
            status: 200,
            data: result
        })
    } else {

        var jsonPosition = JSON.parse(body.position)

        const result = await prisma.geomarker.create({
            data: {
                position: JSON.stringify([jsonPosition.lat, jsonPosition.lng]),
                icon: "iconPurple",
                text: "purple location"
            }
        })

        if(!result) return NextResponse.json({
        message: 'error',
        status: 500
        }) 

        return NextResponse.json({
            message: 'ok',
            status: 200,
            data: "result"
        })
    }
}

