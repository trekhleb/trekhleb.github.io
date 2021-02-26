import React, { ErrorInfo } from 'react';
import Alert, { ErrorAlert } from './Alert';

type Props = {
  children: React.ReactNode,
};

type State = {
  hasError: boolean,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('+++++ componentDidCatch');
    // You can also log the error to an error reporting service.
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    console.log('+++++', {hasError});

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Alert type={ErrorAlert}>
          Component has crashed
        </Alert>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
