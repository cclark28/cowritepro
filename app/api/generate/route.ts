export async function POST(req: Request) {
  try {
    const body = await req.json();
    return Response.json({
      headline: 'Copy generation ready',
      body: 'Add ANTHROPIC_API_KEY to environment',
      cta: 'Get started',
    });
  } catch (e) {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
}
