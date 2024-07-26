import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest
) {
  const apiKey = process.env.NEXT_PUBLIC_QUIZ_API_KEY; // 환경 변수 API 키 설정

  // category 필수. searchParams도 무조건 있어야함
  const { searchParams } = new URL(req.url!);
  const category = searchParams.get('category');
  // tags 값 없으면 오류남
  const tags = searchParams.get('tags') ? "&tags=" + searchParams.get('tags') : "";

  const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}${tags}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
