import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setResponse({
          type: "success",
          message: `Thanks for your submission! Unfortunately this is a testing version. You can reach me at claudio.leite@hotmail.com.`,
        });
      } else {
        setResponse({
          type: "error",
          message: result.message || "Something went wrong, please try again later!",
        });
      }
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong. Unfortunately this is a testing version. You can reach me at claudio.leite@hotmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
