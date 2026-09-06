import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy/CaseStudy";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

type CaseStudyRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: {
      absolute: caseStudy.metaTitle,
    },
    description: caseStudy.metaDescription,
    robots: caseStudy.isPublished
      ? undefined
      : {
          index: false,
          follow: false,
        },
    alternates: {
      canonical: "/work/" + caseStudy.slug,
    },
  };
}

export default async function CaseStudyRoute({
  params,
}: CaseStudyRouteProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="pageShell">
      <Header />
      <CaseStudy caseStudy={caseStudy} />
      <Footer variant="inverse" />
    </div>
  );
}
