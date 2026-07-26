import { redirect } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ engine: string }> }) {
    const { engine } = await params;
    redirect(`/advanced/${engine}/index.html`);
}