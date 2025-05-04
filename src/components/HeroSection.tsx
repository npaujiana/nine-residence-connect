
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 bg-gradient-to-b from-white to-nine-purple/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Live, Learn & <span className="text-nine-accent">Connect</span> at Nine Residence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              A modern co-living space designed for teenagers with digital room management and vibrant community features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-nine-accent hover:bg-nine-dark text-white font-medium px-8 py-2 h-12 text-base">
                Try for Free
              </Button>
              <Button className="bg-transparent hover:bg-nine-purple/30 text-nine-dark border border-nine-accent px-8 py-2 h-12 text-base">
                Register Now
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="w-full max-w-md">
              <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="300" height="200" rx="10" fill="#E5DEFF" />
                <rect x="70" y="70" width="120" height="160" rx="5" fill="#FFDEE2" />
                <rect x="210" y="70" width="120" height="75" rx="5" fill="#D3E4FD" />
                <rect x="210" y="155" width="120" height="75" rx="5" fill="#FDE1D3" />
                <circle cx="130" cy="120" r="25" fill="#9b87f5" />
                <rect x="105" y="160" width="50" height="10" rx="2" fill="#9b87f5" opacity="0.8" />
                <rect x="105" y="175" width="50" height="10" rx="2" fill="#9b87f5" opacity="0.6" />
                <rect x="105" y="190" width="50" height="10" rx="2" fill="#9b87f5" opacity="0.4" />
                <circle cx="270" cy="95" r="15" fill="#9b87f5" />
                <rect x="240" y="115" width="60" height="5" rx="2" fill="#9b87f5" opacity="0.8" />
                <rect x="240" y="125" width="60" height="5" rx="2" fill="#9b87f5" opacity="0.6" />
                <circle cx="270" cy="180" r="15" fill="#9b87f5" />
                <rect x="240" y="200" width="60" height="5" rx="2" fill="#9b87f5" opacity="0.8" />
                <rect x="240" y="210" width="60" height="5" rx="2" fill="#9b87f5" opacity="0.6" />
              </svg>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-nine-yellow rounded-full opacity-60 animate-float"></div>
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-nine-blue rounded-full opacity-60 animate-float" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
