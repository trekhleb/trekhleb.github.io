import React from 'react';
import { inputClasses } from './Input';
import { buttonBaseClasses, buttonKindClasses, BUTTON_KIND_PRIMARY } from './Button';

type SubscriptionFormProps = {
  withHeader?: boolean,
  className?: string,
};

// Mailchimp form. The action URL, field names, honeypot and "required" flags must stay as they are.
const SubscriptionForm = (props: SubscriptionFormProps): React.ReactElement => {
  const { withHeader = true, className = '' } = props;

  const formAction = 'https://dev.us1.list-manage.com/subscribe/post?u=7714f14ff32085c685da2cfaa&amp;id=53ffa81463';

  const header = withHeader ? (
    <h2 className="text-h2 mb-2">
      Subscribe to the Newsletter
    </h2>
  ) : null;

  return (
    <div className={`rounded-xl2 border border-line bg-subtle/60 p-6 sm:p-8 ${className}`}>
      {header}

      <p className="mb-5 text-sm text-muted">
        Get my latest posts and project updates by email
      </p>

      <form action={formAction} method="post" className="flex flex-col gap-3 sm:flex-row">
        <input
          placeholder="First Name"
          aria-label="First name"
          type="text"
          name="FNAME"
          autoComplete="given-name"
          className={`${inputClasses} w-full sm:w-40`}
          required
        />

        <input
          placeholder="Email"
          aria-label="Email"
          type="email"
          name="EMAIL"
          autoComplete="email"
          className={`${inputClasses} w-full sm:flex-1`}
          required
        />

        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="b_7714f14ff32085c685da2cfaa_53ffa81463"
            tabIndex={-1}
          />
        </div>

        <input
          type="submit"
          value="Subscribe"
          className={`${buttonBaseClasses} ${buttonKindClasses[BUTTON_KIND_PRIMARY]} cursor-pointer`}
        />
      </form>
    </div>
  );
};

export default SubscriptionForm;
