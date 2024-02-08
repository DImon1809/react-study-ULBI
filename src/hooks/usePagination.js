import { useMemo } from "react";

export const usePagination = (totalPage) => {
  const pageArray = useMemo(() => {
    let _temp = [];

    for (let i = 0; i < totalPage; i++) {
      _temp.push(i + 1);
    }

    return _temp;
  }, [totalPage]);

  return pageArray;
};
