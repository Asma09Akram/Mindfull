/*
import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function ErrorPage() {
  const error = useRouteError();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h1 className="display-1">Oops!</h1>
      <h2 className="mb-4">Sorry, an unexpected error occurred</h2>
      <p className="text-muted">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Return to Home
      </Link>
    </Container>
  );
}

export default ErrorPage;
*/

import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;