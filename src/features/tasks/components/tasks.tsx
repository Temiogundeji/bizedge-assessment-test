import { Card } from "../../../components/ui/card";
import { BookText } from "lucide-react";
import type { Task } from "../../../types/tasks";

interface TasksProps {
  tasks?: Task[];
}

function Tasks({ tasks = [] }: TasksProps) {
  return (
    <div className="flex w-full sm:w-[400px] 2xl:w-[450px]">
      <Card className="w-full bg-white border-0 shadow-md">
        <header className="flex flex-row justify-between px-3 sm:px-4 py-2 sm:py-3 items-center">
          <div className="flex flex-row gap-2 items-center">
            <BookText color="#E61C5C" size={16} className="sm:h-5 sm:w-5" />
            <h3 className="font-semibold text-[#545454] text-sm sm:text-base">
              Tasks
            </h3>
            <span className="bg-[#E61C5C] text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full">
              {tasks.length}
            </span>
          </div>
          <span className="font-semibold text-[#545454] text-sm sm:text-base">
            View all tasks
          </span>
        </header>
        <div className="flex flex-col gap-3 px-3 sm:px-4 py-2">
          {tasks.map((task, index) => (
            <Card key={index} className="border-0 shadow-md p-2 sm:p-3">
              <div className="flex flex-row justify-between items-center">
                <span className="text-[#171717] text-sm sm:text-base">
                  {task.title}
                </span>
                {task.actions && (
                  <div className="flex gap-2">
                    {task.actions.map((action, idx) => (
                      <span
                        key={idx}
                        className="text-[#4069D0] text-xs sm:text-sm"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Tasks;
