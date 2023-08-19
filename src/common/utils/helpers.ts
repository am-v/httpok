import groupBy from "lodash/groupBy";

import codes from "@/common/constants/codes.json";
import { Codes } from "@/common/types";

export const getErrors = () => {
  const errors: Codes = Object.entries(codes)
    .map(([key, value]) => ({
      id: key,
      isHeader: key.indexOf("xx") !== -1,
      group: `${key[0]}xx`,
      ...value,
    }))
    .filter(({ id }) => id.indexOf("xx") === -1);

  const errorsGroup = Object.entries(groupBy(errors, (ele) => ele.group)).map(
    ([key, list]) => ({ id: key, ...codes[key], list })
  );

  return errorsGroup;
};

export default getErrors;
