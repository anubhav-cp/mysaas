import { NextResponse } from "next/server"
import { auth } from "@/auth"
import connectMongo from "@/libs/mongoose"
import User from "@/models/User"
import Board from "@/models/Board"

export async function POST(req){
try {
    const body = await req.json()

    if(!body.name){
        return NextResponse.json({
            error: "Board name is required"
        },
    {status: 404})
    }

    const session = await auth()

    if(!session){
        return NextResponse.json(
            {error: "Not Authorized"},
            {staus: 401}
        )
    }

    await connectMongo();

    const user = await User.findById(session.user.id)

    const board = await Board.create({
        userId: user._id,
        name: body.name
    })

    user.boards.push(board._id)
    await user.save()

    return NextResponse.json({board})
} catch (error) {
    return NextResponse.json(
        {error: error},
        {status: 500}
    )
}
}

export async function DELETE(req) {
    try {
        const {searchParams} = req.nextUrl
        const boardId = searchParams.get("boardId") 
        console

        if(!boardId){
            return NextResponse.json(
                {error: 'BoardId is required'},
                {status: 400}
            )
        }

        const session = await auth()

        if(!session){
            return NextResponse.json(
                {error: 'Not Authorized'},
                {status: 401}
            )
        }

        await Board.deleteOne({
            _id: boardId,
            userId: session?.user?.id
        })
        const user = await User.findById(session?.user?.id)
        user.boards = user.boards.filter((id) => id.toString() !== boardId)

        await user.save()

        return NextResponse.json({})



    } catch (error) {
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        )
    }
}