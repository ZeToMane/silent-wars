import { Content } from "@/components/Content";
import data from "@/public/data/data.json";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    pays: string;
  };
};

export async function generateStaticParams() {
  const countries = Object.keys((data as Record<string, any>).en[0]);

  // Filter out any non-country sections (like "about", "rdc", "yemen" if needed)
  const validCountries = countries.filter(
    (key) =>
      !["about", "à propos", "rdc", "yemen", "drc"].includes(key.toLowerCase())
  );

  return validCountries.map((pays) => ({ pays }));
}

export default async function Page({ params }: PageProps) {
  const { pays } = await params;
  const content = (data as Record<string, any>).en[0]?.[pays]?.[0];

  console.log("data(content) of page: ", content);

  if (!content) {
    notFound();
  }

  return <Content data={content} lang="en" />;
}
