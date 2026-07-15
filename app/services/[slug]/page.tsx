import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header/Header";
import { ServicePage } from "@/components/ServicePage/ServicePage";
import { getServicePage, servicePages } from "@/data/services";

type ServiceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pageShell">
      <Header />
      <ServicePage service={service} />
    </div>
  );
}
