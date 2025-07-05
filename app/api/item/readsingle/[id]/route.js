import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

export async function GET(request, context) {
    try {
        await connectDB();
        const params = await context.params;
        const singleItem = await ItemModel.findById(params.id);
        return NextResponse.json({message:"아이템 읽기 성공(하나)", singleItem: singleItem});
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({message:"아이템 읽기 실패(하나)"});
    }

}