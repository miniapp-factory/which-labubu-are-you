import { Metadata } from 'next';
import { title, description, url } from '@/lib/metadata';
import Quiz from '@/components/quiz';

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      'fc:miniapp': JSON.stringify({
        version: 'next',
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          // button configuration can be added here if needed
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-3 place-items-center px-4">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <Quiz />
    </main>
  );
}
