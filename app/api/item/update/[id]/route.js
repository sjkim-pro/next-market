import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

export async function PUT(request, context) {
    const reqBody = await request.json();
    const params = await context.params;
    try {
        await connectDB();
        await ItemModel.updateOne({_id: params.id}, reqBody);
        return NextResponse.json({message:"아이템 수정 성공"});
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({message:"아이템 수정 실패"});
    }

}