import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pretty">
                Begin Your Journey to a{" "}
                <span className="text-primary">Better You</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transform your life with daily motivation, personalized
                guidance, and a companion for your fitness journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="px-8" asChild>
                <a href="/auth/login?screen_hint=signup">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" className="px-8" asChild variant={"secondary"}>
                <a href="/auth/login">Already Started? Login</a>
              </Button>
            </div>
          </div>
          <div className="mx-auto overflow-hidden object-cover sm:w-full lg:order-last">
            <Image
              alt="Hero Image"
              className="object-contain rounded-xl mx-auto"
              src="/hero.png"
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
