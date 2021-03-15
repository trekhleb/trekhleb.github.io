import React from 'react';

type SubscriptionFormProps = {
  withHeader?: boolean,
};

const SubscriptionForm = (props: SubscriptionFormProps): React.ReactElement => {
  const { withHeader = true } = props;

  const formAction = 'https://dev.us1.list-manage.com/subscribe/post?u=7714f14ff32085c685da2cfaa&amp;id=53ffa81463';

  const inputClass = 'border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none';

  const header = withHeader ? (
    <h1 className="text-grey-darkest uppercase font-bold text-xl mb-3">
      Subscribe to the Newsletter
    </h1>
  ) : null;

  return (
    <div className="bg-white rounded-md shadow-md p-8">
      {header}

      <p className="text-sm mb-3">
        Get my latest posts and project updates by email
      </p>

      <form action={formAction} method="post" className="flex flex-col">
        <input
          placeholder="First Name"
          type="text"
          name="FNAME"
          className={inputClass}
          required
        />

        <input
          placeholder="Email"
          type="email"
          name="EMAIL"
          className={inputClass}
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
          className="transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"
        />
      </form>
    </div>
  );
};

export default SubscriptionForm;
