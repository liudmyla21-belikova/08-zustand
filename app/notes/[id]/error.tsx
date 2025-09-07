"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error }: Props) => {
  return <p>Could find note details. {error.message}</p>;
};

export default Error;
