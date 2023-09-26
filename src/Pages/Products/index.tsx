import { SEARCH_DRINK_BY_ID } from "../../api/url";
import { useParams } from "react-router-dom";
interface SingleProductPageProps {}
export const SingleProductPage = ({}: SingleProductPageProps) => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h1>Hello World!</h1>
      {id}
    </>
  );
};
