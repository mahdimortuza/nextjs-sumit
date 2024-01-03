

import Button from "@/app/components/Button";
import car from "@/public/image/car.jpg";
import Image from "next/image";

const mission = () => {
    return (
<main>
<div>this is mission page.</div>

<div className="mt-5 w-[600px]">
<Image placeholder="blur" src={car} alt="car "/>
<Button />
</div>
</main>
);
};

export default mission;