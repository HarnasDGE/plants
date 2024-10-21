"use client";
import { services } from "../constans/services";
import { Button } from "./Button";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const ServicesList = () => {
  const pathname = usePathname();
  const currentParam = pathname.split("/").pop(); // Ekstrakcja parametru z URL

  return (
    <div className="py-10 px-7 shadow-normal">
      <h2 className="text-3xl font-bold mb-7">Service</h2>
      <ul className="flex flex-col gap-5">
        {services.map((service) => (
          <Link key={service.name} href={`/services/${service.param}`}>
            <Button
              type="list"
              color={`${service.param === currentParam ? "default" : "third"}`}
            >
              {service.name}
              {service.param === currentParam ? <MinusIcon /> : <PlusIcon />}
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
};
