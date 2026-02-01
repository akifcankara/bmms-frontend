'use client';
import { notFound, useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import BasicInfoSkeleton from './basic-info-skeleton';
import { useEffect } from 'react';
import { useBreadcrumb } from '@/store/breadcrumb';
import BasicInfoField from './basic-info-field';
import { AxiosError } from 'axios';

const LABEL_FULL_NAME = 'FULL NAME';
const LABEL_EMAIL_ADDRESS = 'EMAIL ADDRESS';
const LABEL_PHONE_NUMBER = 'PHONE NUMBER';
const LABEL_COMPANY_NAME = 'COMPANY NAME';
const LABEL_CURRENT_LOCATION = 'CURRENT LOCATION';

const ERROR_MESSAGE = 'Failed to load basic information';

export default function BasicInfoContent() {
  const params = useParams();
  const slug = params.client as string;
  const { setContent } = useBreadcrumb();

  const { data, isLoading, isError, error } = useQuery<BasicInfoResponse>({
    queryKey: ['kyc-basic-info', slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/basic-info`
      );
      return response.data;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (!error) {
      return;
    }
    if ((error as AxiosError).response?.status === 404) {
      return notFound();
    }
  }, [error]);

  useEffect(() => {
    if (!data) {
      return;
    }
    setContent(data.fullName, data.email, 'New Client', '/kyc-form');
  }, [data]);

  if (isLoading) {
    return <BasicInfoSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-red-500 text-sm">{ERROR_MESSAGE}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <BasicInfoField label={LABEL_FULL_NAME} value={data.fullName} />
      <BasicInfoField label={LABEL_EMAIL_ADDRESS} value={data.email} />
      <BasicInfoField label={LABEL_PHONE_NUMBER} value={data.phoneNumber} />
      <BasicInfoField label={LABEL_COMPANY_NAME} value={data.companyName} />
      <div className="col-span-2">
        <BasicInfoField
          label={LABEL_CURRENT_LOCATION}
          value={data.currentLocation}
        />
      </div>
    </div>
  );
}
