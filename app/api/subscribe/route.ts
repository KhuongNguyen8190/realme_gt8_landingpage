import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // LINK API CHUẨN ĐÃ ĐƯỢC BÓC TÁCH KHỎI LINK DASHBOARD
    const webhookUrl = "https://webhook.site/57b576c1-dcbe-4b91-91b2-6756d75d1a19"; 
    
    // Đã mở khóa lệnh fetch: Trình duyệt sẽ thực sự bắn dữ liệu đến Webhook của bạn
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), 
    });

    // Log ra terminal để bạn dễ theo dõi quá trình
    console.log("📥 Đã bắn dữ liệu qua Webhook thành công:", body);

    return NextResponse.json(
      { success: true, message: "Lưu thông tin thành công!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lỗi khi gửi webhook:", error);
    return NextResponse.json(
      { success: false, message: "Đã xảy ra lỗi hệ thống" },
      { status: 500 }
    );
  }
}