import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      console.error("🔴 Lỗi: Thiếu GEMINI_API_KEY");
      return NextResponse.json({ reply: "Lỗi: Chưa cấu hình GEMINI_API_KEY trong file .env.local" }, { status: 500 });
    }

    const prompt = `Bạn là trợ lý ảo nhiệt tình của website bán điện thoại Realme GT8 Pro.
    Thông số:
    - Chip: Snapdragon 8 Elite (3nm, 4.32GHz) mạnh mẽ cân mọi game AAA.
    - Màn hình: 6.78" LTPO AMOLED, 144Hz, Độ sáng 6000 nits.
    - Sạc & Pin: 100W siêu tốc, Tản nhiệt buồng hơi VC 3D lớn nhất phân khúc.
    - RAM/ROM: 16GB / 512GB.
    - Giá đặt trước: 15.990.000 VNĐ.
    
    Quy tắc: Trả lời ngắn gọn, thân thiện, và luôn khuyến khích khách hàng mua sản phẩm hoặc đặt trước. Không dùng định dạng markdown quá phức tạp.
    
    Câu hỏi của khách: "${message}"`;

    // SỬA LỖI TẠI ĐÂY: Đổi sang gemini-pro để đảm bảo tương thích 100% với mọi API Key
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text }, { status: 200 });
  } catch (error: any) {
    console.error("🔴 CHI TIẾT LỖI GEMINI API:", error?.message || error);
    
    return NextResponse.json(
      { reply: "Xin lỗi, đường truyền đến máy chủ AI đang tắc nghẽn. Vui lòng thử lại sau!" }, 
      { status: 500 }
    );
  }
}