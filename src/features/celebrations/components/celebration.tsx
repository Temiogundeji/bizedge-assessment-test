import { Card } from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
} from "../../../components/ui/tabs";
import { Cake } from "lucide-react";
import type Employee from "../../../types/employee";

interface CelebrationsProps {
  employees?: Employee[];
}

function Celebrations({ employees = [] }: CelebrationsProps) {
  return (
    <Card className="border-0 shadow-md">
      <header className="px-3 sm:px-4 py-2 sm:py-3">
        <h3 className="text-[#171717] font-semibold text-sm sm:text-base 2xl:text-lg">
          Celebrations
        </h3>
      </header>
      <Tabs defaultValue="birthdays" className="w-full">
        <TabsList className="flex justify-start rounded-2xl bg-gray-100 p-1 shadow-sm mx-3 sm:mx-4">
          <TabsTrigger
            value="birthdays"
            className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:text-gray-500"
          >
            Birthdays
          </TabsTrigger>
          <TabsTrigger
            value="job"
            className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:text-gray-500"
          >
            Job Anniversary
          </TabsTrigger>
          <TabsTrigger
            value="newhire"
            className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:text-gray-500"
          >
            New Hire
          </TabsTrigger>
        </TabsList>
        <TabsContent value="birthdays" className="px-3 sm:px-4 py-2">
          <header className="bg-white py-2 h-10 shadow-sm">
            <span className="text-sm sm:text-base text-[#878787] font-semibold">
              Today
            </span>
          </header>
          <div className="h-[183px] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {employees.map((emp: Employee) => (
                <Card
                  key={emp.id}
                  className="rounded-md shadow-sm border-0 hover:shadow-md bg-[#EBEFFA] p-2 sm:p-3"
                >
                  <div className="flex flex-row justify-between items-center">
                    <img
                      src={emp.image}
                      alt={emp.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col items-start ml-2">
                      <h3 className="font-semibold text-sm sm:text-base">
                        {emp.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        {emp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                      <Cake className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                      <span className="text-[13px]">{emp.birthday}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <footer className="bg-white py-2 h-10 shadow-sm">
            <span className="text-sm sm:text-base text-[#878787] font-semibold">
              Upcoming Birthdays
            </span>
          </footer>
        </TabsContent>
        <TabsContent value="job" className="p-3 sm:p-4">
          💼 Job Anniversaries will show here
        </TabsContent>
        <TabsContent value="newhire" className="p-3 sm:p-4">
          👋 New Hires will show here
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default Celebrations;
