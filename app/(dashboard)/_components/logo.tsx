import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-40 h-12">
      <Image 
        src="/logo1.png" 
        alt="Qemer Logo" 
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default Logo;
