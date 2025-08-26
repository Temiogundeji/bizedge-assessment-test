import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import SVGComponent from "@/lib/svg-component";

interface TimeoffItem {
  type: string;
  days: number;
  color: string;
}

interface TimeoffProps {
  timeoffData?: TimeoffItem[];
  dropdownOptions?: string[];
}

function Timeoff({ timeoffData = [], dropdownOptions = [] }: TimeoffProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const itemsPerSlide: { [key: string]: number } = {
    base: 1,
    sm: 2,
    xl: 3,
    "2xl": 4,
  };
  const totalSlides: number = Math.ceil(
    timeoffData.length / itemsPerSlide["2xl"]
  );

  const nextSlide = (): void => {
    setCurrentSlide((prev: number) => (prev + 1) % totalSlides);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev: number) => (prev - 1 + totalSlides) % totalSlides);
  };

  // const getCurrentItems = (): TimeoffItem[] => {
  //   const start: number = currentSlide * itemsPerSlide["2xl"];
  //   return timeoffData.slice(start, start + itemsPerSlide["2xl"]);
  // };

  return (
    <Card className="shadow-md border-0 mt-4 sm:mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-gray-800">
            Timeoff
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-200 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-200 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 sm:mb-6">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full sm:w-64 px-3 sm:px-4 py-2 sm:py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <span className="@Id:550e8400-e29b-41d4-a716-446655440000 font-medium text-sm sm:text-base">
              Request Other Timeoffs
            </span>
            <ChevronDown
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {dropdownOptions.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setDropdownOpen(false)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex: number) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                  {timeoffData
                    .slice(
                      slideIndex * itemsPerSlide["2xl"],
                      (slideIndex + 1) * itemsPerSlide["2xl"]
                    )
                    .map((item: TimeoffItem, index: number) => (
                      <div key={`${slideIndex}-${index}`} className="relative">
                        <div
                          className={`${item.color} flex flex-col justify-center rounded-2xl p-4 sm:p-6 text-center shadow-md h-[220px] sm:h-[261.26px]`}
                        >
                          <h3 className="text-base sm:text-lg 2xl:text-xl font-semibold text-gray-800 mb-4">
                            {item.type}
                          </h3>
                          <SVGComponent
                            strokeW={16}
                            className="sm:stroke-[20]"
                          />
                          <div className="relative z-10">
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                              {item.days}
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 font-medium">
                              Days
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 mt-2">
                              Available
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Timeoff;
