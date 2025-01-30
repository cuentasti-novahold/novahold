import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <Image
        className="w-full h-auto"
        width={1200}
        height={400}
        src="/estamos_trabajando.png"
        alt="Estamos trabajando"
      />
      <Link
        href="https://www.linkedin.com/authwall?trkInfo=AQG8Sce0ewI52gAAAZS458qQJCGuCr5zKlp46qpS6D5B4WVn1Ebws8wRunHP7I8v9B3n6eDW62uvxtnUXBgHx9MKWJV0Mbz1sCWCsWjmbYMMvquH1Jlj6Nisej6WKZykViUqRu4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fnovahold-enterprises%2F%3FviewAsMember%3Dtrue" className="absolute inset-0 flex items-center justify-start text-black" target="_blank">
      </Link>
    </div>
  );
}
