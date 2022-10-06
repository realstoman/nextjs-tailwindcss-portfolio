import Image from "next/image";

function AboutClientSingle({ title, image }) {
  return (
    <div className=" border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-lg rounded-lg mb-5 cursor-default ">
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={300}
        height={100}
      />
    </div>
  );
}

export default AboutClientSingle;
