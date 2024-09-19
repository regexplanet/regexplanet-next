import { redirect } from 'next/navigation'

export default async function Page({ params }: { params: { engine: string } }) {
    redirect(`/advanced/${params.engine}/index.html`);
}