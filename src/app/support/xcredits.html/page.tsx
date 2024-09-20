import { redirect } from 'next/navigation'

export default async function Page() {
    redirect(`https://github.com/regexplanet/regexplanet-next/tree/main?tab=readme-ov-file#credits`);
}