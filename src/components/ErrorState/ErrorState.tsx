import images from '@assets/images';
import { EmptyState } from '@components/EmptyState/EmptyState';
import React from 'react';

type ErrorStateProps = {
  errorMessage: any;
  onRefresh: any;
};

export default function ErrorState({
  errorMessage,
  onRefresh,
}: ErrorStateProps) {
  return (
    <EmptyState
      title="Oops! Something went wrong..."
      subtitle={errorMessage}
      imagePath={images.empty.error}
      buttonText="Try Again"
      onPress={onRefresh}
    />
  );
}
