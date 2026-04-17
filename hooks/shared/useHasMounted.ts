'use client'
import { useEffect, useState } from "react";

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true) // Only run this component after it has been mounted on the browser
  }, [])

  return { hasMounted }
}

export { useHasMounted }