export default async (req, context) => {
  const ALLOWLIST = ["184.82.19.124"]; // ใส่ IP ที่อนุญาต
  if (!ALLOWLIST.includes(context.ip)) {
    return new Response("403 Forbidden: IP not allowed", { status: 403 });
  }
  return; // อนุญาตให้ไปต่อ
};

export const config = { path: "/*" };