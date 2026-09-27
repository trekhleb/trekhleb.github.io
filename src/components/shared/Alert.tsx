import React from 'react';
import { FiInfo } from '@react-icons/all-files/fi/FiInfo';
import { FiAlertCircle } from '@react-icons/all-files/fi/FiAlertCircle';

type AlertType = 'error' | 'info';

type AlertProps = {
  type: AlertType,
  children: React.ReactNode | null,
};

type alertIcons = Record<AlertType, React.ReactNode>;

type alertClasses = Record<AlertType, string>;

export const InfoAlert: AlertType = 'info';
export const ErrorAlert: AlertType = 'error';

const alertIcons: alertIcons = {
  [InfoAlert]: <FiInfo size={22} aria-hidden="true" />,
  [ErrorAlert]: <FiAlertCircle size={22} aria-hidden="true" />,
};

const alertClasses: alertClasses = {
  [InfoAlert]: 'border-accent/20 bg-accent/5 text-accent shadow-sm backdrop-blur-md',
  [ErrorAlert]: 'border-red-500/20 bg-red-500/5 text-red-700 dark:text-red-300 shadow-sm backdrop-blur-md',
};

const Alert = (props: AlertProps): React.ReactElement | null => {
  const { children, type } = props;

  if (!children) {
    return null;
  }

  return (
    <div role={type === ErrorAlert ? 'alert' : 'status'} className={`flex items-start gap-4 rounded-xl border px-5 py-4 text-[15px] font-medium leading-relaxed ${alertClasses[type]}`}>
      <div className="mt-0.5 shrink-0">
        {alertIcons[type]}
      </div>
      <div className="min-w-0 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
};

export default Alert;
