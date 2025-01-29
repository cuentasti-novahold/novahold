import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <Image
          className="w-full h-auto"
          width={1200}
          height={400}
          src="/estamos_trabajando.png"
          alt="Estamos trabajando"
        />
    </div>
  );
}
