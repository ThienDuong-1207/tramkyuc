import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ZONES, getZone } from "@/lib/zones";
import { ZonePlayer } from "@/components/ZonePlayer";

export function generateStaticParams() {
  return ZONES.map((zone) => ({ zone: zone.slug }));
}

export async function generateMetadata(
  props: PageProps<"/qr/[zone]">
): Promise<Metadata> {
  const { zone: slug } = await props.params;
  const zone = getZone(slug);
  if (!zone) return {};
  return {
    title: `${zone.title} — Sân Chơi Bệnh Viện`,
    description: zone.subtitle,
  };
}

export default async function ZonePage(props: PageProps<"/qr/[zone]">) {
  const { zone: slug } = await props.params;
  const zone = getZone(slug);
  if (!zone) notFound();

  return <ZonePlayer zone={zone} />;
}
