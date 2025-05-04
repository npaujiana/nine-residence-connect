
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AppShowcaseSection = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nine Residence finds your ideal rooms - automatically
            </h2>
            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-nine-purple p-3 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">All your room options in one place</h3>
                  <p className="text-gray-600">Nine Residence gathers your local co-living options, analyzes room specifications, and suggests the perfect match for your lifestyle.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-nine-peach p-3 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#FF8A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="#FF8A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="#FF8A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="#FF8A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Your ideal rooms are out there</h3>
                  <p className="text-gray-600">With our extensive network of over 25 properties in the city, it's very easy to find that perfect room with one simple search.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-nine-green p-3 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#43A047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#43A047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Supports all major areas</h3>
                  <p className="text-gray-600">Nine Residence can find and manage rooms from all major providers and neighborhoods across the city.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-nine-purple/20 to-nine-blue/20 rounded-3xl p-10 relative">
              <div className="absolute -bottom-6 -right-6 bg-white w-full h-full rounded-3xl border border-gray-100 shadow-lg z-10">
                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                  <img 
                    src="public/lovable-uploads/2525aba6-a45e-4bd2-8a78-7ca6b4104700.png" 
                    alt="Nine Residence App" 
                    className="absolute top-0 right-0 w-1/2 h-auto transform translate-y-[-5%]"
                  />
                  <div className="absolute left-8 top-1/3 p-6 bg-white rounded-xl shadow-md max-w-[60%]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <h3 className="font-bold">Room Found</h3>
                    </div>
                    <p className="text-sm text-gray-700">We found a recommended room for you on 10th Floor, Building C, Room 234.</p>
                    <div className="text-xs text-gray-500 mt-1">Available starting 25 May</div>
                    <div className="flex space-x-2 mt-4">
                      <Button className="bg-gradient-to-r from-nine-accent to-nine-accent/80 text-white text-xs px-4 py-1 h-8 rounded-full">
                        View Room
                      </Button>
                      <button className="text-xs text-gray-500 underline">
                        See more options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
