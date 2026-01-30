import { ErrorMessage } from 'formik';
import { UserCog } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface Shareholder {
  id: string;
  fullName: string;
}

interface ManagementRolesSectionProps {
  values: any;
  shareholders: Shareholder[];
  setFieldValue: (field: string, value: any) => void;
}

export default function ManagementRolesSection({
  values,
  shareholders,
  setFieldValue,
}: ManagementRolesSectionProps) {
  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex items-center mb-6">
        <UserCog size={18} className="text-gray-700 mr-2" />
        <h3 className="text-lg font-bold text-gray-900">Management Roles</h3>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            General Manager <span className="text-red-500">*</span>
          </label>
          <Select
            value={values.generalManager}
            onValueChange={(value) => setFieldValue('generalManager', value)}
          >
            <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
              <SelectValue placeholder="Select from shareholders or add new" />
            </SelectTrigger>
            <SelectContent>
              {shareholders.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.fullName || `Shareholder ${s.id}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ErrorMessage
            name="generalManager"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Director <span className="text-red-500">*</span>
          </label>
          <Select
            value={values.director}
            onValueChange={(value) => setFieldValue('director', value)}
          >
            <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
              <SelectValue placeholder="Select from shareholders or add new" />
            </SelectTrigger>
            <SelectContent>
              {shareholders.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.fullName || `Shareholder ${s.id}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ErrorMessage
            name="director"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Ultimate Beneficial Owner (UBO){' '}
          <span className="text-red-500">*</span>
        </label>
        <Select
          value={values.ubo}
          onValueChange={(value) => setFieldValue('ubo', value)}
        >
          <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
            <SelectValue placeholder="Select from shareholders or add new" />
          </SelectTrigger>
          <SelectContent>
            {shareholders.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.fullName || `Shareholder ${s.id}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ErrorMessage
          name="ubo"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
}
