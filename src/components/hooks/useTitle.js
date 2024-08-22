import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Bd Toys Market`;
  }, [title])
};

export default useTitle;