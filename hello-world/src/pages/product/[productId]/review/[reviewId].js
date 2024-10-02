import { useRouter } from "next/router";

function ReviewDetails() {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <h1 className="text-xl">
      Review number {reviewId} for product {productId}
    </h1>
  );
}

export default ReviewDetails;
