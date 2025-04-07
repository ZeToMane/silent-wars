import { Content } from "@/components/Content";
import data from "@/public/data/data.json";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ pays: string }>;
};

export async function generateStaticParams() {
  const entries = Object.keys((data as Record<string, any>).fr[0]);

  const validPays = entries.filter(
    (key) =>
      !["à propos", "about", "rdc", "yemen", "drc"].includes(key.toLowerCase())
  );

  return validPays.map((pays) => ({ pays }));
}

export default async function Page({ params }: Props) {
  const { pays } = await params;
  const content = (data as Record<string, any>).fr[0]?.[pays]?.[0];

  //console.log("data(content) of page: ", content);

  if (!content) {
    notFound();
  }

  return <Content data={content} lang="fr" />;
}
