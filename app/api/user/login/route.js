import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModels";
export async function POST(request) {
    const reqBody = await request.json();
    try {
        await connectDB();
        const savedUserData = await UserModel.findOne({ email: reqBody.email });
        if (savedUserData) {
            if (reqBody.password === savedUserData.password) {
                return NextResponse.json({message:"로그인 성공"})
            } else {
                return NextResponse.json({message:"로그인 실패: 비밀번호가 올바르지 않습니다."})
            }

        } else {
            return NextResponse.json({message:"로그인 실패: 사용자를 등록하십시오"})
        }

    } catch {
        return NextResponse.json({message:"로그인 실패"})
    }

}