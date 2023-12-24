import { useEffect, useState } from "react";
import { useAppSelector } from "./reduxHooks";

export const useDivisionHook = () => {
  const { divisions } = useAppSelector((state) => state.compalint);
  const [provinceList, setProvinceList] = useState<Array<string>>([]);

  useEffect(() => {
    if (divisions) {
      const uniqueProvinces = divisions.body.reduce<string[]>(
        (acc, division) => {
          if (!acc.includes(division.province)) {
            acc.push(division.province);
          }
          return acc;
        },
        []
      );
      setProvinceList(uniqueProvinces);
    }
  }, [divisions]);

  const getDivisionByProvinceAndDepartment = (
    provinceId: string,
  ) => {
    return divisions?.body.filter((item) => provinceId === item.province);
  };

  return { provinceList, getDivisionByProvinceAndDepartment };
};
