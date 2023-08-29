import { useRouteError } from "react-router-dom";

function Error() {
  const error: any = useRouteError();
  return (
    <div>
      {error.message ? "Error: " + error.message : <h1>There was an error!</h1>}
    </div>
  );
}

export default Error;
