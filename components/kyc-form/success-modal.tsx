import { CheckCircle2, LayoutDashboard } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleGoToDashboard = () => {
    onClose();
    router.push('/'); // TODO: Update with actual dashboard route
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div
        className="relative w-full max-w-4xl px-4 sm:px-8 py-8 sm:py-16 rounded-2xl shadow-2xl"
        style={{
          backgroundImage:
            'linear-gradient(147.2deg, rgb(240, 253, 250) 0%, rgb(255, 255, 255) 50%, rgb(236, 254, 255) 100%)',
        }}
      >
        <div className="flex flex-col items-center gap-6 sm:gap-12">
          {/* Success Icon */}
          <div
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(74, 222, 128) 0%, rgb(22, 163, 74) 100%)',
            }}
          >
            <CheckCircle2
              size={48}
              className="text-white sm:w-[60px] sm:h-[60px]"
              strokeWidth={3}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Application Submitted Successfully!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed px-4">
              Thank you for choosing Bridge. Your business setup application has
              been received and is now under review.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleGoToDashboard}
            className="flex items-center gap-2 px-8 py-4 text-white text-base font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl"
            style={{
              background:
                'linear-gradient(to right, rgb(13, 148, 136), rgb(8, 145, 178))',
            }}
          >
            <LayoutDashboard size={16} />
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
