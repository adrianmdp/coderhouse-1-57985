import { useEffect, useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {/* { 
        isLoading 
          ? (
            <Spinner />
          ) : (
            <FormContact />
          )
      } */}
    </div>
  );
};

export default Contact;
