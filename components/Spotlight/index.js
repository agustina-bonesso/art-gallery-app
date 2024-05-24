import Image from "next/image";

export default function Spotlight({ image, artist, title }) {
  return (
    <section>
      <Image src={image} alt={title} width={500} height={500}></Image>
      <div>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
      </div>
    </section>
  );
}
