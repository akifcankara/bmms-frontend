import { CheckCircle2, Circle } from 'lucide-react';

interface KycStep {
  label: string;
  completed: boolean;
}

interface IndicatorProps {
  steps: KycStep[];
  currentProgress: number;
}

export default function Indicator({ steps, currentProgress }: IndicatorProps) {
  return (
    <div className="w-full bg-white border-b border-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="px-2 sm:px-4 md:px-8 py-4 flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <div className="text-xs sm:text-sm font-semibold text-gray-700">
              Application Progress
            </div>
            <div className="text-xs sm:text-sm font-normal text-gray-600">
              {currentProgress}% Complete
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-gray-200 rounded-full relative">
            <div
              className="absolute top-0 left-0 h-2.5 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 transition-all duration-300"
              style={{ width: `${currentProgress}%` }}
            />
          </div>

          {/* Steps - Scrollable on mobile */}
          <div className="w-full overflow-x-auto pt-1 -mx-2 px-2">
            <div className="flex items-center justify-between min-w-max sm:min-w-0 gap-2 sm:gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  {step.completed ? (
                    <CheckCircle2
                      size={12}
                      className="text-teal-600 flex-shrink-0"
                    />
                  ) : (
                    <Circle size={12} className="text-gray-400 flex-shrink-0" />
                  )}
                  <div className="ml-1.5 sm:ml-2">
                    <p
                      className={`text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                        step.completed ? 'text-teal-600' : 'text-gray-400'
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
